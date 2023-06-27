import React, { useEffect, useState } from 'react'
import { AddTask } from './AddTask'
import axios from 'axios';

export const Task = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async()=>{
        try{
          const { data } = await axios('https://todolist-ten-kohl.vercel.app/v1/get')
          if(data.tasks){
            setTasks(data.tasks);
          }
        }catch(err){
          console.log(err)
          throw new Error('Error getting tasks')
        }
      }

    useEffect(()=>{
        getTasks();
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
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{date}</td>
                                <td>{priority}</td>
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
        
        <AddTask setTasks={setTasks} tasks={tasks}></AddTask>
    </>
  )
}
