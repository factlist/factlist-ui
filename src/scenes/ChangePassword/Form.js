import React from 'react'
import { Flex, Box } from '@rebass/grid'
import {Formik, Form} from 'formik'
import { TextField } from 'components/Form'
import {object, string} from 'yup'
import Button from 'components/Button'


const initialValues = {
  password: '',
}

const validationSchema = object({
  password: string().required(),
})

const ChangePasswordForm = ({onSubmit}) =>
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({isSubmitting, isValidating}) =>
      <Form>
        <Flex flexDirection="column" width={420}>
          <Box>
            <TextField
              type="password"
              name="password"
              label="Password"
              autoComplete="password"
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
    }
  </Formik>

export default ChangePasswordForm
