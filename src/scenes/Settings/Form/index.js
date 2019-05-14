import React from 'react'
import {withForm, Form} from 'utils/form'
import { TextField } from 'components/Form'
import {object, string} from 'yup'
import { Flex, Box } from '@rebass/grid'
import Button from './Button'


const validationSchema = object({
  bio: string(),
  name: string().required(),
  username: string().required(),
  email: string().email().required(),
  password: string(),
})

const SettingsForm = ({isSubmitting, isValidating}) => <Form>
  <Flex flexDirection="column">
    <Box>
      <TextField
        name="bio"
        autocomplete="bio"
        multiLine={true}
      />
    </Box>

    <Box mt={20}>
      <TextField
        name="name"
        autocomplete="name"
      />
    </Box>

    <Box mt={20}>
      <TextField
        name="username"
        autocomplete="username"
      />
    </Box>

    <Box mt={20}>
      <TextField
        name="email"
        autocomplete="email"
      />
    </Box>

    <Box mt={20}>
      <TextField
        type="password"
        name="password"
        autocomplete="password"
      />
    </Box>

    <Box mt={20}>
      <Button disabled={isSubmitting || isValidating}>
        {isSubmitting || isValidating ? 'Saving...' : 'Save'}
      </Button>
    </Box>
  </Flex>
</Form>

export default withForm({validationSchema})(SettingsForm)
