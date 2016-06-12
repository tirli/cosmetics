import React, { Component, PropTypes } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MKButton } from 'react-native-material-kit';
import { connect } from 'react-redux';

import { load } from '../../redux/modules/products';
import { Layout } from '../../components';
import CosmeticItem from './components/CosmeticItem/CosmeticItem';

const selector = ({ products }) => ({ products });
const actions = { load };

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  buttonIcon: {
    fontSize: 25,
    color: 'white',
  },
});

const AccentColoredFab = MKButton.accentColoredFab()
  .withStyle(styles.button)
  .build();

class CosmeticsList extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    products: PropTypes.object,
    load: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.load();
  }

  addNewProduct = () => {
    this.props.navigator.push({
      id: 'addProduct',
    });
  }

  render() {
    const { products } = this.props;
    return (
      <Layout navigator={this.props.navigator}>
        <ScrollView>
          {
            products.entities.map((product, index) => (
              <CosmeticItem key={index} product={product} />
            ))
          }
        </ScrollView>
        <AccentColoredFab onPress={this.addNewProduct}>
          <Icon name="md-add" style={styles.buttonIcon} />
        </AccentColoredFab>
      </Layout>
    );
  }
}

export default connect(selector, actions)(CosmeticsList);
