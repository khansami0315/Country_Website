import { NavLink } from "react-router-dom"

export const    ErrorPage   =  () => {




    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1>404 - Page Not Founds</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <NavLink to="/">Go Home</NavLink>
        </div>
      )
}