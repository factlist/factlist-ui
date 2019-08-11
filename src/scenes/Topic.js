import React from 'react'
import {compose, withState, withStateHandlers, withHandlers, setStatic}
  from 'recompose'
import {withRoute} from 'react-router5'
import {generate as generatePatch} from 'json-merge-patch'
import nanoid from 'nanoid'
import p from 'immer'
import {List as SortableList, arrayMove} from 'react-movable'
import {set, toPairs, fromPairs, sortBy, noop} from 'lodash-es'
import {withModal, withNotification} from '/containers'
import {withFetch, autoSuggest} from '/lib/request'
import {SearchableSelect} from '/lib/ui'
import handleIcon from '/static/icons/handle.svg'
import closeIcon from '/static/icons/close.svg'
import cm from './topic.css'


const TopicDumb = ({
  topic,
  set, rmLink, startAddLink, rearrangeLinks, updateLinkTags,
  syncTopic,
}) =>
  <div className={cm.topic}>
    <p>
      Title:&nbsp;
      <input
        value={topic.title}
        onChange={e => set('title', e.target.value)}
      />
    </p>

    <SortableList
      values={topic.linkPairs}
      onChange={rearrangeLinks}
      lockVertically={true}
      renderList={({children, props}) =>
        <ul
          {...props}
          className={cm.links}
          children={children}
        />
      }
      renderItem={({value: [linkId, link], props, index}) =>
        <li
          {...props}
          key={linkId /* react-movable's key doesn't work properly */}
          onKeyDown={noop /* disable react-movable keyboard shortcuts */}
        >
          <img src={handleIcon} data-movable-handle />

          <TopicLink
            link={link}
            onSet={(path, value) =>
              set(`linkPairs.${index}.1.${path}`, value)
            }
            onRemove={() => rmLink(index)}
            onUpdateLinkTags={val => updateLinkTags(index, val)}
          />
        </li>
      }
    />

    <button onClick={startAddLink} children='Add Link' />

    <button onClick={syncTopic} children='Save Topic' />
  </div>

export default compose(
  setStatic('data', route => ({
    topic: '/topics/' + route.params.topicId,
  })),

  withRoute,
  withModal,
  withNotification,

  withStateHandlers(({route}) => ({
    topic: arrayifyLinks(route.data.topic),
  }), {
    set: state => (path, val) =>
      p(state, s => { set(s, 'topic.' + path, val) }),

    rmLink: state => idx =>
      p(state, s => { s.topic.linkPairs.splice(idx, 1) }),

    addLink: state => link =>
      p(state, s => { s.topic.linkPairs.push(['*' + nanoid(), link]) }),

    rearrangeLinks: state => ({oldIndex, newIndex}) => p(state, s => {
      s.topic.linkPairs = arrayMove(s.topic.linkPairs, oldIndex, newIndex)
    }),

    updateLinkTags: state => (linkIdx, nextLinkTags) => p(state, s => {
      s.topic.linkPairs[linkIdx][1].link_tags = nextLinkTags
    }),
  }),

  withHandlers({
    startAddLink: ({modal, addLink}) => () =>
      modal.open(AddLink, {}, link => link && addLink(link)),
  }),

  withFetch(({route, topic, notification}) => ({
    syncTopic: () => ({
      syncFetch: {
        url: '/topics/' + route.params.topicId,
        method: 'PATCH',
        body: generatePatch(route.data.topic, dearrayifyLinks(topic)),
        force: true,
        then: () => {
          notification.show('Topic saved successfully!')
        },
        catch: () => {
          notification.show('Error saving topic! Please try again later.')
        },
      },
    }),
  })),
)(
  TopicDumb
)

const arrayifyLinks = p(topic => {
  topic.linkPairs = sortBy(toPairs(topic.links), '1.weight')
  delete topic.links
})

const dearrayifyLinks = p(topic => {
  const weightedLinkPairs =
    topic.linkPairs
      .map(p((linkPair, idx) => { linkPair[1].weight = idx }))

  topic.links = fromPairs(weightedLinkPairs)

  delete topic.linkPairs
})

const TopicLink = ({link, onSet, onRemove, onUpdateLinkTags}) =>
  <>
    <input
      value={link.title}
      onChange={e => onSet('title', e.target.value)}
    />
    ({link.url})

    <button onClick={onRemove}>
      <img src={closeIcon} />
    </button>

    <SearchableSelect
      getOpts={autoSuggest('/tags?search=')}
      value={toPairs(link.link_tags).map(linkTagPairToTag)}
      onCreate={title => ({id: '*' + nanoid(), title})}
      onChange={e =>
        onUpdateLinkTags(
          fromPairs(
            e.target.value.map(tagToLinkTagPair)
          )
        )
      }
    />
  </>

const linkTagPairToTag = ([ltId, lt]) => ({
  ...lt.tag,
  linkTagId: ltId,
})

const tagToLinkTagPair = ({linkTagId, ...tag}) => [
  linkTagId || '*' + nanoid(),
  {tag},
]

const AddLinkDumb = ({url, setUrl, linkFetch = {}, fetchUrl}) => <>
  <p>Please paste your link below:</p>

  <p>
    <input
      value={url}
      onChange={e => setUrl(e.target.value)}
    />
  </p>

  {linkFetch.pending && 'Checking...'}

  <p>
    <button
      type='submit'
      onClick={fetchUrl}
      children='ok'
    />
  </p>
</>

const AddLink = compose(
  withModal,
  withNotification,

  withState('url', 'setUrl', ''),

  withFetch(({url, modal, notification}) => ({
    fetchUrl: () => ({
      linkFetch: {
        url: '/get-site-title',
        method: 'POST',
        body: {url},
        then: ({title}) => {
          modal.close({url, title})
        },
        catch: () => {
          modal.close()
          notification.show('Could not fetch link!')
        },
      },
    }),
  }))
)(
  AddLinkDumb
)
