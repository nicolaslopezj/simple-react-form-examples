import React from 'react'
import {Form} from 'simple-react-form'
import RaisedButton from 'material-ui/RaisedButton'
// import ArrayComponent from 'simple-react-form-material-ui/lib/array'
import {FlowRouter} from 'meteor/kadira:flow-router'

import Posts from './posts'

export default class PostsCreate extends React.Component {
  render () {
    return (
      <div>
        <h1>Create a post</h1>
        <Form
        collection={Posts}
        type='insert'
        ref='form'
        logErrors
        onSuccess={(docId) => FlowRouter.go('simpleSchemaCrud.index')}/>
        <br/>
        <RaisedButton label='Cancel' onTouchTap={() => FlowRouter.go('simpleSchemaCrud.index')}/>
        <RaisedButton primary label='Create' onTouchTap={() => this.refs.form.submit()}/>
      </div>
    )
  }
}
