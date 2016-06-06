import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/android/containers/App/App';

class cosmetics extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('cosmetics', () => cosmetics);
