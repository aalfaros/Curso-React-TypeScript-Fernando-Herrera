import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="mt-4 mb-4">
      <h3>Counter:</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        type="button"
        onClick={() => incrementar()}
        className="btn btn-outline-primary mt-2"
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => incrementar(2)}
        className="btn btn-outline-primary mt-2"
      >
        +2
      </button>
      <button
        type="button"
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </div>
  )

  function incrementar(incremento: number = 1): void {
    setCounter(counter + incremento)
  }
}
