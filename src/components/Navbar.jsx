import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header hidden md:flex md:flex-row flex-col">
      <NavLink
        to="/"
        className="rounded-lg bg-white items-center justify-center flex font-bold shadow-md px-3 py-2"
      >
        <p className="blue-gradient_text">PIXIEPAL ASSISTANT</p>
      </NavLink>
      {/* Navbar Links */}
      <nav className="flex text-lg gap-12 font-extrabold md:flex-row flex-col">
        <NavLink
          to="/conversation"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Conversation
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          About
        </NavLink>

        {/* Upcoming Page, if auth is implemented */}
        {/* <NavLink
          to="/userPref"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          User
        </NavLink> */}
      </nav>
    </header>
  )
}

export default Navbar