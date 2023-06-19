import { TextField } from "@mui/material";
import axios from "axios";
import loginImg from "images/loginImg.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setLoginStatus, setUserEmail } from "Redux/Auth/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();

  // usestate for loginform
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //usestate for loader spinner
  const [loading, setLoading] = useState(false);

  //navigating to login page
  const navigate = useNavigate();

  //logged in successfully toast message
  const userCreaToast = () => {
    toast.success("Logged in successfully !!", {
      position: "top-left",
      autoClose: 1000,
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

  // handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://ecommerce.digitalwebninja.com/api/login",
        loginForm
      );
      userCreaToast();
      setLoginForm({ email: "", password: "" });
      setLoading(false);

      // Setting login status, showaccountmenu and email in redux
      dispatch(setLoginStatus(true));
      dispatch(setUserEmail(loginForm.email));

      // Storing login status and user email in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", loginForm.email);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      const message = error.message;
      userCrearFToast(message);
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex mt-8 font-roboto">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] shadow-lg shadow-gray-600 sm:max-w-900px">
          <div className="w-full h-[500px] hidden md:block">
            <img
              className="w-full h-full object-cover"
              src={loginImg}
              alt="loading"
            />
          </div>
          <div className="p-4 flex flex-col gap-5">
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold mb-6 text-black">
                Login in to your account !
              </h2>
              <div className="flex flex-col gap-4 items-center">
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                />
                <TextField
                  type="Password"
                  fullWidth
                  required
                  label="Password"
                  variant="outlined"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 my-2 bg-primary-700 mix-blend-multiply hover:bg-green-700 text-white mt-6 rounded transition-all"
              >
                {loading ? (
                  <p className="w-fit mx-auto">
                    <RotatingLines strokeColor="yellow" width="30" />
                  </p>
                ) : (
                  <>Log In</>
                )}
              </button>
              <p className="text-center">Forgot password or name?</p>
            </form>
            <div className="text-center underline hover:text-primary-700 transition-all">
              <Link to={"/register"}>Don't have an account? Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
