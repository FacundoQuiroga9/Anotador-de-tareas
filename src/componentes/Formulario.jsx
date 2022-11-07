import '../styles/Formulario.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario (props){

  
  const [input, setInput] = useState('')

  const manejarCambio= e=>{
    setInput(e.target.value)
  }

  const manejarEnvio= e =>{
    e.preventDefault()
    const tareaNueva ={
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)

  }
  return(
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input type="text" className='tarea-input' placeholder='Escriba una tarea' onChange={manejarCambio}/>
      <button className='tarea-boton'><AiFillPlusCircle className='tarea-icon'/></button>
    </form>
    
  )
}
export default TareaFormulario