import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import App from './src/android/containers/App/App';
import store from './src/android/redux/store';

class cosmetics extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('cosmetics', () => cosmetics);
