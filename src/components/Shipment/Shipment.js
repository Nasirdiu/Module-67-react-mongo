import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const nagative = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setAddress(event.target.value);
  };
  const handleConfiramPassword = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };

  return (
    <div className="from-container">
      <div>
        <h1 className="from-title">Shipping Information</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleName} type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handlePassword}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="Phone">Phone Number</label>
            <input
              onBlur={handleConfiramPassword}
              type="text"
              name="Phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <input
            className="from-submit"
            type="submit"
            value="Add Shipping"
            required
          />
        </form>
        <p>
          AllReady Have and account?
          <Link className="from-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Shipment;
