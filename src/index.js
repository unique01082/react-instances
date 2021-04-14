import manageInstances from './hocs/manageInstances'
import observable from './hocs/observable'
import withInstanceManage from './hocs/withInstanceManage'
import useObserver from './hooks/useObserver'
import useObserversNotify from './hooks/useObserversNotify'
import withHookInstanceManage from './hooks/withHookInstanceManage'
import withHookObserversNotify from './hooks/withHookObserversNotify'
import withHookManage from './hooks/withHookManage'
import useInstanceManage from './hooks/useInstanceManage'
import symbols from './hocs/symbols'

function setEqual(fn) {
  useObserver.isEqual = fn
}

export {
  symbols,
  setEqual,
  manageInstances,
  observable,
  withInstanceManage,
  useObserver,
  useObserversNotify,
  withHookInstanceManage,
  withHookObserversNotify,
  withHookManage,
  useInstanceManage
}
