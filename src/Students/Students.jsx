import React, { useEffect,useState } from 'react'
import AddStudent from '../AddStudent/AddStudent'
import DisplayStudents from '../DisplayStudents/DisplayStudents'
import axios from 'axios'
export default function Students() {
 const [students, setStudents]=useState([])
    useEffect(()=>{
        getTrainees()
    }, [])
    const handleAdd=async (person)=>{
        await axios.post('https://trainees-bfaee-default-rtdb.firebaseio.com/trainees.json', person)
        .then(
            data=>console.log(data)
          
        ).catch(error=>console.log(error))
          getTrainees()
    }
    const getTrainees =async()=>{
        try {
        await axios.get('https://trainees-bfaee-default-rtdb.firebaseio.com/trainees.json').then(
            data=>{
                let ourdata=[]
                for(let key in data.data){
                    ourdata.push({
                        id:key,
                        name:data.data[key].name,
                        age:data.data[key].age
                    })
                }
                setStudents(ourdata)
            }
        )
     
    }catch(error){

    }
}
const deleteStudent= async  (id)=>{
 await fetch(`https://trainees-bfaee-default-rtdb.firebaseio.com/trainees/${id}.json`,{
    method:'DELETE'
 })
 getTrainees()
}

const updateStudent= async  (id)=>{
    const updatedTrainee={name:'Updated Trainee', age:21}
 await axios.put(`https://trainees-bfaee-default-rtdb.firebaseio.com/trainees/${id}.json`,updatedTrainee)
 getTrainees()
}
  return (
        <>
        <AddStudent  sendData={handleAdd}/>
        <DisplayStudents students={students} handleDelete={deleteStudent} handleUpdate={updateStudent}/>
        </>
  )
}
