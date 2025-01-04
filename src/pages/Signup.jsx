import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const user = {
    email,
    password,
  };
  console.log(user)

  // TODO: Add signup logic
  // const signup = async () => {
  //   const response = await fetch("http://localhost:3000/signup", {
  //     method: "POST",
  //     body: JSON.stringify(user),
  //   });
  // };

  useEffect(() => {
    toast.info("Guest credentials: admin@alumninet.in, 123456");
  }, []);

  // encrypt password using bcrypt if required

  // const encryptPassword = (password) => {
  //   return bcrypt.hashSync(password, 10);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "admin@alumninet.in" && password === "123456") {
      toast.success("Guest Signup successful");
      navigate("/");
    }
    // frontend validation
    if (!email.includes("@nsut.ac.in")) {
      toast.error("Please enter a valid NSUT email");
      // return;
    }
    toast.success(`${user.email.split("@")[0]} signed up successfully`);
    // backend validation
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitHandler}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                id="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                required
                className="appearance rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Sign up
            </button>
            {/* <button onClick={() => {navigate("/signin")}}>
              Back to Signin
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
