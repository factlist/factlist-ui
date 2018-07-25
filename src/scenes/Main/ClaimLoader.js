import React from 'react'
import ContentLoader from 'react-content-loader'

const ClaimLoader = () => (
  <ContentLoader
    animate={true}
    width={670}
    height={275}
    primaryColor={'#F3F3F3'}
    secondaryColor={'#e8e8e8'}
    style={{ border: '1px solid #F3F3F3', marginBottom: '50px' }}>
    <rect x="20" y="20" rx="3" ry="3" width="118" height="25" />
    <rect x="580" y="25" rx="2" ry="2" width="70" height="15" />
    <rect x="20" y="70" rx="3" ry="3" width="630" height="30" />
    <rect x="20" y="105" rx="3" ry="3" width="300" height="30" />
    <rect x="20" y="160" rx="2" ry="2" width="280" height="45" />
    <rect x="305" y="160" rx="2" ry="2" width="280" height="45" />
    <rect x="20" y="210" rx="2" ry="2" width="280" height="45" />
  </ContentLoader>
)

export default ClaimLoader
