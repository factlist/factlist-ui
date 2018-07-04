import {
  FETCH_EMBED_REQUEST,
  FETCH_EMBED_SUCCESS,
  FETCH_EMBED_FAILURE,
  EMBED_REMOVE,
} from './constants'

const initialState = {
  cache: {},
  all: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_EMBED_REQUEST:
      return {
        ...state,
        all: action.urls.map(url => ({
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
        all: state.all.map(embed => {
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
        all: state.all.map(embed => {
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
        all: state.all.filter(embed => embed.url !== action.url)
      }

    default:
      return state
  }
}
