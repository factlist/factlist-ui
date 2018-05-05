import React, { Component } from 'react'
import Container from './Container'
import Editor from './Editor'
import getEmbed from './getEmbed'
import EmbedPreview from './EmbedPreview'

class MultimediaInput extends Component {
  state = {
    urls: [],
    embeds: {},
  }

  onUrls = this.onUrls.bind(this)
  getEmbed = this.getEmbed.bind(this)

  onUrls(urls) {
    this.setState({ urls })
    urls.forEach(url => this.getEmbed(url))
  }

  getEmbed(url) {
    const embeds = this.state.embeds
    const embed = embeds[url]

    if (embed || (embed && embed.requesting === true)) {
      return null
    }

    embeds[url] = { url, requesting: true, data: null }
    this.setState({ embeds })

    getEmbed(url).then(data => {
      embeds[url] = { requesting: false, data }

      this.setState({ embeds })
    })
  }

  render() {
    const { embeds } = this.state

    console.log('@@', embeds)

    return (
      <Container>
        <Editor onLinks={this.onUrls} />
        <EmbedPreview embeds={embeds} />
      </Container>
    )
  }
}

export default MultimediaInput
