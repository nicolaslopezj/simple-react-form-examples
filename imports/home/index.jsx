import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Simple React Form</h1>
        <p>
          Welcome to the example of simple-react-form.
        </p>
        <h2>
          Browse the examples
        </h2>
        <h4>
          Forms with simple schema
        </h4>
        <ul>
          <li>
            <a href={FlowRouter.path('simpleSchemaCrud.index')}>
              Create post, rendered automatically
            </a>
          </li>
          <li>
            <a href={FlowRouter.path('state')}>
              Using React Component state
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
