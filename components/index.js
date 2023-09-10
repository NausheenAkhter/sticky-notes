import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header';
import { screens } from './constants';
import AddNote from '../screens/add-note';
import AllNotes from '../screens/all-note';
import Home from '../screens/home';

const getComponent = (comp) => {
  switch (comp) {
    case 'HOME':
      return Home
    case 'ADD_NOTE':
      return AddNote
    case 'SEE_NOTES':
      return AllNotes

    default:
      return Home
  }
}

export default function HomeRoot({ notes, setNotes }) {
  const [currentScreen, setCurrentScreen] = useState(screens.home)
  const Component = getComponent(currentScreen)
  
  return (
    <View>
      <Header />
      <Component setScreen={setCurrentScreen} notes={notes} setNotes={setNotes} />
    </View>
  );
}

const styles = StyleSheet.create({

});
