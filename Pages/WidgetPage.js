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
import Switch from 'react-native-switch-pro'
import Slider from "react-native-slider";
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class  extends Component {
    static navigationOptions = {
        title: 'Widgets',
    };

    constructor(props) {
        super(props);
        this.state = {
            buttonResult: false,
            segmentedControllResult:1,
        }
    }

    render() {

        return (
            <View>
                <Text style={styles.text}>WidgetPage</Text>
                <Text>同步按钮</Text>
                <Switch
                    onSyncPress={(value) => {
                        console.log(value)
                    }}
                    style={styles.switch}
                />
                <Text>异步按钮</Text>
                <Switch
                    value={this.state.buttonResult}
                    onAsyncPress={(callback) => {

                        setTimeout(() => {
                            this.setState({
                                buttonResult: !this.state.buttonResult
                            })
                            callback(this.state.buttonResult)
                        }, 500)

                    }}
                    style={styles.switch}
                    width={100}
                    height={30}
                    backgroundActive={'#65FF74'}
                    backgroundInactive={'red'}
                    circleColorActive={'green'}
                    circleColorInactive={'#ddd'}
                    circleStyle={{width: 50}}
                    disabled={false}
                />
                <Slider
                    value={0.5}
                    onValueChange={(value) => {
                        console.log(value)
                    }}
                    style={styles.slider}
                />
                <Slider
                    value={30}
                    disabled={false}
                    minimumValue={0}
                    maximumValue={100}
                    step={10}
                    thumbTintColor={'#c4672e'}
                    minimumTrackTintColor={'#69e251'}
                    maximumTrackTintColor={'#e93a34'}
                    animateTransitions={true}
                    onValueChange={(value) => {
                        console.log(value)
                    }}
                    onSlidingStart={(value) => {
                        console.log('start' + value)
                    }}
                    onSlidingComplete={(value) => {
                        console.log('end' + value)
                    }}
                    style={styles.slider}
                />
                <SegmentedControlTab
                    values={['First', 'Second', 'Third']}
                    selectedIndex={this.state.segmentedControllResult}
                    onTabPress={(index) => {
                        console.log(index)
                        this.setState({
                            segmentedControllResult: index
                        })
                    }}
                    borderRadius={6}
                />
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
    switch: {
        margin: 10,
        width: 100,
    },
    slider: {
        margin: 10,
        width: 200,
    },
});