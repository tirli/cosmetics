import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { load } from '../../redux/modules/categories';

const selector = ({ categories }) => ({ categories });
const actions = { load };

class Drawer extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { categories } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Drawer!</Text>
        {
          !categories.loading
            ? categories.entities.map(c => <Text key={c}>{c}</Text>)
            : <Text>Loading</Text>
        }
      </View>
    );
  }
}

export default connect(selector, actions)(Drawer);
