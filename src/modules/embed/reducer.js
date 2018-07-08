import {
  FETCH_EMBED_REQUEST,
  FETCH_EMBED_SUCCESS,
  FETCH_EMBED_FAILURE,
  EMBED_REMOVE,
  RESET_EVIDENCE_EMBEDS,
  RESET_CLAIM_EMBEDS,
} from './constants'

const initialState = {
  cache: {},
  claim: [],
  evidence: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_EMBED_REQUEST:
      return {
        ...state,
        [action.id]: action.urls.map(url => ({
          url,
          requesting: state.cache[url] !== undefined ? false : true,
          data: state.cache[url] !== undefined ? state.cache[url] : null,
        }))
      }

    case FETCH_EMBED_SUCCESS:
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.url]: action.data,
        },
        [action.id]: state[action.id].map(embed => {
          if (embed.url === action.url) {
            embed.requesting = false
            embed.data = action.data
          }

          return embed
        })
      }

    case FETCH_EMBED_FAILURE:
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.url]: {
            title: action.url,
            url: action.url,
          },
        },
        [action.id]: state[action.id].map(embed => {
          if (embed.url === action.url) {
            embed.data = {
              title: action.url,
              url: action.url,
            }

            embed.requesting = false
            embed.fail = true
          }

          return embed
        })
      }

    case EMBED_REMOVE:
      return {
        ...state,
        [action.id]: state[action.id].filter(embed => embed.url !== action.url)
      }

    case RESET_CLAIM_EMBEDS:
      return {
        ...state,
        claim: [],
      }

    case RESET_EVIDENCE_EMBEDS:
      return {
        ...state,
        evidence: [],
      }

    default:
      return state
  }
}
