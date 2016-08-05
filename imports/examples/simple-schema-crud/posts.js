import {Meteor} from 'meteor/meteor'
import moment from 'moment'
import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import Text from 'simple-react-form-material-ui/lib/text'
import Textarea from 'simple-react-form-material-ui/lib/textarea'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
import ArrayComponent from 'simple-react-form-material-ui/lib/array'
import ObjectComponent from 'simple-react-form-material-ui/lib/object'

const Posts = new Meteor.Collection('posts')

const author = new SimpleSchema({
  name: {
    type: String,
    srf: {
      type: Text
    }
  },
  age: {
    type: Number,
    srf: {
      type: Text,
      fieldType: 'number'
    }
  }
})

Posts.attachSchema({
  title: {
    type: String,
    srf: {
      type: Text
    }
  },
  body: {
    type: String,
    srf: {
      type: Textarea,
      rows: 3
    }
  },
  date: {
    type: Date,
    optional: true,
    srf: {
      type: DatePicker,
      formatDate: (date) => moment(date).format('LL')
    }
  },
  authors: {
    type: [author],
    srf: {
      type: ArrayComponent
    }
  },
  editor: {
    type: author,
    srf: {
      type: ObjectComponent
    }
  }
})

export default Posts
