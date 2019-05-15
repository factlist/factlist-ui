import React from 'react'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import {withForm, Form} from 'adapters'
import {Button, TextField} from 'components'


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
