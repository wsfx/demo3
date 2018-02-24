import React, {Component} from 'react';
import { Link, Redirect, Switch, Route } from 'dva/router';

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header>头部</header>
        <div>
          <div className="left-menu">左边导航</div>
          <div>右边内容
          </div>
        </div>
      </div>
    )
  }
}