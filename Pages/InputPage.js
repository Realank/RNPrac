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
    TextInput,
} from 'react-native';

export default class  extends Component {
    static navigationOptions = {
        title: 'Input',
    };
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {

        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.text}>
                    {'input:' + this.state.text.split(' ').map((word) => word).join('-')}
                </Text>
            </View>

        );
    }

}
const styles = StyleSheet.create({
    text: {
        margin: 10,
        color: '#31a6ff',
        fontSize: 20
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#444444',
        borderWidth: 2,
    }
});
