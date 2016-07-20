import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import Layout from './layout'
import List from './list'
import Create from './create'
import Update from './update'

FlowRouter.route('/simple-schema-crud', {
  name: 'simpleSchemaCrud.index',
  action () {
    mount(Layout, {
      content () {
        return <List />
      }
    })
  }
})

FlowRouter.route('/simple-schema-crud/create', {
  name: 'simpleSchemaCrud.create',
  action () {
    mount(Layout, {
      content () {
        return <Create />
      }
    })
  }
})

FlowRouter.route('/simple-schema-crud/:postId', {
  name: 'simpleSchemaCrud.update',
  action ({postId}) {
    mount(Layout, {
      content () {
        return <Update postId={postId}/>
      }
    })
  }
})
