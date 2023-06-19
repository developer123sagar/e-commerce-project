import { TextField } from "@mui/material";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillGeoAltFill, BsTelephone } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-16 p-10 font-roboto">
      <div className=" flex bg-gray-200 w-3/5 h-fit rounded-lg">
        <div className="basis-4/12 bg-primary-700 mix-blend-multiply p-3">
          <div className="text-white mt-5">
            <h1 className="text-3xl pb-2">Let's get in touch</h1>
            <p>We are open for any suggestion or to have a chat</p>
          </div>
          <div className="text-white p-4">
            <ul>
              <li className=" flex py-4">
                {" "}
                <span className="pr-2">
                  <BsFillGeoAltFill size="25" />
                </span>
                Address:Kausaltar,Bhaktapur
              </li>
              <li className="flex py-4">
                <span className="pr-2">
                  {" "}
                  <BsTelephone size="25" />{" "}
                </span>
                Phone: +977 156 4567 876
              </li>
              <li className="flex py-4">
                <span className="pr-2">
                  {" "}
                  <HiOutlineEnvelope size="25" />{" "}
                </span>
                Email: info@gmail.com
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="grid basis-4/6 p-8">
          <h1 className="text-left font-bold text-4xl ">Contact Us</h1>
          <br />
          <form>
            <div className="flex flex-wrap  space-y-3">
              <div className="flex grid-col space-x-5 rounded-lg">
                <div className="grid">
                  <TextField fullWidth label="Full Name" variant="outlined" />
                </div>
                <div className="grid">
                  <TextField fullWidth label="Email" variant="outlined" />
                </div>
              </div>
              <br />

              <TextField fullWidth label="Subject" variant="outlined" />
              <textarea placeholder="write your message here !"  className="w-full bg-slate-100 rounded h-40 p-2 focus:outline-none placeholder:text-gray-400" />
              <button className="bg-primary-700 px-6 py-2 flex items-center justify-center gap-2 rounded text-white hover:bg-green-600 transition-all">
              <AiOutlineSend />Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
