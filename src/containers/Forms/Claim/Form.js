import React from 'react'
import { Flex, Box } from 'grid-styled'
import { reduxForm, Field } from 'redux-form'
import { CLAIM_FORM } from 'modules/claim/constants'
import MultimediaInputForm from 'containers/Forms/MultimediaInputForm'
import { required, minLength } from 'core/validationRules'
import Button from 'components/Button'

const minLength30 = minLength(30)

const Form = ({
  handleSubmit,
  submitting,
  onMultimediaInputFocus,
}) => (
  <form onSubmit={handleSubmit}>
    <Flex flexDirection="column">
      <Box>
        <Field
          id="claim"
          name="text"
          placeholder="Bring out your evidence here."
          component={MultimediaInputForm}
          validate={[ required, minLength30 ]}
          onFocus={onMultimediaInputFocus} />
      </Box>

      <Box mt={10} alignSelf="flex-end">
        <Button
          type="submit"
          disabled={submitting}>
          {submitting ? 'Adding...' : 'Add Claim'}
        </Button>
      </Box>
    </Flex>
  </form>
)

export default reduxForm({
  form: CLAIM_FORM,
  destroyOnUnmount: false,
})(Form)
