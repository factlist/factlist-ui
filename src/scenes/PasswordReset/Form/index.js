import React from 'react'
import {Formik, Form} from 'formik'
import { TextField } from 'components/Form'
import { Flex, Box } from '@rebass/grid'
import {object, string} from 'yup'
import Button from 'components/Button'


const initialValues = {
  user_identifier: '',
}

const validationSchema = object({
  user_identifier: string().email().required(),
})

const PasswordResetForm = ({onSubmit}) =>
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({isSubmitting, isValidating}) =>
      <Form>
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
    }
  </Formik>

export default PasswordResetForm
