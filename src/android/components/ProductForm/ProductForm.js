import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { Layout } from '../../components';

class ProductForm extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  render() {
    return (
      <Layout navigator={this.props.navigator} title="Add new product" back >
        <Text>Form</Text>
      </Layout>
    );
  }
}

export default ProductForm;
