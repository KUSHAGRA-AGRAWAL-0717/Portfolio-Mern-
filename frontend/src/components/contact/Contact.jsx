import Navbar from "../navbar/Navbar";
import "./contact.scss";
import toast from "react-hot-toast";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [sender, setSender] = useState({
    fullname: "",
    email: "",
    phone: "",
    desc: ""
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", sender, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/home");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setSender({
      fullname: "",
      email: "",
      phone: "",
      desc: ""
    });
  };

  return (
    <div>
      <Navbar />
      <div className="contact">
        <h1>Contact</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="list">
            <div className="item">
              <h3>Full Name</h3>
              <input
                value={sender.fullname}
                onChange={(e) => setSender({ ...sender, fullname: e.target.value })}
                placeholder="Kabi...."
                type="text"
              />
            </div>
            <div className="item">
              <h3>Phone</h3>
              <input
                value={sender.phone}
                onChange={(e) => setSender({ ...sender, phone: e.target.value })}
                placeholder="xxxxxxxx"
                type="text"
              />
            </div>
            <div className="item">
              <h3>Email</h3>
              <input
                value={sender.email}
                onChange={(e) => setSender({ ...sender, email: e.target.value })}
                type="text"
                placeholder="hritik@gmail.com"
              />
            </div>
            <div className="item">
              <input
                style={{ height: "200px" }}
                type="text"
                value={sender.desc}
                onChange={(e) => setSender({ ...sender, desc: e.target.value })}
              />
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;