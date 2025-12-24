import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <div className="mx-2 mt-10 flex justify-center">
      <p className="font-bold">
        Please contact me via Linkedin Messaging or email for inquiries.{" "}
      </p>
    </div>
    // <div className="flex flex-col justify-center mt-[5rem]">
    //   <div className="flex justify-center">
    //     <form
    //       className="flex flex-col justify-center grow"
    //       onSubmit={(e) => {
    //         e.preventDefault();
    //         try {
    //           if (
    //             email.length < 1 ||
    //             subject.length < 1 ||
    //             message.length < 1
    //           ) {
    //             setError(true);
    //             setSuccess(false);
    //             // api call to node.js mailer function here
    //             return;
    //           }
    //           setSuccess(true);
    //           setError(false);
    //           setEmail("");
    //           setSubject("");
    //           setMessage("");
    //         } catch (error) {
    //           setError(true);
    //           setSuccess(false);
    //         }
    //       }}
    //     >
    //       <h1 className="font-bold">Contact Me</h1>
    //       <input
    //         placeholder="Your email...."
    //         className="border-2 rounded-md px-1 py-0.5 mt-2"
    //         type="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //       ></input>
    //       <input
    //         className="border-2 rounded-md px-1 mt-2 py-0.5"
    //         placeholder="Subject..."
    //         type="text"
    //         onChange={(e) => setSubject(e.target.value)}
    //       ></input>
    //       <textarea
    //         type="text"
    //         placeholder="Your message...."
    //         className="border-2 rounded-md px-1 mt-2 py-0.5 h-[100px]"
    //         onChange={(e) => setMessage(e.target.value)}
    //       ></textarea>
    //       <button className="border-2 mt-2 bg-blue-500 border-blue-500 rounded-md text-white">
    //         Send Message
    //       </button>
    //       {success ? (
    //         <div className="text-sm flex">
    //           <FaCheckCircle className="text-green-500 text-4xl" />
    //           <p className="mt-2">
    //             Thank you for sending me a message. I will reach back out to you
    //             as soon as I am available. For a fast response, please DM me on
    //             LinkedIn.
    //           </p>
    //         </div>
    //       ) : null}
    //       {error ? (
    //         <div className="text-black text-sm flex mt-2">
    //           <CgDanger className="text-red-600 text-3xl" />
    //           <p className="mt-1">
    //             There was an error sending your message. Please make sure to
    //             fill out all input boxes.
    //           </p>
    //         </div>
    //       ) : null}
    //     </form>
    //   </div>

    //   <div
    //     className="flex flex-col justify-center mt-[2rem] text-sm"
    //     onClick={() => {
    //       window.scrollTo({ top: 0, behavior: "smooth" });
    //     }}
    //   >
    //     <div>
    //       <button className="mt-2 border-2 rounded-md px-3 border-blue-500 text-white bg-blue-500">
    //         Back to top
    //       </button>
    //     </div>

    //     <div className="flex justify-center">
    //       {" "}
    //       <FaArrowAltCircleUp className="mt-1 text-blue-500" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContactMe;
