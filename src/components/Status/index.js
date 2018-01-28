import React from 'react'
import Label from './Label'
import Count from './Count'
import CheckIcon from './Icons/StyledCheck'
import CloseIcon from './Icons/StyledClose'
import QuestionIcon from './Icons/StyledQuestion'
import getStatus from './getStatus'
import { APPEARS_TO_BE_TRUE } from './constants'

const Status = ({ trueCount, falseCount, inConclusiveCount }) => {
  const status = getStatus(trueCount, falseCount, inConclusiveCount)

  return (
    <div>
      <Label color={status.color}>
        {status.title}
      </Label>

      {trueCount > 0 && (
        <span>
          <CheckIcon fill={status.id === APPEARS_TO_BE_TRUE ? '#4CAF50' : null} />
          <Count color={status.id === APPEARS_TO_BE_TRUE ? '#4CAF50' : '#00D092'}>{trueCount}</Count>
        </span>
      )}

      {falseCount > 0 && (
        <span>
          <CloseIcon />
          <Count color="#FF6947">{falseCount}</Count>
        </span>
      )}

      {inConclusiveCount > 0 && (
        <span>
          <QuestionIcon />
          <Count color="#FF6947">{inConclusiveCount}</Count>
        </span>
      )}
    </div>
  )
}

export default Status
