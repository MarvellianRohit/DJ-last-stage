import * as React from 'react';
import { View } from 'react-native';
import PinkButton from './components/PinkButton';
import TealButton from './components/TealButton';
import OrangeButton from './components/OrangeButton';
import PurpleButton from './components/PurpleButton';
import BlueButton from './components/BlueButton';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
       <AppHeader />
        <PinkButton />
        <TealButton />
        <OrangeButton />
        <PurpleButton />
        <BlueButton />
        
      </View>
    );
  }
}
