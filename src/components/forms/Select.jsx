import React from 'react'

export default function Select(value,onChange) {
  return (
    <div>
        <select
            value={value}
            onChange={onChange}
        >
        <option value="general">General</option>
        <option value="travel">Voyage</option>
        <option value="music">Musique</option>

        </select>
    </div>
  )
}
