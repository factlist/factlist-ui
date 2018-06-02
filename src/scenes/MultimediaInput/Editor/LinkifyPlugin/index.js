import Link from './Link'
import linkStrategy from './linkStrategy'

export default () => ({
  decorators: [{
    strategy: linkStrategy,
    component: Link,
  }],
})
