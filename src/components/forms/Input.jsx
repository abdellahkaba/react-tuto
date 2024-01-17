import React from 'react'

export default function Input({value,onChange}) {
  return (
    <div>
        <input type="text" className="form-control" 
        value={value} 
        onChange={onChange} />
    </div>
  )
}
