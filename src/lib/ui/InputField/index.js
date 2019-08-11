import React, {createElement} from 'react'
import {connect} from 'formik'
import nanoid from 'nanoid'
import cc from 'classcat'
import {capitalize} from 'lodash-es'
import {readFile} from '/lib/util'
import cm from './inputField.css'


const InputFieldDumb = ({
  formik,
  component = 'input',
  name,
  id = nanoid(),
  label,
  className,
  ...rest
}) =>
  <div className={cm.field}>
    <label
      htmlFor={id}
      children={label || capitalize(name.replace(/[_\-.]/g, ' '))}
    />

    {createElement(component, {
      id,
      name,
      autoComplete: name,
      value: rest.type === 'file' ? undefined : formik.values[name],
      onChange:
        rest.type === 'file'
          ? e => handleFileChange(e, formik)
          : formik.handleChange,
      onBlur: formik.handleBlur,
      className: cc([className, {
        [cm.error]: formik.touched[name] && formik.errors[name],
      }]),
      ...rest,
    })}

    {(formik.touched[name] && formik.errors[name]) &&
      <p>{formik.errors[name]}</p>
    }
  </div>

const handleFileChange = ({target}, formik) =>
  readFile(target.files[0])
    .then(fileBase64Content =>
      formik.setFieldValue(target.name, fileBase64Content)
    )

export default connect(InputFieldDumb)
