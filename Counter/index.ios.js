import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import box from './ios/views/box';

let CounterApp = () => {
  return (
      <View style={styles.app}>
        <box.Counter/>
      </View>
  );
};

const styles = StyleSheet.create({
  app: {
    margin: 30
  }
});


AppRegistry.registerComponent('Counter', () => CounterApp);
