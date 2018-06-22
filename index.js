import { AppRegistry } from 'react-native';
import MainScreen from './App';
import SecondPage from './SecondPage'
import {
    StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: SecondPage},
});

AppRegistry.registerComponent('RNPrac', () => App);
