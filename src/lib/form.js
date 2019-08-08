import {withFormik} from 'formik'
import pick from 'lodash/pick'
import mapValues from 'lodash/mapValues'
import noop from 'lodash/noop'


/**
 * withForm: Wrapper for Formik's "withFormik" HOC. All it does is to define two
 * default properties with following behaviors:
 *
 * - mapPropsToValues: Use the "initialValues" prop if exists, or else derive
 * initial values from the validation schema.
 *
 * - handleSubmit: Forward the event to the "onSubmit" prop (if exists).
 */
export const withForm = conf => {
  if (!conf.validationSchema)
    throw new Error(
      'withForm: "validationSchema" is a required option!')

  return withFormik({
    mapPropsToValues:
      props =>
        !props.initialValues
          ? mapValues(conf.validationSchema.fields, () => '')

          : pick(
              props.initialValues,
              Object.keys(conf.validationSchema.fields)
            ),
            // pick only the keys that exist in our schema, in case there are
            // other keys that don't concern us.


    handleSubmit: (vals, formikBag) =>
      (formikBag.props.onSubmit || noop)(vals, formikBag),

    ...conf,
  })
}
