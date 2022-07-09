import React, { useState, useEffect } from "react";

const Touch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setLoader(true);

    // db.collection("contacts")
    //   .add({
    //     name: name,
    //     email: email,
    //     message: message,
    //   })
    //   .then(() => {
    //     setLoader(false);
    //     alert("Your message has been submitted👍");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });

    // setName("");
    // setEmail("");
    // setMessage("");
  };

  return (
    <div style={{padding:'4rem'}}>

    <form className="form" onSubmit={handleSubmit}>
      <div>
        <div className='touchContentOuter'>
          <p className='touchContent' style={{fontSize:'60px'}}>GET IN TOUCH</p>
        </div>
      </div>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " #40506A" }}
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default Touch;