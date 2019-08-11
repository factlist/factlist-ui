import React from 'react'
import {compose} from 'recompose'
import {withUser, withNotification} from '/containers'
import {withFetch} from '/lib/request'
import {withFormik, makeValidatorFromAPI, makeFormState, Form} from '/lib/form'
import {InputField, Button} from '/lib/ui'


const SettingsScene = ({updateFetch = {}, values}) =>
  <>
    <h1>Settings</h1>

    <Form>
      <InputField name='bio' component='textarea' />
      <InputField name='name' />
      <InputField name='username' />
      <InputField name='password' type='password' />
      <InputField name='password_confirmation' type='password' />
      <InputField name='avatar' type='file' />

      <p><img src={values.avatar} /></p>

      <p>Note: Leave password blank if you don't want to change it.</p>

      <Button
        type='submit'
        disabled={updateFetch.pending}
        children={updateFetch.pending ? 'Saving' : 'Save'}
      />
    </Form>
  </>

export default compose(
  withUser,
  withNotification,

  withFetch(({user, notification}) => ({
    updateUser: (values, formikBag) => ({
      updateFetch: ({
        url: '/users/' + user.state.id,
        method: 'PATCH',
        body: values,
        then: () => {
          notification.show('User updated successfully.')
          formikBag.setFieldValue('password', '')
          formikBag.setFieldValue('password_confirmation', '')
        },
        catch: () => {
          notification.show(
            'We couldn\'t update your settings. Please try again later.'
          )
        },
      }),
    }),
  })),

  withFormik({
    mapPropsToValues: ({user}) =>
      makeFormState(
        [
          'bio', 'name', 'username', 'password', 'password_confirmation',
          'avatar',
        ],
        user.state
      ),

    validate: makeValidatorFromAPI('/users/{id}', 'patch'),

    handleSubmit: (values, formikBag) =>
      formikBag.props.updateUser(values, formikBag),
  }),
)(
  SettingsScene
)
