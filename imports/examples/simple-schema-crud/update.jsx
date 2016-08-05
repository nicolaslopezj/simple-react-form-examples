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

  constructor (props) {
    super(props)
    this.state = {}
    this.showSuccessMessage = this.showSuccessMessage.bind(this)
  }

  showSuccessMessage () {
    this.setState({successMessage: 'Post saved'})
    setTimeout(() => {
      this.setState({successMessage: null})
    }, 1000)
  }

  render () {
    return (
      <div>
        <h1>Post update</h1>
        <Form
        collection={Posts}
        type='update'
        ref='form'
        doc={this.props.post}
        onSuccess={this.showSuccessMessage}>
          <Field fieldName='title'/>
          <Field fieldName='body'/>
          <Field fieldName='date'/>
          <Field fieldName='authors'>
            <Field fieldName='name'/>
            <Field fieldName='age'/>
          </Field>
          <Field fieldName='editor'>
            <Field fieldName='name'/>
            <Field fieldName='age'/>
          </Field>
        </Form>
        <br/>
        <div>
          <RaisedButton label='Back' onTouchTap={() => FlowRouter.go('simpleSchemaCrud.index')}/>
          <RaisedButton primary label='Save' onTouchTap={() => this.refs.form.submit()}/>
        </div>
        <p>
          {this.state.successMessage}
        </p>
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
