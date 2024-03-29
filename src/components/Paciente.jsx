const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    if(confirm('Deseas eliminar este paciente')){
      eliminarPaciente(id);
    }
  }

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="mb-3 font-bold text-gray-700 uppercase" >Nombre: {''} 
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase" >Propietario: {''} 
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase" >Email: {''} 
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase" >Fecha de alta: {''} 
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase" >Sintomas: {''} 
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => setPaciente(paciente)}
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-950 text-white font-bold rounded transition-all"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={handleEliminar}
            className="py-2 px-10 bg-red-600 hover:bg-red-950 text-white font-bold rounded transition-all"
          >
            Eliminar
          </button>
        </div>
        
      </div>
  )
}

export default Paciente

