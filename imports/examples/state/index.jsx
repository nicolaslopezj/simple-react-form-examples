import React from 'react'
import {Form, Field} from 'simple-react-form'
import ArrayComponent from 'simple-react-form-material-ui/lib/array'
import moment from 'moment'
import BackHome from '../../home/back-home'
import Text from 'simple-react-form-material-ui/lib/text'
import Toggle from 'simple-react-form-material-ui/lib/toggle'
import Textarea from 'simple-react-form-material-ui/lib/textarea'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'

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
        <BackHome />
        <h1>State example</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='firstName' label='First Name' type={Text}/>
          <Field fieldName='lastName' label='Last Name' type={Text}/>
          <Field fieldName='birthday' label='Birthday' type={DatePicker} formatDate={(date) => moment(date).format('LL')}/>
          <Field fieldName='bio' label='Bio' type={Textarea} rows={3}/>
          <Field fieldName='musicTastes' label='Music Tastes' type={MultipleCheckbox} options={this.getMusicTastesOptions()}/>
          <Field fieldName='friends' label='Friends' type={ArrayComponent}>
            <Field fieldName='firstName' label='First Name' type='text'/>
            <Field fieldName='lastName' label='Last Name' type='text'/>
            <Field fieldName='isBestFriend' label='Is Best Friend' type={Toggle} style={{marginTop: 10, marginBottom: 10}}/>
          </Field>
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
