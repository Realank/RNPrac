/**
 * desc：
 * author：Realank
 * date：
 */

import App from './App';
import ButtonPage from './ButtonPage'

import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
    Home: {
        screen: App
    },
    Button: {
        screen: ButtonPage
    }
}, {

    initialRouteName: 'Home', // 设置默认的页面组件

});