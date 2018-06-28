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
import ButtonView from './Views/ButtonView';
import Button from 'react-native-button';
export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {name: 'hello'}
    }

    print(string) {
        console.log(this.state.name + string)
    }

    render() {

        return (
            <View>
                <Text style={styles.text}>文本</Text>
                <ButtonView title={'CustomButton'} height={100} onPress={()=>console.log('button press')}/>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    // onPress={() => {this.print(' world')}}
                    onPress={this.print.bind(this,' world')}
                >
                    Press Me!
                </Button>
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