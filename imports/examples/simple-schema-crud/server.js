import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import Posts from './posts'

Meteor.publish('simpleSchemaCrud.index', function () {
  return Posts.find()
})

Meteor.publish('simpleSchemaCrud.update', function (postId) {
  check(postId, String)
  return Posts.find(postId)
})
