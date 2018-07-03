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
import { createBottomTabNavigator } from 'react-navigation'

export default class Tab extends Component {
    static navigationOptions = {
      title: 'Tab'
    };

    render () {
      const TabNav = createBottomTabNavigator({
        Home: HomeScreen,
        Settings: SettingsScreen
      })
      return (
        <TabNav />
      )
    }
}
