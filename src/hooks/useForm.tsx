import { ChangeEvent, useState } from 'react'

export function useForm<T>(initState: T) {
  const [formulario, setFormulario] = useState(initState)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormulario({ ...formulario, [name]: value })
  }

  return { formulario, handleChange, ...formulario }
}
