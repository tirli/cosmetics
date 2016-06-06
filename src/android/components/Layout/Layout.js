import React, { Component, PropTypes } from 'react';
import { StyleSheet, DrawerLayoutAndroid, View, Text } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/Ionicons';
import { getTheme } from 'react-native-material-kit';
const theme = getTheme();

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: theme.primaryColor,
    height: 56,
  },
  container: {
    flex: 1,
  },
});

class Layout extends Component {
  static propTypes = {
    back: PropTypes.bool,
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    title: 'Cosmetics',
  }

  open = () => {
    this.refs.drawer.openDrawer();
  }

  back = () => {
    this.props.navigator.pop();
  }

  renderNav() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Im in the Drawer!</Text>
      </View>
    );
  }

  render() {
    const { back, title } = this.props;

    return (
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderNav}
      >
        <ToolbarAndroid
          titleColor="white"
          navIconName={back ? 'md-arrow-back' : 'md-menu'}
          onIconClicked={back ? this.back : this.open}
          style={styles.toolbar}
          title={title}
        />
        <View style={styles.container}>
          {this.props.children}
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default Layout;
