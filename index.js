import { AppRegistry } from 'react-native'
import Root from './Root'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

AppRegistry.registerComponent('RNPrac', () => Root)
