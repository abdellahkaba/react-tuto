import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/forms/Home'
import About from './components/forms/About'
import UserPorfile from './components/forms/UserPorfile'

const route = createBrowserRouter ([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element:  <About />
  },
  {
    path: "/user/:username",
    element: <UserPorfile />
  },
  
  {
    path: "/redirect"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
)














/*
class App2 extends React.Component {
  render() {
    return <>
    <h1>Mon premier composant avec une classe !</h1>
  </>
  }
}*/