import React, {useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export const AddTask = ({tasks, setTasks}) => {
    const [formData, setFormData] = useState();
    
    const addTask = async(e)=>{
        try{
            e.preventDefault();
            const alreadyTask = tasks.findIndex((task)=>
                task.name === formData.name
            ) 
            if(alreadyTask === -1){
                let { data } = await axios.post('https://todolist-ten-kohl.vercel.app/v1/add', formData)
                if(data.ok === true){
                    setTasks([
                        ...tasks,
                        formData
                    ])
                    return e.target.reset()
                }
            }
            alert('Ya existe la tarea')
        }catch(err){
            return alert(err.response.data.err.message)
        }
    }
    
    const handleChange = (e)=>{    
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
  return (
    <div>
        <form onSubmit={(e)=> addTask(e)}>
            <div>
                <label htmlFor="">Nombre</label>
                <input onChange={handleChange} id='name' name='name' type="text" />
            </div>
            <div>
                <label htmlFor="">Descripción</label>
                <textarea onChange={handleChange} name="description" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="">Fecha</label>
                <input onChange={handleChange} name='date' type="date" />
            </div>
            <div>
                <label htmlFor="">Prioridad</label>
                <input onChange={handleChange} name='priority' type="number" />
            </div>
            <button type='submit'>Agregar</button>
        </form>
    </div>
  )
}

AddTask.propTypes = {
    tasks: PropTypes.array
}