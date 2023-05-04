import { FormEvent, useState } from "react"
import React from "react"
import { HelloProps } from "../types/formDataTypes"

export const Form = () => {
  
  const [formData, setFormData] = useState<HelloProps>({firstName: " ", lastName: " ", age: 0})
  
  // const formData = {
  //   firstName: firstName, 
  //   lastName: lastName, 
  //   age: age
  // }

  const hanldeFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()



  }


  return (
    <>
      <form action="submit">
        <input 
        type="text" 
        placeholder="first name" 
        onChange = {e => setFormData({...formData, firstName: e.target.value})}
        />
        <input 
        type="text" 
        placeholder="last name" 
        onChange = {e => setFormData({...formData, lastName: e.target.value})}
        />
        <input 
        type="number" 
        placeholder="age - option" 
        onChange = {e => setFormData({...formData, age: Number(e.target.value) })}
        />
        <button type="submit" onClick={(e) => hanldeFormSubmit(e)}>
          Send Form
        </button>
      </form>
    </>

  )
}