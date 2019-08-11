import React from 'react'
import Ajv from 'ajv'
import {withFormik as withFormikOriginal, Form as FormOriginal} from 'formik'
import {memoize, mapValues, pick, fromPairs} from 'lodash-es'
import getApiDescription from './apiDescription'


const ajvInstance = new Ajv({
  allErrors: true,
  $data: true,
})

const getAjvValidator = memoize(
  (endpointPath, endpointMethod) =>
    getApiDescription()
      .then(apiDescription => {
        const endpointSchema =
          apiDescription
            .paths[endpointPath][endpointMethod]
            .parameters
            .filter(({name}) => name === 'body')[0]
            .schema

        return ajvInstance.compile(endpointSchema)
      })
)

export const makeValidatorFromAPI = (endpointPath, endpointMethod) =>
  data =>
    getAjvValidator(endpointPath, endpointMethod)
      .then(ajvValidator =>
        ajvValidator(data)
          ? Promise.resolve()
          : Promise.reject(
            (ajvValidator.errors || []).reduce(
              (acc, e) => ({
                ...acc,
                [e.dataPath.slice(1)]: e.message,
              }),

              {}
            )
          )
      )

export const withFormik = opts =>
  withFormikOriginal({
    validateOnChange: false,
    validateOnBlur: true,
    ...opts,
  })

export const Form = props =>
  <FormOriginal noValidate {...props} />

export const makeFormState = (keys, initialRecord = {}) =>
  fromPairs(
    keys.map(key => [
      key,
      initialRecord[key] || ''
    ])
  )
