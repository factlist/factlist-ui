import React from 'react'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import {withForm, Form} from 'adapters'
import {Button, TextField} from 'components'


const validationSchema = object({
  password: string().required(),
})

const ChangePasswordForm = ({isSubmitting, isValidating}) => <Form>
  <Flex flexDirection="column" width={420}>
    <Box>
      <TextField
        type="password"
        name="password"
        autocomplete="password"
      />
    </Box>

    <Box mt={10} alignSelf="flex-end">
      <Button
        type="submit"
        disabled={isSubmitting || isValidating}>
        {(isSubmitting || isValidating) ? 'Submitting...' : 'Submit'}
      </Button>
    </Box>
  </Flex>
</Form>

export default withForm({validationSchema})(ChangePasswordForm)
