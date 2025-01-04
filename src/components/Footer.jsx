import logo from "../assets/nsut-logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-brick pt-4">
      <div className="bg-[#181818] text-white p-10 bottom-0 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h1>
              <Link to="mailto:admin@alumninet.in">admin@alumninet.in</Link>
            </h1>
          </div>
          <div className="flex items-center">
            <div className="hover:text-gray-400">
              <Link to="https://www.instagram.com/nalum.nsut/">Instagram</Link>
            </div>
            <div className="hover:text-gray-400 rounded-full p-3">
              <Link to="https://www.linkedin.com/company/nsut-alumni-network/">
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
