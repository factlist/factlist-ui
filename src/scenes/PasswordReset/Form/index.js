import React from 'react'
import { TextField } from 'components/Form'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import {withForm, Form} from 'utils/form'
import Button from 'components/Button'


const validationSchema = object({
  user_identifier: string().email().required(),
})

const PasswordResetForm = ({isSubmitting, isValidating}) => <Form>
  <Flex flexDirection="column">
    <Box>
      <TextField
        name="user_identifier"
        label="Email"
        autoComplete="email"
      />
    </Box>

    <Box alignSelf="flex-end" mt={10}>
      <Button
        type='submit'
        disabled={isSubmitting || isValidating}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </Box>
  </Flex>
</Form>

export default withForm({validationSchema})(PasswordResetForm)
