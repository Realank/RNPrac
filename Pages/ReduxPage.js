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
import { bindActionCreators, createStore } from 'redux'
import {store, increase, decrease, reset} from './BusinessService/CounterBusiness'
import SubText from './Views/SubText'
class ReduxPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {increase, decrease, reset} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.props.counter.count}</Text>
        <SubText {...this.props} />
        <TouchableOpacity style={styles.btn} onPress={() => { reset(0) }}>
          <Text>归零</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={increase}>
          <Text>加1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={decrease}>
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
const mapDispatchToProps = {increase, decrease, reset}// dispatch => (bindActionCreators({increase, decrease, reset}, dispatch))

let Container = connect(mapStateToProps, mapDispatchToProps)(ReduxPage)

export default class extends Component {
  render () {
    return (<Provider store={store}>
      <Container />
    </Provider>)
  }
};
