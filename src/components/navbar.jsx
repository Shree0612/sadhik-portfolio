import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-indigo-600">My Portfolio </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link}>
<Link
  to={link.toLowerCase()}
  smooth={true}
  duration={500}
  offset={-80} // to prevent overlap with fixed navbar
  className="cursor-pointer hover:text-indigo-500 transition"
>
  {link}
</Link>            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white text-center space-y-6 py-4 shadow-md">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
