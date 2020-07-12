import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.textStyle}>Current Count: {counter}</Text>
      <Button title='+' onPress={() => setCounter(counter + 1)} />
      <Button title='-' onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default CounterScreen;
