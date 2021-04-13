import {
  manageInstances,
  observable,
  withHookInstanceManage,
  withHookObserversNotify
} from '..'

export default function withHookManage(hook) {
  manageInstances(hook)
  observable(hook)

  return withHookInstanceManage(withHookObserversNotify(hook))
}
