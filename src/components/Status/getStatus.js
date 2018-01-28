import {
  NEEDS_EVIDENCE,
  APPEARS_TO_BE_TRUE,
  SEEMS_FALSE,
  IN_CONCLUSIVE
} from './constants'

const statutes = [
  {
    id: NEEDS_EVIDENCE,
    title: 'NEEDS EVIDENCE',
    color: '#444444'
  },
  {
    id: APPEARS_TO_BE_TRUE,
    title: 'APPEARS TO BE TRUE',
    color: '#4CAF50'
  },
  {
    id: SEEMS_FALSE,
    title: 'SEEMS FALSE',
    color: '#FF6947'
  },
  {
    id: IN_CONCLUSIVE,
    title: 'IN CONCLUSIVE',
    color: '#FFB747'
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
