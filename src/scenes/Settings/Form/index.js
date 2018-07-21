import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'components/Form'
import { required, email } from 'core/validationRules'
import { Flex, Box } from 'grid-styled'
import Button from './Button'

const Form = ({
  handleSubmit, requesting, invalid, pristine, onSignUpClick
}) => (
  <form onSubmit={handleSubmit}>
    <Flex flexDirection="column">
      <Box>
        <Field
          type="text"
          id="settings_bio"
          name="bio"
          label="Bio"
          autoComplete="bio"
          multiLine={true}
          component={TextField} />
      </Box>

      <Box mt={20}>
        <Field
          type="text"
          id="settings_name"
          name="name"
          label="Name"
          autoComplete="name"
          validate={[ required ]}
          component={TextField} />
      </Box>

      <Box mt={20}>
        <Field
          type="text"
          id="settings_username"
          name="username"
          label="Username"
          autoComplete="username"
          validate={[ required ]}
          component={TextField} />
      </Box>

      <Box mt={20}>
        <Field
          type="text"
          id="settings_email"
          name="email"
          label="Email"
          autoComplete="email"
          validate={[ required, email ]}
          component={TextField} />
      </Box>

      <Box mt={20}>
        <Field
          type="password"
          id="settings_password"
          name="password"
          label="Password"
          autoComplete="password"
          component={TextField} />
      </Box>

      <Box mt={20}>
        <Button disabled={requesting}>
          {requesting ? 'Saving...' : 'Save'}
        </Button>
      </Box>
    </Flex>
  </form>
)

const ReduxForm = reduxForm({
  form: 'SettingsForm'
})(Form)

const mapStateToProps = (state) => ({
  initialValues: state.auth.user,
})

export default connect(mapStateToProps)(ReduxForm)
