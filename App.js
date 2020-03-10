import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Chega</Text>
      <Text>Chora</Text>
    </View>
  );
}
