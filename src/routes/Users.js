import React, {Component} from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UserList from '../components/Users/Users'
import { Button, Modal, Input } from 'antd';


class Users extends Component{
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      creatVal: {
        name: '',
        email: '',
        website: ''
      }
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.create = this.create.bind(this)
  }
  showModal () {
    this.setState({
      visible: true
    })
  }
  hideModal () {
    this.setState({
      visible: false
    })
  }
  changeModel (e) {
    console.log()
    this.setState({
      creatVal: {
        ...this.state.creatVal,
        [e.target.name]: e.target.value
      }
    })
  }
  create () {
    this.props.dispatch({
      type: 'users/create',
      payload: {
        values: {
          ...this.state.creatVal
        }
      }
    })
  }
  render () {
    let {
      list
    } = this.props
    let {
      name,
      email,
      website
    } = this.state.creatVal
    
    return (
      <div className={styles.normal}>
        Route Component: Users
        <Button type="primary" onClick={this.showModal}>添加数据</Button>
        <UserList list={list} />
        <Modal
          title="添加数据"
          visible={this.state.visible}
          onOk={this.create}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <Input placeholder="用户名" name="name" value={name} onChange={(e) => this.changeModel(e)} />
          <Input placeholder="邮箱" name="email" value={email} onChange={(e) => this.changeModel(e)} />
          <Input placeholder="website" name="website" value={website} onChange={(e) => this.changeModel(e)} />
          {name +'+'+ email}
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.users.list
  };
}

export default connect(mapStateToProps)(Users);
