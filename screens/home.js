import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { screens } from '../components/constants';
import React from 'react'

const Home = ({ setScreen }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemButton}>
        <Pressable onPress={() => setScreen(screens.addNote)}>

          <Text>Add a note</Text>
          <Icon name='arrow-forward-outline' />
        </Pressable>

      </View>
      <View style={styles.itemButton}>
        <Pressable onPress={() => setScreen(screens.seeNotes)}>

          <Text>See all notes</Text>
          <Icon name='arrow-forward-outline' />
        </Pressable>

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50
  },
  itemButton: {
    width: Dimensions.get('screen').width - 100,
    height: '50%',
    marginVertical: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    elevation: 10
  }
})