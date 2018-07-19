import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import { reduxForm, Field } from 'redux-form'
import { EVIDENCE_FORM } from 'modules/evidence/constants'
import MultimediaInputForm from 'containers/Forms/MultimediaInputForm'
import { required, minLength } from 'core/validationRules'
import Label from './Label'
import Conclusions from './Conclusions'
import SubmitButton from './SubmitButton'

const minLength30 = minLength(30)

class Form extends Component {
  render() {
    const {
      handleSubmit,
      submitting,
      onMultimediaInputFocus,
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Flex column>
          <Box mb={30}>
            <Label>Claim is:</Label>
            <Field name="conclusion" component={Conclusions} validate={[ required ]} />
          </Box>

          <Box mb={15}>
            <Label>Because:</Label>
            <Field
              id="evidence"
              name="text"
              placeholder="Start explaning your evidence here."
              component={MultimediaInputForm}
              validate={[ required, minLength30 ]}
              onFocus={onMultimediaInputFocus} />
          </Box>

          <Box>
            <SubmitButton disabled={submitting}>
              {submitting ? 'Adding...' : 'Add Evidence'}
            </SubmitButton>
          </Box>
        </Flex>
      </form>
    )
  }
}

export default reduxForm({
  form: EVIDENCE_FORM,
  destroyOnUnmount: false,
})(Form)
