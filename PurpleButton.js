import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class PurpleButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.vibrationdata.com/piano_D_sharp.mp3' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.playSound}>
        <Text style={styles.buttonText}> 
          Press Me 
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    marginLeft: 108,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(8, 0, 8, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 100,
    borderRadius: 60,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
export default PurpleButton;
