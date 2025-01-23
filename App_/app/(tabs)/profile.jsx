import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ClientProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>client profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
