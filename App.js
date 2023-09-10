import { useReducer } from 'react';
import { View } from 'react-native';
import HomeRoot from './components';
import { initialState, reducer } from './components/reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {notes = []} = state
  const updateValues = (type, val) => {
    dispatch({type, value: val})
  }

  return (
    <View>
      <HomeRoot notes={notes} setNotes={updateValues}/>
    </View>
  );
}
