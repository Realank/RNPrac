/**
 * desc：
 * author：
 * date：
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default class extends Component {
    static navigationOptions = {
      title: 'ImagePage'
    };
    constructor (props) {
      super(props)
      this.state = {}
    }

    render () {
      return (
        <View>
          <Image
            source={{uri: 'data:image/png;base64,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'}}
            style={styles.photo}
          />
          <Image
            source={require('../Resources/rnicon.jpg')}
            style={styles.photo}
          />
        </View>
      )
    }
}
const styles = StyleSheet.create({
  text: {
    margin: 10,
    color: '#31a6ff',
    fontSize: 20
  },
  photo: {
    width: 80,
    height: 60,
    resizeMode: 'contain', // cover,contain,stretch,center
    backgroundColor: '#d95a1c',
    margin: 10
  }
})
