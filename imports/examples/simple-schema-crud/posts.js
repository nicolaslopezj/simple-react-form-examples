import {Meteor} from 'meteor/meteor'
import moment from 'moment'
import {SimpleSchema} from 'meteor/aldeed:simple-schema'

const Posts = new Meteor.Collection('posts')

const author = new SimpleSchema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

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
      type: 'date-picker',
      formatDate: (date) => moment(date).format('LL')
    }
  },
  author: {
    type: author
  }
})

export default Posts
