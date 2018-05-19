import {
  NEEDS_EVIDENCE,
  APPEARS_TO_BE_TRUE,
  SEEMS_FALSE,
  IN_CONCLUSIVE
} from './constants'

import colors from 'core/colors'

const statutes = [
  {
    id: NEEDS_EVIDENCE,
    title: 'NEEDS EVIDENCE',
    color: '#444444'
  },
  {
    id: APPEARS_TO_BE_TRUE,
    title: 'APPEARS TO BE TRUE',
    color: colors.conclusions['true']
  },
  {
    id: SEEMS_FALSE,
    title: 'SEEMS FALSE',
    color: colors.conclusions['false']
  },
  {
    id: IN_CONCLUSIVE,
    title: 'IN CONCLUSIVE',
    color: colors.conclusions['inconclusive']
  }
]

export default (trueCount, falseCount, inConclusiveCount) => {
  let id = IN_CONCLUSIVE // Default

  if ((trueCount + falseCount + inConclusiveCount) === 0) {
    id = NEEDS_EVIDENCE
  } else if (trueCount > 0 && falseCount === 0 && inConclusiveCount === 0) {
    id = APPEARS_TO_BE_TRUE
  } else if (trueCount === 0 && falseCount > 0 && inConclusiveCount === 0) {
    id = SEEMS_FALSE
  }

  return statutes.find(stat => stat.id === id)
}
