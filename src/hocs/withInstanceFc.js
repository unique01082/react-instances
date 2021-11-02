import manageFcInstances from './manageFcInstances'
import observableFc from './observableFc'

export default function withInstanceFc(Component) {
  return observableFc(manageFcInstances(Component))
}
