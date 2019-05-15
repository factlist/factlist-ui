import React from 'react'
import {Field} from 'formik'
import nanoid from 'nanoid'
import capitalize from 'lodash/capitalize'
import cm from './textField.module.css'


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
      <div className={cm.field}>
        <label htmlFor={id}>{label || capitalize(name)}</label>

        {multiLine
          ? <textarea
              id={id}
              {...field}
              {...rest}
              rows={rows}
              className={
                form.touched[field.name] && form.errors[field.name]
                  && cm.error
              }
            />
          : <input
              id={id}
              type={type}
              {...field}
              {...rest}
              className={
                form.touched[field.name] && form.errors[field.name]
                  && cm.error
              }
            />
          }

        {(form.touched[field.name] && form.errors[field.name]) &&
          <p>{form.errors[field.name]}</p>
        }
      </div>
    }
  </Field>
)

export default TextField
