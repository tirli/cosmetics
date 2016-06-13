import React, { Component, PropTypes } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

class MultiChoise extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static Item = (props) => {
    const change = props.onChange.bind(this, props.value);

    return (
      <TouchableNativeFeedback
        onPress={change}
      >
        <View
          style={props.style}
        >
          {props.children}
        </View>
      </TouchableNativeFeedback>
    );
  }

  change = (value) => {
    const prev = this.props.value;

    const index = prev.indexOf(value);

    if (index === -1) {
      this.props.onChange([...prev, value]);
    } else {
      this.props.onChange([...prev.slice(0, index), ...prev.slice(index + 1)]);
    }
  }

  render() {
    return (
      <View>
        {
          React.Children.map(
            this.props.children,
            child => React.cloneElement(child, { onChange: this.change })
          )
        }
      </View>
    );
  }
}

export default MultiChoise;
