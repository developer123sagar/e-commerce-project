import { TextField } from "@mui/material";
import axios from "axios";
import registerImg from "images/registerImg.jpeg";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  // usestate
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  //navigating to login page
  const navigate = useNavigate()

  //user created toast message
  const userCreaToast = (msg) => {
    toast.success(msg, {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // if user not created, failed message
  const userCrearFToast = (msg) => {
    toast.error(msg, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ecommerce.digitalwebninja.com/api/sign_up",
        userForm
      );
      const {message} = response.data;
      userCreaToast(message);
      setUserForm({ name: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      const message = error.message;
      userCrearFToast(message)
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex mt-[2rem] font-roboto">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] w-[900px] shadow-lg shadow-gray-600 sm:max-w-800px">
          <div className="p-4 flex flex-col justify-around">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl text-black font-bold mb-4">Sign Up !!</h2>
              <div className="flex flex-col gap-4">
                <TextField
                  fullWidth
                  required
                  label="name"
                  variant="outlined"
                  value={userForm.name}
                  onChange={(e) =>
                    setUserForm({ ...userForm, name: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  variant="outlined"
                  value={userForm.email}
                  onChange={(e) =>
                    setUserForm({ ...userForm, email: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  required
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={userForm.password}
                  onChange={(e) =>
                    setUserForm({ ...userForm, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 my-2 bg-primary-700 transition-all hover:bg-green-700 text-white rounded"
              >
                Sign Up
              </button>
              <button className="w-full py-2 my-2 flex items-center gap-2 bg-blue-400 rounded justify-center">
                <FaGoogle />
                Sign up with Google
              </button>
            </form>
            <Link to={"/login"} className="mx-auto">
              <button className="hover:text-primary-700 transition-all">
                Already have account? Sign In
              </button>
            </Link>
          </div>
          <div className="w-full h-[500px] hidden md:block">
            <img
              className="w-full h-full"
              src={registerImg}
              alt="register img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
