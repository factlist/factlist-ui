import React from 'react'
import {withForm, Form} from 'utils/form'
import { TextField } from 'components/Form'
import {object, string} from 'yup'
import { Flex, Box } from '@rebass/grid'


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

const Button = props =>
  <button
    {...props}
    style={{
      fontWeight: 500,
      color: 'white',
      fontSize: '12px',
      backgroundColor: 'black',
      border: 0,
      lineHeight: '37px',
      padding: '0 25px',
      marginTop: '15px',
      cursor: props.disabled ? 'not-allowed' : 'pointer',
    }}
  />
