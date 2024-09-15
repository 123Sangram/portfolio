// import React from "react";
// import "./style.css";

// import InstagramIcon from "@mui/icons-material/Instagram";
// import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
// import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// function Contact() {
//   return (
//     <div id="contact " className='mt-40'>
//       <div className="container">
//         <div className="row">
//           <div className="contact-left">
//             <h1 className="sub-title">Contact Me</h1>
//             <p>
//               <LocalPostOfficeIcon />
//               sangramamvan@gmail.com
//             </p>
//             <p>
//               <PhoneCallbackIcon />
//               6386054411
//             </p>
//             <div className="social-icons">
//               <a href="#">
//                 <InstagramIcon />
//               </a>
//               <a href="#">
//                 <FacebookIcon />
//               </a>
//               <a href="#">
//                 <TwitterIcon />
//               </a>
//               <a href="#">
//                 <LinkedInIcon />
//               </a>
//             </div>
//             <a href="src/assets/portfolioImage/SangramSingh_InternshalaResume (2).pdf" download className="btn btn2">
//               Download Resume
//             </a>
//           </div>
//           <div className="contact-right">
//             <form>
//               <input type="text" name="Name" placeholder="Your Name" required />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//               />
//               <textarea
//                 name="Message"
//                 rows="6"
//                 placeholder="Your Message"
//               ></textarea>
//               <button type="submit" className="btn btn2">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./style.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0s2kuc", // Replace with your EmailJS service ID
        "template_juc0ain", // Replace with your EmailJS template ID
        form.current,
        "WL02mS5GrWPD4u-1e" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div id="contact" className="mt-40">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <LocalPostOfficeIcon />
              sangramamvan@gmail.com
            </p>
            <p>
              <PhoneCallbackIcon />
              6386054411
            </p>
            <div className="social-icons">
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
            <a
              href="src/assets/portfolioImage/SangramSingh_InternshalaResume (2).pdf"
              download
              className="btn btn2"
            >
              Download Resume
            </a>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
