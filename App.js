import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeRoot from './components';
import { initialState, reducer } from './components/reducer';
import UseAppReducer from './hooks/use-app-reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {notes = []} = state
  const updateValues = (type, val) => {
    dispatch({type, value: val})
  }
  console.log(state, 'all notes');
  return (
    <View>
      <HomeRoot notes={notes} setNotes={updateValues}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
