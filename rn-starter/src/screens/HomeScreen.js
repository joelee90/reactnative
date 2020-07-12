import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title='Take Me To Components'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Take Me To List'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Take Me To Image'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Take Me To Counter'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Take Me To Color'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Take Me To Square'
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
