import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { load } from '../../redux/modules/categories';

import { MultiChoise } from '../../components';

const selector = ({ categories }) => ({ categories });
const actions = { load };

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 22,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 5,
  },
  text: {
    fontSize: 24,
  },
  active: {
    backgroundColor: 'pink',
  },
});


class Drawer extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
  }

  state = {
    selected: [],
  }

  componentDidMount() {
    this.props.load();
  }

  handleSelect = (value) => {
    this.setState({
      selected: value,
    });
  }

  selectAll = () => {
    if (this.state.selected.length !== this.props.categories.entities.length) {
      this.setState({
        selected: this.props.categories.entities,
      });
    } else {
      this.setState({
        selected: [],
      });
    }
  }

  render() {
    const { categories } = this.props;

    const all = this.state.selected.length === categories.entities.length;

    const selectedExceptAll = (value) =>
      this.state.selected.indexOf(value) !== -1
      && !all;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Drawer!</Text>
        {
          !categories.loading
            ?
              <View>
                <TouchableNativeFeedback
                  onPress={this.selectAll}
                >
                  <View
                    style={[styles.item, all ? styles.active : {}]}
                  >
                    <Icon name="md-pricetag" style={styles.icon}/>
                    <Text style={styles.text}>All</Text>
                  </View>
                </TouchableNativeFeedback>
                <MultiChoise
                  value={this.state.selected}
                  onChange={this.handleSelect}
                >
                {
                  categories.entities.map(c =>
                    <MultiChoise.Item
                      key={c}
                      value={c}
                      style={[
                        styles.item,
                        selectedExceptAll(c) ? styles.active : {},
                      ]}
                    >
                      <Icon name="md-pricetag" style={styles.icon} />
                      <Text
                        style={styles.text}
                      >{c}</Text>
                    </MultiChoise.Item>
                  )
                }
                </MultiChoise>
              </View>
            : <Text>Loading</Text>
        }
      </View>
    );
  }
}

export default connect(selector, actions)(Drawer);
