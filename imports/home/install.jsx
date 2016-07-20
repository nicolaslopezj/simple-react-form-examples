import React from 'react'

const propTypes = {

}

const defaultProps = {

}

export default class Install extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h3>Installation</h3>

        <p>
          Install the base package
        </p>

        <pre>npm install --save simple-react-form</pre>

        <p>
          If you use material-ui install that package too
        </p>

        <pre>npm install --save simple-react-form-material-ui</pre>

        <p>
          And register the material-ui components, just once in your app.
        </p>

        <pre>import 'simple-react-form-material-ui'</pre>
      </div>
    )
  }

}

Install.propTypes = propTypes
Install.defaultProps = defaultProps
