import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header collapse md:visible">
      <NavLink to="/" className="rounded-lg bg-white items-center justify-center flex font-bold shadow-md px-3 py-2">
        <p className="blue-gradient_text">PIXIEPAL ASSISTANT</p>
      </NavLink>
      <nav className="flex text-lg gap-12 font-extrabold">
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
        <NavLink
          to="/userPref"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          User
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar