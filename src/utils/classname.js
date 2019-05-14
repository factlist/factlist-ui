import cc from 'classcat'
import mapKeys from 'lodash/mapKeys'


/**
 * CSS Modules aware class name generator built on classcat.
 */
export default (cssModule, rootClassName, conditionalClassNames) =>
  cc([
    cssModule[rootClassName],
    mapKeys(conditionalClassNames, (_, className) => cssModule[className]),
  ])
