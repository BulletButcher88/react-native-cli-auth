import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => { }}>
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    height: 900,
    backgroundColor: 'rgba(50, 50, 50, 0.95)',
    position: 'relative',
    justifyContent: 'center',
  },
});

export default Confirm;
