<<<<<<< HEAD
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RotasLoginStack from './src/components/rotasStack/RotasLoginStack';

export default function App() {
    return (
        <NavigationContainer>

            <StatusBar barStyle="light-content" backgroundColor="#081a31"/>

            <RotasLoginStack />

        </NavigationContainer> 
    );
}
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> a062479a04ee6592d1f3796f5cc534e4129ac1e1
