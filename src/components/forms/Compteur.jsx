
import React, { useState } from 'react'
export default function Compteur(props) {
    const [compteur, setCompteur]  = useState(0)
    console.log(compteur)
    console.log(setCompteur)
    const increment = () => {
        //setCompteur(compteur + 1)
        setCompteur((c) => c+1)
    }
    const desincrement = () => {
        setCompteur(compteur - 1)
    }
    return (
    <div className='compteur'>
        <h3>Votre nom est: {props.nom} et Vous avez {props.age} ans</h3>
        <button onClick={increment} >+</button>
        <p>{compteur}</p>
        <button onClick={desincrement} >-</button>
    </div>
  )
}
