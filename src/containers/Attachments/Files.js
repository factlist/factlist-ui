import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { showImageModal } from 'modules/modal/actions'
import { Box } from 'grid-styled'
import Card from './Card'

class Files extends Component {
  preview = this.preview.bind(this)

  preview(file) {
    const { showImageModal } = this.props

    const data = {
      image: {
        src: file.image,
        title: file.name,
      }
    }

    showImageModal(data)
  }

  render() {
    const { files } = this.props

    return (
      <Fragment>
        {files.map(file => file.image && (
          <Box
            width={1/2}
            key={file.id}>
            <Card
              type='file'
              title={file.name}
              size={file.size}
              image={file.image}
              onClick={() => this.preview(file)} />
          </Box>
        ))}
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  showImageModal: (data) => dispatch(showImageModal(data)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Files)
