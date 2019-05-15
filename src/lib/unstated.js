/**
 * This module is just a small wrapper on Unstated that serves to create
 * containers with sweet factory methods instead of by extending the "Container"
 * class; and to create subscribers using the higher order component pattern
 * instead of the render props pattern.
 *
 * So it does nothing that Unstated doesn't.
 * But it does what it does with style
 */

import {Container, Subscribe} from 'unstated'
import {createElement as h} from 'react'
import {fromRenderProps} from 'recompose'
import zipObject from 'lodash/zipObject'

/**
 * makeUnstated
 * The API is equivalent of Recompose's `withStateHandlers`.
 * Returns an Unstated container.
 */
export const makeUnstated = (initialState, handlers) => {
  const UserContainer = class extends Container {
    constructor(overrideInitialState) {
      super()

      this.state = overrideInitialState || initialState

      Object.keys(handlers).forEach(handlerName =>
        this[handlerName] = this[handlerName].bind(this)
      )
    }
  }

  Object.entries(handlers)
    .forEach(([handlerName, handler]) =>
      UserContainer.prototype[handlerName] =
        function(...args) {
          return this.setState(
            handler(this.state)(...args)
          )
        }
    )

  return UserContainer
}

/**
 * A wrapper for Unstated's Subscribe to consume containers with
 * a higher order component.
 */
export const withUnstated = subscriptions =>
  fromRenderProps(
    ({children}) => h(
      Subscribe,
      {to: Object.values(subscriptions)},
      children
    ),

    (...args) => zipObject(Object.keys(subscriptions), args)
  )
