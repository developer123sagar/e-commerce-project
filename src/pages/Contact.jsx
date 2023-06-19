import React from 'react'
import { BsFillGeoAltFill, BsTelephone } from 'react-icons/bs';
import { HiOutlineEnvelope } from 'react-icons/hi2';


const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-5 p-10 font-roboto">
      <div className=" flex bg-gray-200 w-3/5 h-fit rounded-lg">
        <div className="basis-4/12 bg-primary-700 mix-blend-multiply p-3">
          <div className="text-white mt-5">
            <h1 className="text-3xl pb-2">Let's get in touch</h1>
            <p>We are open for any suggestion or to have a chat</p>
          </div>
          <div className="text-white text-lg p-4">
            <ul>
              <li className=" flex py-4">
                {" "}
                <span className="pr-2">
                  <BsFillGeoAltFill size="30" />
                </span>
                Address:Kausaltar,Bhaktapur
              </li>
              <li className="flex py-4">
                <span className="pr-2">
                  {" "}
                  <BsTelephone size="30" />{" "}
                </span>
                Phone: +977 156 4567 876
              </li>
              <li className="flex py-4">
                <span className="pr-2">
                  {" "}
                  <HiOutlineEnvelope size="30" />{" "}
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
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-200 rounded-md w-full  px-4 py-3"
                  />
                </div>
                <div className="grid">
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="text"
                    placeholder="Your email-address"
                    className="ring-1 ring-gray-200  rounded-md w-full px-4 py-3"
                  />
                </div>
              </div>
              <br />

              <label>SUBJECT</label>
              <input
                type="text"
                placeholder="Subject"
                className="ring-1 ring-gray-200 w-full rounded-md px-4 py-3"
              />
              <label>MESSAGE</label>
              <input
                type="text"
                placeholder="Message"
                className="ring-1 ring-gray-200 w-full rounded-md h-20 px-4 py-3"
              />
              <button className="w-20 h-10 bg-emerald-600 hover:bg-emerald-500 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
