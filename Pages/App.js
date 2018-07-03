/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native'

import { connect, Provider } from 'react-redux'
import {store, increase, decrease, reset} from './BusinessService/CounterBusiness'

type Props = {};

export default class App extends Component<Props> {
    static navigationOptions = {
      title: 'Welcome'
    };

    constructor (props) {
      super(props)
      this.state = {
        refreshing: false,
        refreshFooterCount: 0
      }
    }

    jump (page) {
      const {navigate} = this.props.navigation
      navigate(page)
    }

    _datas = [
      {key: '文本&按钮', page: 'Button'},
      {key: '图片', page: 'Image'},
      {key: '定时器', page: 'Timer'},
      {key: '输入框', page: 'Input'},
      {key: 'Widgets', page: 'Widget'},
      {key: 'Alert', page: 'Alert'},
      {key: '布局', page: 'Layout'},
      {key: 'Tab', page: 'Tab'},
      {key: 'Redux', page: 'Redux'}

    ]

    _onPressItem (page) {
      if (page && page.length > 0) {
        this.jump(page)
      }
    }

    _cell ({item}) {
      return <TouchableOpacity style={styles.cell} activeOpacity={1}
        onPress={this._onPressItem.bind(this, item.page)}><Text style={styles.cellText}>{item.key}</Text></TouchableOpacity>
    }

    _header = () => {
      return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是头部</Text>
    }

    _footer = () => {
      return <Text style={[styles.txt, { backgroundColor: 'white' }]}>这是尾部</Text>
    }

    _onHeaderRefresh () {
      this.setState({
        refreshing: true
      })

      setTimeout(() => {
        this.setState({
          refreshing: false
        })
      }, 2000)

      setTimeout(() => {
        this._datas = this._datas.slice(0, 8)
      }, 1000)
    }
    _onFooterRefresh () {
      console.log('refresh footer')
      this._datas.push({key: 'button a' + this.state.refreshFooterCount++, page: 'Button'})
      this._datas.push({key: 'button b' + this.state.refreshFooterCount++, page: 'Button'})
      this._datas.push({key: 'button c' + this.state.refreshFooterCount++, page: 'Button'})
      this._datas.push({key: 'button d' + this.state.refreshFooterCount++, page: 'Button'})
    }

    render () {
      return (
        <View style={styles.content}>
          <FlatList
            data={this._datas}
            // ListHeaderComponent={this._header}
            // ListFooterComponent={this._footer}
            renderItem={this._cell.bind(this)}
            refreshing={this.state.refreshing}
            onRefresh={this._onHeaderRefresh.bind(this)}
            // onEndReachedThreshold={0.1}
            // onEndReached={this._onFooterRefresh.bind(this)}
            // onViewableItemsChanged={(info) => {
            //   //    alert("可见不可见触发");
            // }}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    // height: '100%',//FlatList不能设置宽高，只能由其父组件限制
    backgroundColor: '#ffdfab'
  },
  cell: {
    backgroundColor: '#ff7d3e',
    padding: 5,
    height: 44,
    borderColor: '#eceae2',
    borderWidth: 2
  },
  cellText: {
    fontSize: 20,
    color: 'black'
  }
})
