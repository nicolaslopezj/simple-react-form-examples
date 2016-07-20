import React from 'react'
import {Form, Field} from 'simple-react-form'
import RaisedButton from 'material-ui/RaisedButton'
import {createContainer} from 'meteor/react-meteor-data'
import {Meteor} from 'meteor/meteor'
import {FlowRouter} from 'meteor/kadira:flow-router'

import Posts from './posts'

const propTypes = {
  post: React.PropTypes.object
}

class PostsUpdate extends React.Component {

  render () {
    return (
      <div>
        <h1>Post update</h1>
        <Form
        collection={Posts}
        type='update'
        ref='form'
        doc={this.props.post}>
          <Field fieldName='title'/>
          <Field fieldName='body'/>
          <Field fieldName='date'/>
        </Form>
        <br/>
        <RaisedButton label='Back' onTouchTap={() => FlowRouter.go('simpleSchemaCrud.index')}/>
        <RaisedButton primary label='Save' onTouchTap={() => this.refs.form.submit()}/>
      </div>
    )
  }

}

PostsUpdate.propTypes = propTypes

export default createContainer(({postId}) => {
  const handler = Meteor.subscribe('simpleSchemaCrud.update', postId)
  const isLoading = !handler.ready()
  const post = Posts.findOne(postId)
  return {isLoading, post}
}, PostsUpdate)
