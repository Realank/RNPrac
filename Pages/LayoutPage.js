/**
 * desc：
 * author：
 * date：
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class extends Component {
    static navigationOptions = {
      title: 'Layout'
    };

    constructor (props) {
      super(props)
      this.state = {}
    }

    render () {
      return (
        <View>
          <View style={[styles.layoutRow, styles.layout1]}>
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
          </View>
          <View style={[styles.layoutRow, styles.layout2]}>
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
          </View>
          <View style={[styles.layoutRow, styles.layout3]}>
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
          </View>
          <View style={[styles.layoutRow, {height: 120}, styles.layout4]}>
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
          </View>
          <View style={[styles.layoutRow, {height: 120}, styles.layout5]}>
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.yellow} />
          </View>
          <View style={[styles.layoutRow, {height: 80}, styles.layout6]}>
            <View style={[styles.red, styles.flex]} />
            <View style={[styles.green]} />
            <View style={[styles.yellow, styles.flex]} />
          </View>

        </View>

      )
    }
}
const styles = StyleSheet.create({
  text: {
    margin: 10,
    color: '#31a6ff',
    fontSize: 20
  },
  layoutRow: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'gray'
  },
  layout1: {},
  layout2: {
    justifyContent: 'center'// 主轴
  },
  layout3: {
    justifyContent: 'space-around'// 主轴
  },
  layout4: {
    alignItems: 'center'// 次轴
  },
  layout5: {
    flexWrap: 'wrap', // 换行(此时不使用alignItems，而是用alignContent来做次轴的对其)
    alignContent: 'space-around'// 换行对其方式
  },
  layout6: {
    flexWrap: 'wrap', // 换行(此时不使用alignItems，而是用alignContent来做次轴的对其)
    alignContent: 'space-around'// 换行对其方式
  },
  red: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  green: {
    backgroundColor: 'green',
    width: 50,
    height: 50
  },
  yellow: {
    backgroundColor: 'yellow',
    width: 50,
    height: 50
  },
  flex: {
    flex: 1
  }
})
