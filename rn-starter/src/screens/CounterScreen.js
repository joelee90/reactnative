import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER = 1;

const reducer = (state, action) => {
  // state === {counter : number}
  // action === {type: 'increase' || 'decrease', payload: 1 || -1}
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Text style={styles.textStyle}>Current Count: {counter}</Text>
      <Button
        title='+'
        onPress={() => dispatch({ type: 'increase', payload: COUNTER })}
      />
      <Button
        title='-'
        onPress={() => dispatch({ type: 'decrease', payload: -COUNTER })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default CounterScreen;
