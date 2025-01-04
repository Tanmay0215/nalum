import image from "../assets/image.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-montserrat">
      <div className="bg-brick font-medium text-white text-md flex justify-center items-center gap-10 sticky -top-1 z-50 shadow-2xl p-4">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/signin">Signin</Link>
        </div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
      <div className="bg-cover h-screen bg-admin flex items-center justify-center">
        <div className="text-white text-7xl font-bold">WELCOME TO NALUM</div>
      </div>
      <div className="flex items-center justify-center p-10 gap-10">
        <div>
          <img src={image} alt="logo" className="scale-125" />
        </div>
        <div className="text-md p-10 space-y-4 max-w-lg leading-tight">
          <div className="text-3xl font-bold mb-10">
            Welcome, alumni, students, and friends of NSUT!
          </div>
          <div>
            Whether you're here to reconnect, expand your professional network,
            support NSUT's growth, or explore the impact of giving back, you're
            in the right place. Our portal offers you a seamless way to engage
            with the vibrant NSUT community, get involved with alumni
            activities, and discover opportunities to contribute.
          </div>
          <div>
            For those looking to give back, we'll guide you on how to make a
            difference, where your support matters most, and the legacy it
            leaves behind. If you're here to reconnect, explore our network,
            career services, and upcoming alumni events. Discover the NSUT that
            inspires you.
          </div>
          <div>
            Alumni, students, and friends like you fuel NSUT's journey toward
            greater heights. Join us and stay proud to be part of the NSUT
            family.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
