import { Link, Route } from "react-router-dom";
import Input from "./components/forms/input";
import { useState } from "react";

export default function App() {
const [message,setMessage] = useState('')
const handleClick = () => {
    setMessage(message)
    alert("Message envoyé")
}
 
  return (
    <div>
        <Input value={message} onChange={e => setMessage(e.target.value)} />
        <button onClick={handleClick}>Send</button>
    </div>
  )
}
 