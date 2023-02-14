import React from 'react'
import { useParams } from 'react-router-dom'



export default function Perfil() {

const {id} = useParams()
console.log(id)
  return (
    <div>Perfil {id}</div>
  )
}
