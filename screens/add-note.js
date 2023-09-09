import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'
import { screens } from '../components/constants'

const AddNote = ({ setScreen, setNotes }) => {
  const [note, setNote] = useState('')
  const handleNoteChange = (text) => {
    console.log(text);
    setNote(text)
  }
  return (
    <View>
      <View>
        <Icon onPress={() => { setScreen(screens.home) }} name='arrow-forward-outline' />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.textInput}>
          <TextInput placeholder='add your note...' value={note} onChangeText={handleNoteChange} />
        </View>
        <Button title='AddNote' onPress={() => {  setNotes('ADD_NOTE', note); setScreen(screens.home) }
        } />
      </View>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20
  },
  textInput: {
    elevation: 10,
    backgroundColor: '#f6f6f6',
    marginBottom: 30
  }
})