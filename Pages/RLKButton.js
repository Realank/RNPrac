/**
 * desc：
 * author：
 * date：
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <View>
                <Text style={styles.text}>button</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    text : {
        margin: 10,
        color: '#31a6ff',
        fontSize: 20
    }
});