import React from 'react'
import {FieldType} from 'simple-react-form'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import countries from './countries-list'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {
  ...FieldType.defaultProps
}

export default class Country extends FieldType {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  renderItems () {
    return countries.map(country => {
      return <MenuItem key={country.code} value={country.code} primaryText={country.name} />
    })
  }

  render () {
    return (
      <div>
        <SelectField
        value={this.props.value}
        onChange={(event, key, value) => this.props.onChange(value)}
        fullWidth
        floatingLabelText={this.props.label}>
          {this.renderItems()}
        </SelectField>
      </div>
    )
  }

}

Country.propTypes = propTypes
Country.defaultProps = defaultProps
