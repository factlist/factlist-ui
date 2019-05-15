import React from 'react'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import {withForm, Form} from 'adapters'
import {TextField} from 'components'


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
        autoComplete="bio"
        multiLine={true}
      />
    </Box>

    <Box mt={20}>
      <TextField
        name="name"
        autoComplete="name"
      />
    </Box>

    <Box mt={20}>
      <TextField
        name="username"
        autoComplete="username"
      />
    </Box>

    <Box mt={20}>
      <TextField
        name="email"
        autoComplete="email"
      />
    </Box>

    <Box mt={20}>
      <TextField
        type="password"
        name="password"
        autoComplete="password"
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
