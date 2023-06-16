import React, { useEffect, useState } from 'react'
import { AddTask } from './AddTask'
import axios from 'axios';

export const Task = () => {
    const [tasks, setTasks] = useState([
    {
        name: 'Recibir clases de refuerzo',
        description: 'Llegar al colegio a las 10 am para recibir clases',
        date: '31/5/2023',
        priority: 10
    },{
        name: 'Ver la serie',
        description: 'Ver betty la fea toda la noche',
        date: '1/6/2023',
        priority: 5
    }]);

    const getTasks = async()=>{
        try{
          const { data } = await axios('http://localhost:4099/task/get')
          if(data.tasks){
            setTasks(data)
          }
        }catch(err){
          console.log(err)
          throw new Error('Error getting tasks')
        }
      }

    useEffect(()=>{
        getTask
    }, [])

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Prioridad</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map(({name, description, date, priority}, i)=>{
                        return (
                            <tr key={i}>
                                <td>{n}</td>
                                <td>{d}</td>
                                <td>{d}</td>
                                <td>{p}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
                <br />
                <br />
                <br /><br /><br />
                <hr />
        
        <AddTask setTasks={tasks} tasks={tasks}></AddTask>
    </>
  )
}
