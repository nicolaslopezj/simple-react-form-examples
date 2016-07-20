import React from 'react'
import {Form, Field} from 'simple-react-form'
import BackHome from '../../home/back-home'

const propTypes = {

}

const defaultProps = {

}

export default class Index extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <BackHome/>
        <h1>Custom field example</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='country' label='Select a country' type='country'/>
          <Field fieldName='selectedSong' label='Search a song' type='spotify-song'/>
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
