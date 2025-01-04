import { Link } from "react-router-dom";
import logo from "../assets/nsut-logo.webp";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-4 bg-[#181818] text-white">
        <img src={logo} alt="logo" />
        <div className="flex justify-between items-center gap-10">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/signin" className="hover:text-gray-400">Signin</Link>
          <Link to="/signup" className="hover:text-gray-400">Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
