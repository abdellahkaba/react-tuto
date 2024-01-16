import { Link, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link  to="/home">Home</Link>
            </li>
            <li>
            <Link  to="/about">A propos</Link>
            </li>
            <li>
              <Link  to="/user/:Kaba">Mon profil</Link>
            </li>
           
            <li>
              <Link  to="/">Redirction</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
 