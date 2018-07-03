/**
 * desc：
 * author：
 * date：
 */
import React, {Component} from 'react'
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import ButtonView from './Views/ButtonView'

var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
    'catalysts for change. Dynamically revolutionize.'

export default class extends Component {
    static navigationOptions = {
      title: 'Alert'
    };
    constructor (props) {
      super(props)
      this.state = {}
    }

    render () {
      return (
        <View>
          <TouchableHighlight style={styles.wrapper}
            onPress={() => Alert.alert(
              'Alert Title',
              alertMessage
            )}>
            <View style={styles.button}>
              <Text>Alert with message and default button</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.wrapper}
            onPress={() => Alert.alert(
              'Alert Title',
              alertMessage,
              [
                {text: 'OK', onPress: () => console.log('OK Pressed!')}
              ]
            )}>
            <View style={styles.button}>
              <Text>Alert with one button</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.wrapper}
            onPress={() => Alert.alert(
              'Alert Title',
              alertMessage,
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                {text: 'OK', onPress: () => console.log('OK Pressed!')}
              ]
            )}>
            <View style={styles.button}>
              <Text>Alert with two buttons</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.wrapper}
            onPress={() => Alert.alert(
              'Alert Title',
              null,
              [
                {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
                {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
                {text: 'Baz', onPress: () => console.log('Baz Pressed!')}
              ]
            )}>
            <View style={styles.button}>
              <Text>Alert with three buttons</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.wrapper}
            onPress={() => Alert.alert(
              'Foo Title',
              alertMessage,
              '..............'.split('').map((dot, index) => ({
                text: 'Button ' + index,
                onPress: () => console.log('Pressed ' + index)
              }))
            )}>
            <View style={styles.button}>
              <Text>Alert with too many buttons</Text>
            </View>
          </TouchableHighlight>
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
  wrapper: {
    borderRadius: 5,
    marginBottom: 5
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10
  }
})
