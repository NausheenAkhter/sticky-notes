import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { screens } from '../components/constants'

const AllNotes = ({ setScreen, notes }) => {
  return (
    <View>
      <View>
        <Icon onPress={() => { setScreen(screens.home) }} name='arrow-forward-outline' />
      </View>
      <View style={styles.mainContainer}>
        <Text>All Notes:</Text>
        {notes.map((note) => <Text>{note}</Text>)}
      </View>
    </View>
  )
}

export default AllNotes

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20
  }
})