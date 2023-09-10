import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text>Sticky Notes</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '35%',
    backgroundColor: Platform.OS === 'android' ? 'purple' : 'purple',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  header: {
    color: Platform.OS === 'android' ? 'white' : 'red',
    fontWeight: 'bold'
  }
})