import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    <header>
        <Link to="/">HOME</Link><br/>
        <Link to="/contato">CONTATO</Link><br/>
        <Link to="/sobre">SOBRE</Link><br/>
        <Link to="/perfil/1">PERFIL</Link><br/>
    </header>
  )
}
