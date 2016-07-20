import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import Home from './index'
import Layout from '../layouts/small'

FlowRouter.route('/', {
  name: 'home',
  action (params) {
    mount(Layout, {
      content () {
        return <Home />
      }
    })
  }
})
