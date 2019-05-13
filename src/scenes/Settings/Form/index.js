import React from 'react'
import {Formik, Form} from 'formik'
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

const SettingsForm = ({user, onSubmit}) =>
  <Formik
    initialValues={user}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({isSubmitting, isValidating}) =>
      <Form>
        <Flex flexDirection="column">
          <Box>
            <TextField
              name="bio"
              label="Bio"
              autoComplete="bio"
              multiLine={true}
            />
          </Box>

          <Box mt={20}>
            <TextField
              name="name"
              label="Name"
              autoComplete="name"
            />
          </Box>

          <Box mt={20}>
            <TextField
              name="username"
              label="Username"
              autoComplete="username"
            />
          </Box>

          <Box mt={20}>
            <TextField
              name="email"
              label="Email"
              autoComplete="email"
            />
          </Box>

          <Box mt={20}>
            <TextField
              type="password"
              name="password"
              label="Password"
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
    }
  </Formik>

export default SettingsForm
