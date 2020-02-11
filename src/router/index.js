import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'
const index = asyncComponent(() => import("@/pages/index/index"))
const testPage = asyncComponent(() => import("@/pages/testPage/index"))
// const info = asyncComponent(() => import("@/pages/info/info"))
// const setUser = asyncComponent(() => import("@/pages/set_user/set_user"))
// const msite = asyncComponent(() => import("@/pages/msite/msite"))
// const shop = asyncComponent(() => import("@/pages/shop/shop"))
// const food = asyncComponent(() => import("@/pages/food/food"))
// const technology = asyncComponent(() => import("@/pages/technology/technology"))

export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          {/* 默认路由 */}
          <Route path="/" component= {index} exact />
          <Route path="/index" component= {index}/>
          <Route path='/testPage/:name/:id' component= {testPage}/>
        </Switch>
      </HashRouter>
    )
  }
}