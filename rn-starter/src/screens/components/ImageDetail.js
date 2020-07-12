import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Image Score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ImageDetail;
