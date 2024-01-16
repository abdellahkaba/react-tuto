import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserPorfile() {
    const {username} = useParams()
  return (
    <>

        <div>Le profil d'utilisateur {username}</div>
    </>
  
    
  )
}
