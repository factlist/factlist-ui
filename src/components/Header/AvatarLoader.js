import React from 'react'
import ContentLoader from 'react-content-loader'

const AvatarLoader = () => (
  <ContentLoader
    animate={false}
    primaryColor="#F3F3F3"
    secondaryColor="#F3F3F3"
    width={80}
    height={80}
    style={{ width: '40px', height: '40px' }}>
    <circle cx="40" cy="40" r="40" />
	</ContentLoader>
)

export default AvatarLoader
