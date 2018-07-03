/**
 * desc：
 * author：Realank
 * date：
 */

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import App from './Pages/App'
import ButtonPage from './Pages/ButtonPage'
import ImagePage from './Pages/ImagePage'
import TimerPage from './Pages/TimerPage'
import InputPage from './Pages/InputPage'
import WidgetPage from './Pages/WidgetPage'
import AlertPage from './Pages/AlertPage'
import LayoutPage from './Pages/LayoutPage'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import ReduxPage from './Pages/ReduxPage'

class HomeScreen extends Component {
  // static navigationOptions = {
  //     // title: 'HomeScreen',
  //     headerTitle: 'Home',
  // };
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    )
  }
}

class SettingsScreen extends Component {
  // static navigationOptions = {
  //     title: 'SettingsScreen',
  // };
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

export default createStackNavigator({
  Home: {
    screen: App
  },
  Button: {
    screen: ButtonPage
  },
  Image: {
    screen: ImagePage
  },
  Timer: {
    screen: TimerPage
  },
  Input: {
    screen: InputPage
  },
  Widget: {
    screen: WidgetPage
  },
  Alert: {
    screen: AlertPage
  },
  Layout: {
    screen: LayoutPage
  },
  Tab: {
    screen: createBottomTabNavigator({
      Home: HomeScreen,
      Settings: SettingsScreen
    }),
    navigationOptions: ({navigation}) => ({
      title: 'Tab'
    })
  },
  Redux: {
    screen: ReduxPage
  }
}, {

  initialRouteName: 'Home' // 设置默认的页面组件

})
