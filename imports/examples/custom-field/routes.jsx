import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

/**
 * Register the fields
 */
import './spotify'
import './country'

import Layout from '../../layouts/small'
import Index from './index'

FlowRouter.route('/custom-field', {
  name: 'customField',
  action () {
    mount(Layout, {
      content () {
        return <Index />
      }
    })
  }
})
