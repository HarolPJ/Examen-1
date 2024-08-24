import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionA}>
        <Text style={styles.text}>A</Text>
      </View>
      <View style={styles.sectionB}>
        <Text style={styles.text}>B</Text>
      </View>
      <View style={styles.sectionC}>
        <Text style={styles.text}>C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  sectionA: {
    width: '90%',
    height: '20%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionB: {
    width: '90%',
    height: '40%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionC: {
    width: '90%',
    height: '10%',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
