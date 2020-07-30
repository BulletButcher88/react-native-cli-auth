import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ headerText }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.header}>{headerText}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  header: {
    fontSize: 20,
  },
});

export default Header;