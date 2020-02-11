import React, {Component} from 'react'
// import logo from './logo.svg';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addAmount} from '@/store/action'
import './index.scss';

class Head extends Component {
//   static propTypes = {
//     amount: PropTypes.number.isRequired,
//   }
  state = {
    hasAlert: false,
    alertText: '请在手机APP中打开',
    logout: false,
    name: '我是子组件'
  }
  componentDidMount () {
    console.log(this.props)
    this.props.onRef(this)
    // console.log('alertText', this.state.alertText)
    // console.log(this.props.amount)
    // this.props.addAmount2(99)
    // setTimeout(() => {
    //   console.log(this.props.amount)
    // }, 500)
    // console.log(this.props.amount)
    // setTimeout(() => {
    //     console.log(this.props.outputValue())
    // }, 2000)
  }
  testFun = (value) => {
    return (e) => {
      console.log(value, e)
    }
  }
  handClick(e, e1) {
    console.log(e)
  }
  outPutChild() {
      console.log(this.state.name)
  }
  jumpPage() {
    this.props.history.push({pathname: '/testPage/testPage/123'})
  }
  render () {
    return (
      <div>
  <div className='header'>{this.props.title}</div>
      </div>
    )
  }
}

export default connect('', '')(Head)
// export default App;
