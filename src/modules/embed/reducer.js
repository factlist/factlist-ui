import {
  FETCH_EMBED_REQUEST,
  FETCH_EMBED_SUCCESS,
  FETCH_EMBED_FAILURE,
  REMOVE_EMBED,
} from './constants'

const initialState = {
  all: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_EMBED_REQUEST:
      const embed = state.all.find(embed => embed.url === action.url)

      if (embed !== undefined) {
        return state
      }

      return {
        ...state,
        all: [
          ...state.all,
          {
            url: action.url,
            requesting: true,
            fail: false,
            data: null,
          }
        ]
      }

    case FETCH_EMBED_SUCCESS: {
      const all = state.all.map(embed => {
        if (embed.url === action.url) {
          embed.requesting = false
          embed.data = action.data
        }

        return embed
      })

      return {
        ...state,
        all,
      }
    }

    case FETCH_EMBED_FAILURE: {
      const all = state.all.map(embed => {
        if (embed.url === action.url) {
          embed.requesting = false
          embed.fail = true
        }

        return embed
      })

      return {
        ...state,
        all,
      }
    }

    case REMOVE_EMBED:
      return {
        ...state,
        all: state.all.filter(embed => embed.url !== action.url),
      }

    default:
      return state
  }
}
