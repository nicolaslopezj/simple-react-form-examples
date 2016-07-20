import React from 'react'
import {Form, Field} from 'simple-react-form'
import ArrayComponent from 'simple-react-form-material-ui/lib/fields/array'
import moment from 'moment'

const propTypes = {

}

const defaultProps = {

}

export default class Index extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  getMusicTastesOptions () {
    return [
      {label: 'Rock', value: 'rock'},
      {label: 'Pop', value: 'pop'},
      {label: 'Classic', value: 'classic'}
    ]
  }

  render () {
    return (
      <div>
        <h1>State example</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='firstName' label='First Name' type='text'/>
          <Field fieldName='lastName' label='Last Name' type='text'/>
          <Field fieldName='birthday' label='Birthday' type='date-picker' formatDate={(date) => moment(date).format('LL')}/>
          <Field fieldName='bio' label='Bio' type='textarea' rows={3}/>
          <Field fieldName='musicTastes' label='Music Tastes' type='multiple-checkbox' options={this.getMusicTastesOptions()}/>
          <ArrayComponent fieldName='friends' label='Friends' addLabel='Add' removeLabel='Remove'>
            <Field fieldName='firstName' label='First Name' type='text'/>
            <Field fieldName='lastName' label='Last Name' type='text'/>
            <br/>
            <Field fieldName='isBestFriend' label='Is Best Friend' type='toggle'/>
            <br/>
          </ArrayComponent>
        </Form>
        <br/>
        <p>
          <b>Current State:</b>
        </p>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }

}

Index.propTypes = propTypes
Index.defaultProps = defaultProps
