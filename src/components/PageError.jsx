import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function PageError() {
    const error = useRouteError()
  return (
    <div>
        <h2>Error page</h2>
        <p>
            <i>
                {error.statusText || error.message}
            </i>
        </p>
    </div>
  )
}
