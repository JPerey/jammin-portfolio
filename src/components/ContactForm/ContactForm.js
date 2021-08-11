import { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./ContactForm.css";
export default function ContactForm() {
   const [messageSent, setMessageSent] = useState(false);
   const [isFilled, setisFilled] = useState({
      name: false,
      email: false,
      message: false,
   });
   function sendEmail(e) {
      e.preventDefault();
      emailjs
         .sendForm(
            "service_aqv1gvo",
            "template_rrs2cvi",
            e.target,
            "user_A3Okdabq8sdRkkhqGY04V"
         )
         .then(
            result => {
               console.log(result.text);
               setMessageSent(true);
               setTimeout(() => {
                  setMessageSent(false);
                  setisFilled({
                     name: false,
                     email: false,
                     message: false,
                  });
               }, 3000);
            },
            error => {
               console.log(error.text);
            }
         );
      e.target.reset();
   }
   function filled() {
       console.log("hello")
   }
   return (
      <div className="contact">
         {messageSent ? (
            <div className="alert animated fadeInUp">
               Your message has been sent
            </div>
         ) : (
            ""
         )}
         <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="name">
               Name
               <span className={isFilled.name === true ? "filled" : "required" }>
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <input
               type="text"
               name="user_name"
               id="name"
               autoFocus
               onChange={filled}
               required
            />
            <label htmlFor="email">
               Email
               <span
                  className={isFilled.email === true ? "filled" : "required"}
               >
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <input
               type="text"
               name="user_email"
               id="email"
               autoFocus
               onChange={filled}
               required
            />
            <label htmlFor="message">
               Message
               <span
                  className={isFilled.message === true ? "filled" : "required"}
               >
                  <FontAwesomeIcon icon={faCircle} />
               </span>
            </label>
            <textarea name="message" id="message" onChange={filled} required />
            <input type="submit" value="Submit" />
         </form>
      </div>
   );
}