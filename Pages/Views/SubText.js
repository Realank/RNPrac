/**
 * desc：
 * author：
 * date：
 */

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class SubText extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    console.log(this.props)
    return (
      <View>
        <Text style={styles.text}>{this.props.counter.count}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    margin: 15,
    color: '#31a6ff',
    fontSize: 20
  }
})
