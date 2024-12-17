import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">PIXIEPAL ASSISTANT</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {/* <NavLink to="/chat" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
          Chat
        </NavLink> */}
        <NavLink to="/conversation" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black-500'}>
          Conversation
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