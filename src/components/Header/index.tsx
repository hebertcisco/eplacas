import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>E-Placas</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    padding: 20,
  },
  headerTitle: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 34,
    lineHeight: 39,
    display: 'flex',
    alignItems: 'center',
  },
});
