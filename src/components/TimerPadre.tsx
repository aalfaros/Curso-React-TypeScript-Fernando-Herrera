import { useState } from 'react'
import { Timer } from './Timer'

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000)

  return (
    <div>
      <span>
        Intervalo para el incremento:{' '}
        {new Intl.NumberFormat('es-CL').format(milisegundos)} ms
      </span>
      <br />
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => setMilisegundos(1000)}
      >
        1.000
      </button>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => setMilisegundos(2000)}
      >
        2.000
      </button>
      <Timer milisegundos={milisegundos} />
    </div>
  )
}
