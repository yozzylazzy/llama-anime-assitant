import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">YA</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/chat" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
          Chat
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
          About
        </NavLink>
        <NavLink to="/userPref" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
          User
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar