import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from '@rebass/grid'
import { fetchTopicsRequest } from 'modules/topic/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'components/Topic/'
import Separator from 'components/Topic/Separator'
import { StyledRefinementList, RadioList, SortBySelector } from 'components/Filter'
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

                <RadioList title="USERS" options={['All People', 'People you follow']} />
                <Separator />

                <div style={{ fontSize: '13px', opacity: '0.5' }}>SOURCES</div>
                <StyledRefinementList attribute="type" searchable />
                <Separator />

                <div style={{ fontSize: '13px', opacity: '0.5' }}>TAGS</div>
                <StyledRefinementList attribute="category" searchable />
                <Separator />

                <RadioList title="TIME" options={['All time', 'Past Hour', 'Past Day', 'Past Week', 'Past Month', 'Past Year']} />


              </div>

            </Left>

            <Center>
              <Flex justifyContent="space-between">
                <Box>

                </Box>
                <Box>
                  <SortBySelector
                    defaultRefinement="instant_search"
                    items={[
                      { value: 'instant_search', label: 'Featured' },
                      { value: 'instant_search_price_asc', label: 'Price asc.' },
                      { value: 'instant_search_price_desc', label: 'Price desc.' },
                    ]}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="column">



                {topics.map(topic =>
                  <Box key={topic.id} mb='30px'>
                    <Topic topic={topic} />
                  </Box>
                )}
                {topics.map(topic =>
                  <Box key={topic.id} mb='30px'>
                    <Topic topic={topic} />
                  </Box>
                )}
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
