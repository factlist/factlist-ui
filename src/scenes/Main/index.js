import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import { fetchTopicsRequest } from 'modules/topic/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'components/Topic'

class Main extends Component {
  componentDidMount() {
    const { topics, fetchTopicsRequest } = this.props

    if (topics.length === 0) {
      fetchTopicsRequest()
    }
  }

  render() {
    const { topics } = this.props

    return (
      <Fragment>
        <Header />

        <Container>
          <Left>Popular Topics</Left>

          <Center>
            <Flex flexDirection="column">
            {topics.map(topic =>
              <Box key={topic.id} mb='30px'>
                <Topic topic={topic} />
              </Box>
            )}
            </Flex>
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
  }
}

const mapStateToProps = state => ({
  requesting: state.topic.all.requesting,
  topics: state.topic.all.data,
})

const mapDispatchToProps = dispatch => ({
  fetchTopicsRequest: () => dispatch(fetchTopicsRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
