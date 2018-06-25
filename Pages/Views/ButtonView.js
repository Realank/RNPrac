import {Button, StyleSheet, TouchableOpacity, Text} from 'react-native'
import React, {Component} from 'react';

export default class ButtonView extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {

        const titleA =  this.props.title || 'Button'
        return <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.buttonBackground}
        >
            <Text style={[styles.buttonText,styles.redText]}>{titleA}</Text>
        </TouchableOpacity>;
    }

}

const styles = StyleSheet.create({
    buttonBackground: {
        margin: 10,
        backgroundColor: '#ffffff',
        width: 150,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        color: '#1057d4',
    },
    buttonText: {
        color: '#1057d4',
        fontSize: 20,
    },
    redText: {
        color: '#990000'
    }
});