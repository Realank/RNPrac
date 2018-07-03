import { AppRegistry } from 'react-native'
import Router from './Router'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

AppRegistry.registerComponent('RNPrac', () => Router)
