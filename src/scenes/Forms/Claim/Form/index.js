import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { CLAIM_FORM } from 'modules/claim/constants'
import MultimediaInputForm from 'scenes/MultimediaInputForm'
import { required, minLength } from 'core/validationRules'
import SubmitButton from './SubmitButton'

const minLength30 = minLength(30)

const Form = ({
  handleSubmit,
  submitting,
  onMultimediaInputFocus,
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      id="claim"
      name="text"
      placeholder="Bring out your evidence here."
      component={MultimediaInputForm}
      validate={[ required, minLength30 ]}
      onFocus={onMultimediaInputFocus} />

      <SubmitButton disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Claim'}
      </SubmitButton>
  </form>
)

export default reduxForm({
  form: CLAIM_FORM,
  destroyOnUnmount: false,
})(Form)
