
import { StyleSheet } from 'react-native';
import React, {Component} from 'react';
import App from './App';
import Router from 'react-native-simple-router';

// The Router wrapper

const firstRoute = {
    name: 'Welcome!',
    component: App,
};
export default class Router2 extends Component {

    render() {
        return (
            <Router
                firstRoute={firstRoute}
                headerStyle={styles.header}
            />
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5cafec',
    },
});