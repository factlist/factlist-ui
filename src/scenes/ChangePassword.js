import React from 'react'
import {compose} from 'recompose'
import {withRoute} from 'react-router5'
import {withNotification} from '/containers'
import {withFetch} from '/lib/request'
import {withFormik, makeValidatorFromAPI, Form} from '/lib/form'
import {Button, InputField, Alert} from '/lib/ui'


const ChangePasswordScene = ({changeFetch = {}}) =>
  <>
    {changeFetch.resolved &&
      <Alert type='success'>
        Your password change successfully.
      </Alert>
    }

    <Form>
      <InputField name='password' type='password' />

      <Button
        type='submit'
        disabled={changeFetch.pending}
        children={changeFetch.pending ? 'Submitting...' : 'Submit'}
      />
    </Form>
  </>

export default compose(
  withNotification,

  withRoute,

  withFetch(({route, notification}) => ({
    submit: (values, formikBag) => ({
      changeFetch: {
        url: '/change_password',
        method: 'post',
        body: {
          ...values,
          key: route.params.key,
        },
        then: () => {
          formikBag.resetForm()
        },
        catch: () => {
          notification.show(
            'We can\'t complete your request. Please try again later.'
          )
        },
      },
    }),
  })),

  withFormik({
    mapPropsToValues: () => ({
      password: '',
    }),

    validate: makeValidatorFromAPI('/change-password', 'post'),

    handleSubmit: (values, formikBag) =>
      formikBag.props.submit(values, formikBag),
  }),
)(
  ChangePasswordScene
)
