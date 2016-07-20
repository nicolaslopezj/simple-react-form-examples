import React from 'react'

const propTypes = {

}

const defaultProps = {

}

export default class Links extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h4>Github:</h4>
        <p>
          <a style={styles.link} href='https://github.com/nicolaslopezj/simple-react-form'>Simple React Form</a>
          <a style={styles.link} href='https://github.com/nicolaslopezj/simple-react-form-material-ui'>Material UI</a>
          <a style={styles.link} href='https://github.com/nicolaslopezj/simple-react-form-examples'>Examples</a>
        </p>
      </div>
    )
  }

}

const styles = {
  link: {
    marginRight: 10
  }
}

Links.propTypes = propTypes
Links.defaultProps = defaultProps
