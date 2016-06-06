import React, { Component } from 'react';
import { Navigator, BackAndroid } from 'react-native';
import { CosmeticsList, ProductForm } from '../../components';
import { setTheme, MKColor } from 'react-native-material-kit';

setTheme({
  primaryColor: MKColor.Cyan,
  accentColor: MKColor.LightGreen,
});

let nav;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (nav.getCurrentRoutes().length === 1) {
    return false;
  }
  nav.pop();
  return true;
});

class App extends Component {
  navigatorRenderScene(route, navigator) {
    nav = navigator;
    switch (route.id) {
      case 'addProduct':
        return (<ProductForm navigator={navigator} title="Add new product" />);
      case 'cosmeticsList':
      default:
        return (<CosmeticsList navigator={navigator} title="List" />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'cosmeticsList' }}
        renderScene={this.navigatorRenderScene}
      />
    );
  }
}

export default App;
