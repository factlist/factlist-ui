import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import { fetchTopicsRequest } from 'modules/topic/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'components/Topic'
import StyledRefinementList  from 'components/Filter/StyledRefinementList'
import { InstantSearch } from 'react-instantsearch-dom';


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

        <InstantSearch appId="latency" apiKey="3d9875e51fbd20c7754e65422f7ce5e1" indexName="bestbuy">

        <Header />

        <Container>

          <Left>


              <div className="container">
                <div style={{
                  fontSize: '13px',
                  opacity: '0.5'
                }}>SOURCES</div>
                <StyledRefinementList  attribute="type"  searchable />
                <div style={{
                  fontSize: '13px',
                  opacity: '0.5'
                }}>TAGS</div>
                <StyledRefinementList  attribute="category" searchable  />
              </div>

          </Left>

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
        </InstantSearch>
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
