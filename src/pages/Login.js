import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("muhammadparvej98@gmail.com");
  const [password, setPassword] = useState("Parvej@55");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/login`, { email, password });
      // console.log(data);
      setLoading(false);

      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, user: data.user, token: data.token });

        data?.user?.role === "customer"
          ? (window.location.href = "/user")
          : (window.location.href = "/dashboard");

        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Invalid User Email and Password");
      navigate(`/login`);
    }
  };
  return (
    <>
      {/* {loading === true ? <Loader /> : ""} */}
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="n-customer">
                <h5>New Customer</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem est eum earum eius dolores, alias modi aut officia
                  quo perferendis id aspernatur neque provident quas, quidem
                  libero veritatis voluptatum illum!
                </p>
                <Link to="/register">Create an Account</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="r-customer">
                <h5>Registered Customer</h5>
                <p>If you have an account with us, please log in.</p>
                <form onSubmit={handleSubmit}>
                  <div className="emal">
                    <label>Email address</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="pass">
                    <label>Password</label>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="d-flex justify-content-between nam-btm">
                    <div>
                      <input type="checkbox" id="rmme" />
                      <label htmlFor="rmme">Remember Me</label>
                    </div>
                    <div>
                      <Link to="/forgot-password">Lost your password?</Link>
                    </div>
                  </div>
                  <button type="submit" name="button">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
