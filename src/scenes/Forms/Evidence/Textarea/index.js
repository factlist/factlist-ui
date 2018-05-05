import React, { Component } from 'react'
import config from 'config'
import axios from 'axios'
import _ from 'utils/_'
import getUrls from 'get-urls'
import StyledTextarea from './StyledTextarea'

const embeds = []

export default class Textarea extends Component {
  handleChange = this.handleChange.bind(this)
  catchUrls = this.catchUrls.bind(this)
  embed = this.embed.bind(this)

  // Debounce
  catchUrls = _.debounce(this.catchUrls, 500)

  state = {
    text: '',
    links: [],
  }

  handleChange(event) {
    const text = event.target.value

    this.setState({ text })

    this.catchUrls()
  }

  embed(link) {
    const embed = embeds[link] ? embeds[link] : { link, type: 'link', fetching: true }

    if (!embeds[link]) {
      axios
        .get(`${config.API_ENDPOINT}/embed/?link=${link}`)
        .then(response => response.data)
        .then(data => {
          let links = this.state.links
          const index = links.findIndex(a => a.link === link)

          if (! data.error_code) {
            links[index] = data
            embeds[link] = data
          } else {

          }

          this.setState({ links })
          this.props.onLinks(links)
        })
    }

    return embed
  }

  catchUrls() {

    let links = Array.from(getUrls(this.state.text))
    links = links.map(link => this.embed(link))

    this.setState({ links })

    this.props.onLinks(links)
  }

  render() {
    return (
      <StyledTextarea
        placeholder="Description or URL"
        onChange={this.handleChange} />
    )
  }
}
