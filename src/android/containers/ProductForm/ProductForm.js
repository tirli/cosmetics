import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Picker,
  DatePickerAndroid,
  TouchableWithoutFeedback,
  Text,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MKTextField, MKButton } from 'react-native-material-kit';
import { reduxForm } from 'redux-form';
import ImagePicker from 'react-native-image-picker';

import { Layout } from '../../components';
import { create } from '../../redux/modules/products';
import { load as loadCategories } from '../../redux/modules/categories';
import styleSheet from './styles';

const formData = {
  form: 'product',
  fields: [
    'name',
    'producer',
    'categories',
    'expireDate',
    'validAfterOpen',
    'opened',
    'photo',
    'price',
    'commentary',
  ],
};
const today = new Date();
const selector = ({ categories }, { product }) => ({
  categoryList: categories.entities,
  initialValues: {
    categories: [],
    expireDate: today,
    opened: today,
    ...product,
  },
});
const actions = { create, loadCategories };

const styles = StyleSheet.create(styleSheet);

const showPicker = (field, options) => async () => {
  const { action, year, month, day } = await DatePickerAndroid.open(options);
  if (action !== DatePickerAndroid.dismissedAction) {
    const date = new Date(year, month, day);
    field.onChange(date);
  }
};


const AccentColoredFab = MKButton.accentColoredFab()
  .withStyle(styles.photoButton)
  .build();

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withStyle(styles.textfield)
  .withFloatingLabelFont({
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .build();

class ProductForm extends Component {
  static propTypes = {
    product: PropTypes.object,
    categoryList: PropTypes.array.isRequired,
    fields: PropTypes.object,
    loadCategories: PropTypes.func,
    navigator: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      simpleDate: new Date(),
    };
  }

  componentDidMount() {
    this.props.loadCategories();
  }

  openCamera = () => {
    const options = {
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo',
      chooseFromLibraryButtonTitle: 'Choose from Library',
      quality: 1,
      maxWidth: 3000,
      maxHeight: 3000,
      cameraType: 'back',
      mediaType: 'photo',
      allowsEditing: true,
      noData: false,
    };

    ImagePicker.showImagePicker(options, (response) => {
      const source = {
        uri: `data:image/jpeg;base64,${response.data}`,
        isStatic: true,
      };
      this.props.fields.photo.onChange(source);
    });
  }

  render() {
    const {
      fields: {
        name,
        producer,
        categories,
        expireDate,
        validAfterOpen,
        opened,
        photo,
        price,
        commentary,
      },
      categoryList,
    } = this.props;
    console.log(photo);
    return (
      <Layout navigator={this.props.navigator} title="Add new product" back >
        <AccentColoredFab style={styles.photoButton} onPress={this.openCamera}>
          <Icon name="md-camera" style={styles.photoIcon} />
        </AccentColoredFab>
        <View style={styles.photo}>
          <Image style={styles.photoImg} source={photo.value} />
        </View>
        <View style={styles.form}>
          <TextfieldWithFloatingLabel placeholder="Name *" {...name} />
          <TextfieldWithFloatingLabel placeholder="Producer" {...producer} />
          <View style={styles.datePicker} >
            <Picker
              style={styles.select}
              selectedValue={categories.value}
              onValueChange={categories.onChange}
            >
            {
              categoryList.map((category, index) =>
                <Picker.Item key={index} label={category} value={category} />
              )
            }
            </Picker>
          </View>
          <TouchableWithoutFeedback
            onPress={showPicker(expireDate, { date: expireDate.value })}
          >
            <View style={styles.datePicker}>
              <Text style={styles.text}>
                {expireDate.value.toLocaleDateString()}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TextfieldWithFloatingLabel
            placeholder="Valid after open(in months)"
            {...validAfterOpen}
            keyboardType="numeric"
          />
          <View>
            <Switch
              onValueChange={(value) => this.setState({ isOpened: value })}
              value={this.state.isOpened}
            />
            {
              this.state.isOpened
                ? (
                <TouchableWithoutFeedback
                  onPress={showPicker(opened, { date: opened.value })}
                >
                  <View style={styles.datePicker}>
                    <Text style={styles.text}>
                      {opened.value.toLocaleDateString()}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                ) : null
            }
          </View>

          <TextfieldWithFloatingLabel
            placeholder="Price"
            {...price}
            keyboardType="numeric"
          />
          <TextfieldWithFloatingLabel
            placeholder="Commentary"
            {...commentary}
          />
        </View>

      </Layout>
    );
  }
}

export default reduxForm(formData, selector, actions)(ProductForm);
