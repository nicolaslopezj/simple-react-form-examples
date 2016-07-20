import {Meteor} from 'meteor/meteor'

const Posts = new Meteor.Collection('posts')

Posts.attachSchema({
  title: {
    type: String
  },
  body: {
    type: String,
    srf: {
      type: 'textarea',
      rows: 3
    }
  },
  date: {
    type: Date,
    srf: {
      type: 'date-picker'
    }
  }
})

export default Posts
