import { useState, useEffect } from "react"
import Error from "./Error";

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } else {
      console.log('No hay nada');
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay almenos un campo vacio');
      setError(true)
    } else {
      setError(false)

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas  
      }

      if (paciente.id) {
        objetoPaciente.id = paciente.id
        const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacienteActualizado)
        setPaciente({})

      }else{
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])
      }

      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")
    }

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">
          Administralos
        </span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-semibold">Nombre Mascota</label>
          <input id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-semibold">Nombre del propietario</label>
          <input id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietarioa"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-semibold">Email contacto propietario</label>
          <input id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietarioa"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-semibold">Email contacto propietario</label>
          <input id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-semibold">Sintomas</label>
          <textarea id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? 'Editar paciente': 'Agregar paciente'}
        />

      </form>
    </div>
  )
}
