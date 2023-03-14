import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/register`, {
        firstName,
        lastName,
        phone,
        email,
        password,
      });
      console.log(data);
      setLoading(false);

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(
          "Registration Successful. Check your email and verify your profile"
        );
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(" Registration Faild. Try again.");
    }
  };

  return (
    <>
      {
        <>
          {loading === true ? <Loader /> : ""}
          <section className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <h5>Create Your Account</h5>
                    <div className="row">
                      <div className="col-md-12">
                        <label>First Name*</label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label>Last Name*</label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Your Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label>Email Address*</label>
                        <input
                          type="text"
                          name="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label>Phone Number*</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label>Password*</label>
                        <input
                          type="text"
                          name="password"
                          placeholder="Password should be more than 6 character"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label>Confirm Password*</label>
                        <input
                          type="text"
                          name="confirmPass"
                          placeholder="Confirm your password"
                          value={confirmPass}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="col-md-7">
                        <div>
                          <input type="checkbox" name="checkterm" id="t-box" />
                          <label htmlFor="t-box">
                            I have read the terms and condition.
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" name="checknews" id="c-box" />
                          <label htmlFor="c-box">
                            Subscribe htmlFor newsletter
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5 text-right">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    </>
  );
};

export default Register;
