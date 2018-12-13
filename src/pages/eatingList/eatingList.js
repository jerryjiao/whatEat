import Taro, { Component } from '@tarojs/taro'
import { AtSwipeAction, AtInput } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './eatingList.scss'

import { add, del } from '../../actions/index'

const OPTIONS = [
  {
    text: '取消',
    style: {
      color: '#333',
      backgroundColor: '#F7F7F7'
    }
  },
  {
    text: '确认',
    style: {
      
    }
  }
]

class eatingList extends Component {
  constructor () {
    super(...arguments)
  
  }

  config = {
    navigationBarTitleText: '收集列表'
  }

  render () {
    return (
      <AtSwipeAction>活动1</AtSwipeAction>
    )
  }
}

export default eatingList