import React from 'react'

import { Counter } from './components/Counter'
import { Usuario } from './components/Usuario'

import { TimerPadre } from './components/TimerPadre'

import { ContadorRed } from './components/ContadorRed'

import { Formulario } from './components/Formulario'

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <Usuario />

      <hr />
      <h2>useEffect - useRef</h2>
      <TimerPadre />

      <hr />
      <h2>useReducer</h2>
      <ContadorRed />

      <hr />
      <h2>customHooks</h2>
      <Formulario />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
    </>
  )
}

export default App
