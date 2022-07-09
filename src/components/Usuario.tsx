import { useState } from 'react'

interface User {
  uid: string
  name: string
}

export const Usuario = () => {
  const [user, setUser] = useState<User>()

  return (
    <div className="mt-4 mb-4">
      <h3>Usuario:</h3>
      {user ? <span>{JSON.stringify(user)}</span> : <span>No hay usuario</span>}
      <br /> <br />
      <button type="button" className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
    </div>
  )

  function login() {
    setUser({
      uid: '123',
      name: 'Andrés Alfaro'
    })
  }
}
