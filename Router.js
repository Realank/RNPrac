/**
 * desc：
 * author：Realank
 * date：
 */

import App from './Pages/App';
import ButtonPage from './Pages/ButtonPage'
import ImagePage from './Pages/ImagePage'
import TimerPage from './Pages/TimerPage'

import { createStackNavigator } from 'react-navigation';

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
}, {

    initialRouteName: 'Home', // 设置默认的页面组件

});