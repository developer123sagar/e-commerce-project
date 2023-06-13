import loginImg from "images/loginImg.jpg";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] shadow-loginImg shadow-gray-600 sm:max-w-900px">
          <div className="w-full h-[500px] hidden md:block">
            <img
              className="w-full h-full object-cover"
              src={loginImg}
              alt="loading"
            />
          </div>
          <div className="p-4 flex flex-col justify-around">
            <form>
              <h2 className="text-4xl font-bold text-center mb-8">Eclectica</h2>
              <div>
                <input
                  className="border p-2 mr-2"
                  type="email"
                  placeholder="Youremail@gmail.com"
                  autoComplete="off"
                  name="email"
                  id="email"
                />
                <input
                  className="border p-2 mr-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                />
              </div>
              <button className="w-full py-2 my-2 bg-primary-700 hover:bg-green-500">
                Sign In
              </button>
              <p className="text-center">Forget password or username?</p>
            </form>
            <Link to="/register">
              <button className="text-center underline">
                Dont have an account? Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
