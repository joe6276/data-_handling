import React, { useState } from 'react'

export default function AddStudent({sendData}) {

    const [person , setPerson]= useState({name:'', age:0})
    const onHandleChange=(e)=>{
        setPerson(prev=> ({...prev ,[e.target.name]:e.target.value}))
    }
   const handleSubmit=(e)=>{
     e.preventDefault()
    if(person.name.trim().length===0, +person.age<=0){
        return
    }
    sendData(person)

   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={person.name} onChange={onHandleChange} />
            <input type="text" name='age' value={person.age} onChange={onHandleChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
