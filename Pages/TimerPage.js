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

export default class  extends Component {
    static navigationOptions = {
        title: 'Timer',
    };

    constructor(props) {
        super(props);
        this.state = {firstLine:'一次定时器未开始',secondLine:'循环定时器未开始',count:0}
    }

    componentDidMount() {
        console.log('Timer页面加载')
    }
    componentWillUnmount() {
        console.log('Timer页面消失')
        this.clearTimer()
    }

    clearTimer() {
        console.log('清理Timer')
        this.onceTimer && clearTimeout(this.onceTimer)
        this.continueTimer && clearInterval(this.continueTimer)
    }

    startTimer() {

        this.setState({firstLine:'一次定时器开始',secondLine:'循环定时器开始'})
        this.clearTimer()
        console.log('start timer')
        this.onceTimer = setTimeout(() => {
            console.log('timeout tick')
            this.setState({
                firstLine:'定时器结束'
            })
        },2000)
        this.continueTimer = setInterval(() => {
            console.log('interval tick')
            this.setState({
                secondLine:'定时器触发' + (this.state.count + 1) + '次',
                count: this.state.count + 1,
            })
        },1000)

    }

    render() {

        return (
            <View>
                <Text style={styles.text}>TimerPage</Text>
                <ButtonView title={'开启定时器'} height={100} onPress={()=>{this.startTimer()}}/>
                <Text style={styles.text}>{this.state.firstLine}</Text>
                <Text style={styles.text}>{this.state.secondLine}</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    text: {
        margin: 10,
        color: '#31a6ff',
        fontSize: 20
    }
});