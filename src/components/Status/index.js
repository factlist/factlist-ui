import React from 'react'
import Container from './Container'
import Label from './Label'

const STATUSES = {
  needs_evidence: {
    title: 'NEEDS EVIDENCE',
    color: '#444444'
  },
  appears_to_be_true: {
    title: 'APPEARS TO BE TRUE',
    color: '#00D092'
  },
  seems_false: {
    title: 'SEEMS FALSE',
    color: '#FF6947'
  },
  in_conclusive: {
    title: 'IN CONCLUSIVE',
    color: '#FFB747'
  }
}

const Status = ({
  trueCount = 0,
  falseCount = 0,
  inConclusiveCount = 0
}) => {
  let name = 'in_conclusive' // Default

  if ((trueCount + falseCount + inConclusiveCount) === 0) {
    name = 'needs_evidence'
  } else if (trueCount > 0 && falseCount === 0 && inConclusiveCount === 0) {
    name = 'appears_to_be_true'
  } else if (trueCount === 0 && falseCount > 0 && inConclusiveCount === 0) {
    name = 'seems_false'
  }

  return (
    <Container color={STATUSES[name].color}>
      <Label>{STATUSES[name].title}</Label>
    </Container>
  )
}

export default Status
