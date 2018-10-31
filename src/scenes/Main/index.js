import React, { Fragment } from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { Box } from 'grid-styled'
import { fetchTopicsRequest } from 'modules/topic/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topics from './Topics'

const mapStateToProps = state => ({
  requesting: state.topic.all.requesting,
  topics: state.topic.all.data,
})

const mapDispatchToProps = dispatch => ({
  fetchTopicsRequest: () => dispatch(fetchTopicsRequest()),
})

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      const { fetchTopicsRequest } = this.props

      fetchTopicsRequest()
    }
  })
)


const Main = ({ topics }) => (
  <Fragment>
    <Header />

    <Container>
      <Left>
        Popular Topics
      </Left>

      <Center>
        <Topics topics={topics} />
      </Center>

      <Right>
        <Box>
          <Slack />
        </Box>
        <Box mt={15}>
          <Footer />
        </Box>
      </Right>
    </Container>
  </Fragment>
)

export default enhance(Main)
