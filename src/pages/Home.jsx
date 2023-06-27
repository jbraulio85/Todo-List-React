import React from 'react'
import { Task } from '../components/Task'


export const Home = () => {
  return (
    <>
        <h1 style={{color: '#1f618D', fontSize: '45px', textAlign: 'center'}} className='text-lx'>Home</h1>
        <button style={{borderBlockColor: 'blue'}}>Ir a las tareas</button>
        <br style={{borderBlockColor:'blue'}} /><br /><br /><br /><br />
        <hr />
        <Task></Task>
    </>
  )
}
