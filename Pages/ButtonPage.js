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
    Button,
} from 'react-native';
import ButtonView from './Views/ButtonView';

export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <View>
                <Text style={styles.text}>文本</Text>
                <ButtonView height={100} onPress={()=>console.log('button press')}/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    text : {
        margin: 10,
        color: '#31a6ff',
        fontSize: 20,

    }
});