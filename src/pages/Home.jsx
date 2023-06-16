import React from 'react'
import Task from '../components/task'

export const Home = () => {
  return (
    <>
        <h1 className='text-lx'>Home</h1>
        <button>Ir a las tareas</button>
        <br /><br /><br /><br /><br />
        <hr />
        <Task></Task>
    </>
  )
}
