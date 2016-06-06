import React, { Component, PropTypes } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MKButton } from 'react-native-material-kit';

import { Layout } from '../../components';

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
];

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
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
  }

  addNewProduct = () => {
    this.props.navigator.push({
      id: 'addProduct',
    });
  }

  render() {
    return (
      <Layout navigator={this.props.navigator}>
        <ScrollView>
          {
            data.map((d, index) => <Text key={index}>{d}</Text>)
          }
        </ScrollView>
        <AccentColoredFab onPress={this.addNewProduct}>
          <Icon name="md-add" style={styles.buttonIcon} />
        </AccentColoredFab>
      </Layout>
    );
  }
}

export default CosmeticsList;
