import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
const Touch = () => {
  const form = useRef();
  const loader =false;
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wcwx9yn', 'template_hb5ncz8', form.current, 'UsVCjKyYxXzl90kEZ')
      .then((result) => {
          console.log(result.text);
          window.alert('Mail Sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    // <div style={{padding:'4rem'}}>
    // <form className="form" ref={form} onSubmit={sendEmail}>
    //   <div>
    //     <div className='touchContentOuter'>
    //       <p className='touchContent' style={{fontSize:'60px'}}>GET IN TOUCH</p>
    //     </div>
    //   </div>
    //   <label>Name</label>
    //   <input
    //     type='text'
    //     value='name'
     
    //   />

    //   <label>Email</label>
    //   <input
    //     type='email'
    //     value='email'
        
    //   />
    //   <label>Subject</label>
    //   <input
    //    type='subject'
    //     value='subject'
       
    //   />

    //   <label>Message</label>
    //   <textarea
    //     type='message'
    //     value='message'
      
    //   ></textarea>
    
    //   <button
    //     type="submit"
    //     style={{ background: loader ? "#ccc" : " #40506A" }}
    //   >
    //     Submit
    //   </button>
    // </form>
    // </div>
    

    <div style={{padding:'4rem'}}>

    <form className="form" ref={form} onSubmit={sendEmail}>
    <div>
        <div className='touchContentOuter'>
           <p className='touchContent' style={{fontSize:'60px'}}>GET IN TOUCH</p>
         </div>
       </div>

      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Subject</label>
      <input type="subject" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" style={{background:'#40506A'}} />
    </form>
    </div>
  );
};

export default Touch;