import React from "react";
import { MdOutgoingMail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div>
      <div className=" p-1   sm:h-3/4 text-center m-auto  mb-26 text-black">
        <div className=" text-center p-3">
          <span className=" sm:text-center  text-3xl font-bold">
            Take A Coffe & Chat &nbsp;
            <b className=" text-blue-800 font-bold">With Me</b>
          </span>
          <br></br>
          <div>
            <div className=" flex items-center space-x-1  text-red-500 text-1.4xl justify-center p-1">
              <MdOutgoingMail />
              <p className="">sagarchaurasia176@gmail.com</p>
            </div>
          </div>
        </div>
        {/* form page apply here */}
        {/* md */}
        <div className="">
          <div className="">
            <input
              type="text"
              placeholder="Type here"
              className="input  text-white  w-full max-w-xs"
            />
            <br></br>
            <input
              type="text"
              // yo
              placeholder="Type here"
              className="input text-white  w-full max-w-xs"
            />
            <br></br>

            <textarea
              placeholder="Bio"
              className="textarea text-white textarea-bordered textarea-md w-full max-w-xs"
            ></textarea>
          </div>
        </div>

        <button className=" bg-slate-950 text-white p-2 rounded-md">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
