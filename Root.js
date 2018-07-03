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
import { Provider } from 'react-redux'
import Router from './Router'
import {store} from './Pages/BusinessService/CounterBusiness'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
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
