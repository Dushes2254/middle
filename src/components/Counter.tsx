import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <p>text</p>
      <button className={classes.btn} onClick={increment}>
        Increment
      </button>
    </div>
  )
}
