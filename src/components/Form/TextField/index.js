import React from 'react'
import propTypes from 'prop-types'
import {Field} from 'formik'
import nanoid from 'nanoid'
import Container from './Container'
import Input from './Input'
import Textarea from './Textarea'
import Label from './Label'
import P from './P'

const TextField = ({
  name,
  id = nanoid(),
  type = 'text',
  label,
  multiLine = false,
  rows = 2,
  ...rest,
}) => (
  <Field name={name}>
    {({field, form}) =>
      <Container>
        <Label htmlFor={id}>{label}</Label>

        {multiLine
          ? <Textarea
              id={id}
              {...field}
              {...rest}
              rows={rows}
              error={form.touched[field.name] && form.errors[field.name]}
            />
          : <Input
              id={id}
              type={type}
              {...field}
              {...rest}
              error={form.touched[field.name] && form.errors[field.name]}
            />
          }

        {(form.touched[field.name] && form.errors[field.name]) &&
          <P>{form.errors[field.name]}</P>
        }
      </Container>
    }
  </Field>
)

TextField.propTypes = {
  label: propTypes.string.isRequired,
}

export default TextField
