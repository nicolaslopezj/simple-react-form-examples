import React from 'react'
import {FieldType, registerType} from 'simple-react-form'
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import _ from 'underscore'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {
  ...FieldType.defaultProps
}

class SpotifySong extends FieldType {

  constructor (props) {
    super(props)
    this.state = {
      tracks: []
    }

    this.debouncedFetch = _.debounce(this.fetch.bind(this), 200)
    this.playSong = this.playSong.bind(this)
  }

  playSong () {
    if (this.state.isPlaying) return this.pauseSong()
    this.setState({isPlaying: true})
    this.audio = new Audio(this.props.value.preview_url)
    this.audio.play()
    setTimeout(() => {
      this.setState({isPlaying: false})
    }, 1000 * 31)
  }

  pauseSong () {
    this.audio.pause()
    this.setState({isPlaying: false})
  }

  fetch (query) {
    if (!query) {
      this.setState({tracks: []})
      return
    }
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=4`
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then((response) => {
      this.setState({tracks: response.tracks.items})
    })
  }

  selectTrack (data) {
    this.props.onChange(data)
    this.setState({tracks: []})
  }

  renderTracks () {
    if (this.state.tracks.length === 0) return
    const items = this.state.tracks.map(track => {
      const image = track.album.images[0].url
      const avatar = <Avatar src={image} />
      const artistName = track.artists[0].name
      return (
        <ListItem
        key={track.id}
        leftAvatar={avatar}
        primaryText={track.name}
        secondaryText={artistName}
        onTouchTap={() => this.selectTrack(track)}/>
      )
    })
    return (
      <Paper>
        <List>
          {items}
        </List>
      </Paper>
    )
  }

  renderValue () {
    if (this.state.tracks.length !== 0 || !this.props.value) return

    const image = this.props.value.album.images[0].url
    const artistName = this.props.value.artists[0].name
    return (
      <div>
        <img src={image} style={styles.image}/>
        <h3>
          {this.props.value.name}
        </h3>
        <h4>by {artistName}</h4>
        <RaisedButton label={this.state.isPlaying ? 'Pause' : 'Preview'} onTouchTap={this.playSong}/>
        <br style={styles.clear}/>
      </div>
    )
  }

  render () {
    return (
      <div>
        <TextField
        fullWidth
        floatingLabelText={this.props.label}
        onChange={(event) => this.debouncedFetch(event.target.value)}/>
        {this.renderTracks()}
        {this.renderValue()}
      </div>
    )
  }

}

const styles = {
  image: {
    float: 'left',
    maxWidth: 200,
    marginRight: 20
  },
  clear: {
    clear: 'both'
  }
}

SpotifySong.propTypes = propTypes
SpotifySong.defaultProps = defaultProps

registerType({
  type: 'spotify-song',
  component: SpotifySong
})
