import React, { useEffect, useState } from 'react'
import { createConnection, sendMessage } from './components/forms/chat'
import Input from './components/forms/input'

const url = "localhost:8080/Connexion.jsp"


export default function App2({roomId}) {

    const [message,setMessage] = useState('')
    useEffect(() => {
        const connection = createConnection(url,roomId)
        connection.connect()
        return () => connection.disconnect()
    },[roomId])

    function handleSendClick() {
        sendMessage(message)
    }

  return (
    <div>
        <h1>Bienvenu dans la salle: {roomId}</h1>
        <Input value={message} onChange={e => setMessage(e.target.value)}/>
        <button onClick={handleSendClick}>Send</button>
    </div>
  )
}
