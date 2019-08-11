/**
 * This module is just a small wrapper on Unstated that serves to create
 * containers with sweet factory methods instead of by extending the "Container"
 * class; and to create subscribers using the higher order component pattern
 * instead of the render props pattern. Because boo render props.
 */

import React from 'react'
import {Container, Subscribe} from 'unstated'
import zipObject from 'lodash/zipObject'

/**
 * makeUnstated
 * The API is equivalent of Recompose's `withStateHandlers`.
 * Returns an Unstated container.
 */
export const makeUnstated = (name, defaultState, handlers) => {
  const containerClass = class extends Container {
    constructor (initialState) {
      super ()

      this.state = initialState || defaultState

      Object.keys(handlers).forEach(handlerName =>
        this[handlerName] = this[handlerName].bind(this)
      )
    }
  }

  if (Object.defineProperty)
    Object.defineProperty(containerClass, 'name', {value: name})
  // The class name is helpful for debugging but useless otherwise so it's ok
  // if the browser doesn't support "Object.defineProperty".

  Object.entries(handlers)
    .forEach(([handlerName, handler]) =>
      containerClass.prototype[handlerName] = function(...args) {
        return this.setState(
          handler(this.state)(...args)
        )
      }
    )

  return containerClass
}

/*
 * withUnstated
 *
 * Convenience utility to subscribe to containers with a HOC, instead of
 * Unstated's default "Subscribe" render props component.
 */
export const withUnstated = subscriptions => Component => props =>
  <Subscribe to={Object.values(subscriptions)}>
    {(...containerInstances) =>
      <Component
        {...props}
        {...zipObject(Object.keys(subscriptions), containerInstances)}
      />
    }
  </Subscribe>
