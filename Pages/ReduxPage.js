/**
 * desc：
 * author：
 * date：
 */

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect, Provider } from 'react-redux'
import {store, increase, decrease, reset} from './BusinessService/CounterBusiness'
class ReduxPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _onPressReset () {
    this.props.dispatch(reset())
  }

  _onPressInc () {
    this.props.dispatch(increase())
  }

  _onPressDec () {
    this.props.dispatch(decrease())
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.props.counter.count}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this._onPressReset()}>
          <Text>归零</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => this._onPressInc()}>
          <Text>加1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => this._onPressDec()}>
          <Text>减1</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', // 换行(此时不使用alignItems，而是用alignContent来做次轴的对其)
    alignContent: 'flex-start', // 换行对其方式
    justifyContent: 'space-around'
  },
  counter: {
    marginTop: 5,
    width: '100%',
    height: 30,
    textAlign: 'center'
  },
  btn: {
    width: 50,
    height: 44,
    backgroundColor: '#6e87ee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(ReduxPage)
