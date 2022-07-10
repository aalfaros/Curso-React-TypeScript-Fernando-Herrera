import { useForm } from '../hooks/useForm'

interface FormData {
  email: string
  nombre: string
  edad: number
}

export const Formulario = () => {
  const { formulario, handleChange, nombre, email, edad } = useForm<FormData>({
    nombre: 'Andrés Alfaro',
    email: 'aalfaros@gmail.com',
    edad: 49
  })

  // const [formulario, setFormulario] = useState({
  //   nombre: '',
  //   email: ''
  // })

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          title="email"
          placeholder="usuario@servidor.dominio"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          title="nombre"
          placeholder="Nombre Apellido"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input
          type="number"
          className="form-control"
          name="edad"
          title="edad"
          placeholder="30"
          value={edad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )

  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = e.target
  //   setFormulario({ ...formulario, [name]: value })
  // }
}
