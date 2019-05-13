import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Flex, Box } from '@rebass/grid'
import { fetchTopicsRequest } from 'modules/topic/actions'
import { Container, Left, Center, Right } from 'components/Layout'
import Header from 'scenes/Header'
import Slack from 'components/Slack'
import Footer from 'components/Footer'
import Topic from 'containers/Topic'
import Separator from 'components/Separator'
import { StyledRefinementList, RadioList } from 'components/Filter'
import { InstantSearch } from 'react-instantsearch-dom';
import {ThemeProvider} from 'styled-components'

const theme = {
  breakpoints: ['600px', '960px', '1200px' ]
}

class Main extends Component {
  componentDidMount() {
    const { token, fetchTopicsRequest } = this.props

    if (token) {
      fetchTopicsRequest()
    }
  }

  componentDidUpdate(prevProps) {
    const { token, fetchTopicsRequest } = this.props

    if (prevProps.token !== token) {
      fetchTopicsRequest()
    }
  }

  render() {
    const { topics } = this.props;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <InstantSearch appId="latency" apiKey="3d9875e51fbd20c7754e65422f7ce5e1" indexName="bestbuy">

              <Header />

              <Container width={['auto','600px','960px', '1200px']} justifyContent="center" >

                <Left width={['235px']} mr={'20px'}>

                    <RadioList title="USERS" options={['All People', 'People you follow', 'Only me']} />
                    <Separator />
                    <div style={{ fontSize: '13px', opacity: '0.5' }}>SOURCES</div>
                    <StyledRefinementList attribute="type" searchable />
                    <Separator />
                    <div style={{ fontSize: '13px', opacity: '0.5' }}>TAGS</div>
                    <StyledRefinementList attribute="category" searchable />
                  <Separator />
                    <RadioList title="TIME" options={['All time', 'Past Hour', 'Past Day', 'Past Week', 'Past Month', 'Past Year']} />

                </Left>

                <Center flex='1 0 0' mx={0}>
                  <Flex flexDirection="column">
                    {topics.length > 0 && topics.map(topic =>
                      <Topic key={topic.id} topic={topic} isEdit={false} />
                    )}
                  </Flex>
                </Center>

                <Right width={['235px']} ml={'20px'}>
                  <Box>
                    <Slack />
                  </Box>
                  <Box mt={15}>
                    <Footer />
                  </Box>
                </Right>

            </Container>

          </InstantSearch>
        </ThemeProvider>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  requesting: state.topic.all.requesting,
  topics: state.topic.all.data,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  fetchTopicsRequest: () => dispatch(fetchTopicsRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
