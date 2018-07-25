import React from 'react'
import ContentLoader from 'react-content-loader'

const AddClaimLoader = () => (
  <ContentLoader
    animate={false}
    primaryColor="#F3F3F3"
    secondaryColor="#F3F3F3"
    width={116}
    height={40}
    style={{ width: '116px', height: '40px' }}>
    <rect x="0" y="0" width="116px" height="40px" />
	</ContentLoader>
)

export default AddClaimLoader
