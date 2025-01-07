import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email,
    password,
  };
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    toast.info("Guest credentials: admin@alumninet.in, 123456");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === "admin@alumninet.in" && user.password === "123456") {
      toast.success("Logged in successfully");
      navigate("/referrals");
    }

    // TODO: Add signin logic here
  };

  return (
    <div className="max-w-md mx-auto p-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Sign In
      </h1>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Sign In
          </button>
          <p className="text-center text-sm text-gray-500">
            Don't have an account? {" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
