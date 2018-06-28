/**
 * desc：
 * author：Realank
 * date：
 */

import App from './Pages/App';
import ButtonPage from './Pages/ButtonPage'
import ImagePage from './Pages/ImagePage'
import TimerPage from './Pages/TimerPage'
import InputPage from './Pages/InputPage'
import WidgetPage from './Pages/WidgetPage'

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
    Input: {
        screen: InputPage
    },
    Widget: {
        screen: WidgetPage
    },
}, {

    initialRouteName: 'Home', // 设置默认的页面组件

});