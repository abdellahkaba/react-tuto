import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

import PageError from './components/PageError'
import App2 from './App2'
import App3 from './App3'

const route = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <PageError />
  },
  {
    path: "/app2",
    element: <App2 />,
  },
  {
    path: "/app3",
    element: <App3 />,
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
)


