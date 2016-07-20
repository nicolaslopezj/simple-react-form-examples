import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const propTypes = {
  content: React.PropTypes.func.isRequired
}

export default class Layout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          {this.props.content()}
        </div>
      </MuiThemeProvider>
    )
  }

}

const styles = {
  container: {
    paddingTop: 60,
    maxWidth: 600,
    margin: '0 auto 0 auto'
  }
}

Layout.propTypes = propTypes
