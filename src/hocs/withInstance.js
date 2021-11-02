import manageInstances from './manageInstances'
import observable from './observable'

export default function withInstance(Component) {
  return observable(manageInstances(Component))
}
