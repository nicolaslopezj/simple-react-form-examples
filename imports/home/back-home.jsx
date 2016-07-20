import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'

const propTypes = {

}

const defaultProps = {

}

export default class BackHome extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <p>
        <a href={FlowRouter.path('home')}>
          Return to index
        </a>
      </p>
    )
  }

}

BackHome.propTypes = propTypes
BackHome.defaultProps = defaultProps
