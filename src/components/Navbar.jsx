import { NavLink } from "react-router-dom";
import { FaHome, FaComments, FaInfoCircle } from "react-icons/fa"; // Importing the icons

const Navbar = () => {

  return (
    <header className="header md:flex md:flex-row flex-col relative">
      {/* PIXIEPAL ASSISTANT (Home Icon) */}
      <NavLink
        to="/"
        className="rounded-lg bg-white items-center justify-center md:flex hidden font-bold shadow-md px-3 py-2"
      >
        <p className="blue-gradient_text">PIXIEPAL ASSISTANT</p>
      </NavLink>

      {/* Navbar Links (Desktop - md and up) */}
      <nav className="md:flex hidden text-lg gap-12 font-extrabold md:flex-row flex-col">
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
      </nav>

      {/* Mobile Navbar (only icons below md) */}
      <div className="md:hidden flex justify-center items-center w-full mt-5"
      >
        <div
          className="flex justify-between items-center w-full"
          style={{
            position: 'fixed',
            background: 'linear-gradient(135deg, #B9E5E8 -20%, #7AB2D3 120%)',
            borderRadius: '12px',
            boxShadow: '0 4px 8px #4a628a',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            width: '160px',
            height: '50px',
            opacity: '50%',
            transition: 'transform 0.2s ease-in-out',
          }}>
          {/* Conversation and About Icons */}
          <div className="flex gap-4 p-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#2a4064] text-3xl opacity-100' : 'text-[#4A628A] text-3xl'
              }
            >
              <FaHome className="text-3xl" />
            </NavLink >
            <NavLink
              to="/conversation"
              className={({ isActive }) =>
                isActive ? 'text-[#4A628A] text-3xl opacity-100' : 'text-[#4A628A] text-3xl'
              }
            >
              <FaComments />
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-[#2a4064] text-3xl opacity-100' : 'text-[#4A628A] text-3xl'
              }
            >
              <FaInfoCircle />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
