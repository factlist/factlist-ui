/*
 * Wrapper for React Router5's Link component that supports custom components
 * other than the default HTML anchor element via the "component" attribute.
 */

import React, {createElement} from 'react'
import {withRouter, Link} from 'react-router5'
import {noop} from 'lodash-es'


export default ({component = 'a', ...props}) =>
  component === 'a'
    ? <Link {...props} />
    : <CustomLink component={component} {...props} />

const CustomLink = withRouter(({
  router,
  component,
  routeName,
  routeParams = {},
  routeOptions = {},
  ...props
}) =>
  createElement(component, {
    ...props,
    onClick: e => {
      (props.onClick || noop)(e)
      router.navigate(routeName, routeParams, routeOptions)
    },
  })
)
