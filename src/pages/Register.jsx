import registerImg from "images/registerImg.jpeg";
import {FaGithub} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Register = (props) => {
  return (
    <>
      <div className="w-full h-screen flex absolute top-20 font-roboto">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] w-[900px] shadow-lg shadow-gray-600 sm:max-w-800px">
          <div className="p-4 flex flex-col justify-around">
            <form>
              <h2 className="text-4xl font-bold text-center mb-8">Eclectica</h2>
              <div>
                <input
                  className="border p-2 mr-2"
                  type="text"
                  placeholder="Yourname"
                  autoComplete="off"
                  name="name"
                  id="name"
                />
                <input
                  className="border p-2 mr-2"
                  type="email"
                  placeholder="Youremail@gmail.com"
                  autoComplete="off"
                  name="email"
                  id="email"
                />
                <br></br>
                <input
                  className="border p-2 mr-2 py-2 mt-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                />
                <input
                  className="border p-2 mr-2 py-2 mt-2"
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                  id="number"
                />
              </div>
              
              <button className="w-full py-2 my-2 bg-primary-700 mix-blend-multiply hover:bg-green-700 text-white" >
              Sign Up
              </button>
              <button className="w-full py-2 my-2 border-solid border-2 border-current">
              <div className="flex justify-center gap-2 items-center w-full"><FaGoogle/> Sign in with Google</div>
              </button>
              <button className="w-full py-2 my-2 border-solid border-2 border-current">
              <div className="flex justify-center gap-2 items-center w-full "><FaInstagram/>Sign in with Instagram</div>
              </button>
              <button className="w-full py-2 my-2 border-solid border-2 border-current">
              <div className="flex justify-center gap-2 items-center w-full "><FaGithub/>Sign in with Github</div>
              </button>
            </form>
            <button
              onClick={() => props.onFormSwitch("login")}
              className="text-center underline"
            >
              Already have account? Sign In
            </button>
            
          </div>
          <div className="w-full h-[500px] hidden md:block">
            <img className="w-full h-full" src={registerImg} alt="register img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
