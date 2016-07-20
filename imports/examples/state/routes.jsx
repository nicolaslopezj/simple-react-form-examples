import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import Layout from '../../layouts/small'
import Index from './index'

FlowRouter.route('/state', {
  name: 'state',
  action () {
    mount(Layout, {
      content () {
        return <Index />
      }
    })
  }
})
