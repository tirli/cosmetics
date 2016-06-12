import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();
const styles = StyleSheet.create({
  card: {
    elevation: 1,
    margin: 5,
    marginBottom: 0,
    padding: 5,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default function CosmeticItem(props) {
  const { product } = props;

  return (
    <View style={[styles.card, theme.cardStyle]}>
      <View>
        <Image source={{ uri: product.photo }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text>
          {product.producer}
        </Text>
        <Text>{product.expireDate}</Text>
      </View>
    </View>
  );
}

CosmeticItem.propTypes = {
  product: PropTypes.object.isRequired,
};
