import React, { useState } from 'react'

export default function DisplayStudents({students, handleDelete, handleUpdate}) {
   
  return (
    <>
    {students.length !==0  &&<p>Hello Students</p>}
     {students.map((item)=>(
       <div>
         <p key={item.id}>{`Hello My Name is ${item.name} and my age is ${item.age}`}</p>
        <button onClick={()=> handleDelete(item.id)}>Delete Trainee</button>
        <button onClick={()=> handleUpdate(item.id)}>Update Trainee</button>
       </div>
    ))}
    {students.length===0  && <p>No Students Found</p>}
    </>
  )
}
