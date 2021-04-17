import { useState } from 'react'
import {
  manageInstances,
  observable,
  useInstanceManage,
  useObserversNotify
} from 'react-instances'

const useCounter = (name) => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  useInstanceManage(useCounter, name, { count, increase, decrease })
  useObserversNotify(useCounter, name, { count, increase, decrease })

  return [count, { increase, decrease }]
}

manageInstances(useCounter)
observable(useCounter)
export default useCounter
