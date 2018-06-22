/**
 * desc：
 * author：Realank
 * date：
 */

import App from './App';
import Next from './SecondPage';
import RLKButton from './RLKButton'

import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
    Home: {
        screen: App
    },
    Button: {
        screen: RLKButton
    }
}, {

    initialRouteName: 'Home', // 设置默认的页面组件

});