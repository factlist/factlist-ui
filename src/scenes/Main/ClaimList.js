import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Box } from 'grid-styled'
import Claim from 'containers/Claim'
import { ClaimLoader } from 'components/ContentLoaders'

const ClaimList = ({
  claims,
  fetchClaimsRequest,
  count,
  hasMore,
}) => (
  <InfiniteScroll
    dataLength={count}
    next={fetchClaimsRequest}
    loader={<ClaimLoader />}
    hasMore={hasMore}
    endMessage={<p>You have seen it all.</p>}
    style={{ marginBottom: '50px' }}>
    {claims.map(claim =>
      <Box mb={30} key={'claim_' + claim.id}>
        <Claim claim={claim} />
      </Box>
    )}
  </InfiniteScroll>
)

export default ClaimList
