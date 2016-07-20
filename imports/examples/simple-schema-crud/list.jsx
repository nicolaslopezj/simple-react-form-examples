import React from 'react'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {createContainer} from 'meteor/react-meteor-data'
import {Meteor} from 'meteor/meteor'
import Posts from './posts'
import BackHome from '../../home/back-home'

const propTypes = {
  posts: React.PropTypes.array.isRequired,
  isLoading: React.PropTypes.bool.isRequired
}

const defaultProps = {

}

class PostsList extends React.Component {

  constructor (props) {
    super(props)
    this.create = this.create.bind(this)
  }

  create () {
    FlowRouter.go('simpleSchemaCrud.create')
  }

  renderPosts () {
    return this.props.posts.map(post => {
      const onTouchTap = () => FlowRouter.go('simpleSchemaCrud.update', {postId: post._id})
      return (
        <ListItem key={post._id} primaryText={post.title} onTouchTap={onTouchTap}/>
      )
    })
  }

  render () {
    return (
      <div>
        <BackHome />
        <h1>Simple Schema Example</h1>
        <Paper>
          <List>
            <Subheader>Posts</Subheader>
            <ListItem primaryText='Create' onTouchTap={this.create}/>
            {this.renderPosts()}
          </List>
        </Paper>
      </div>
    )
  }

}

PostsList.propTypes = propTypes
PostsList.defaultProps = defaultProps

export default createContainer(() => {
  const handler = Meteor.subscribe('simpleSchemaCrud.index')
  const isLoading = !handler.ready()
  const posts = Posts.find().fetch()
  return {isLoading, posts}
}, PostsList)
