import { useState } from 'react'
import { observable, useObserversNotify } from 'react-instances'

const useCounter = (name) => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  useObserversNotify(useCounter, name, { count, increase, decrease })

  return [count, { increase, decrease }]
}

export default observable(useCounter)
