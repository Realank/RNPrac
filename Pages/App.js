/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
} from 'react-native';


type Props = {};

export default class App extends Component<Props> {
    static navigationOptions = {
        title: 'Welcome',
    };
    jump(page) {
        console.log('jump')
        const {navigate} = this.props.navigation;
        navigate(page)
    }

    _datas = [
            {key: '按钮', page: 'Button'},
            {key: '按钮2', page: 'Next'},
            {key: '按钮3', page: 'Next'},
            {key: '按钮4', page: 'Next'},
            {key: '按钮5', page: 'Next'},
        ]

    _onPressItem(page) {
        console.log(page)
        if (page && page.length > 0) {
            this.jump(page)
        }

    }

    _cell({item}) {
        return <TouchableOpacity style={styles.cell} activeOpacity={1} onPress={ this._onPressItem.bind(this,item.page) }><Text>{item.key}</Text></TouchableOpacity>;
    }

    render() {


        return (
            <View style={styles.content}>
                <FlatList
                    data = { this._datas }
                    renderItem = { this._cell.bind(this) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        // height: '100%',//FlatList不能设置宽高，只能由其父组件限制
        backgroundColor: '#ffdfab',
    },
    cell: {
        backgroundColor: '#ff7d3e',
        padding: 5,
        height: 44,
        borderColor: '#eceae2',
        borderWidth: 2,
    },
});

