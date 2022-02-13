import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserPhoneAuth } from "../../redux/Action/Action";

const PhoneAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [state, setState] = useState({
    phone: "",
  });
  let { phone } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(UserPhoneAuth(phone));
      toast.success("successfully send otp to your Mobile Number");
      // navigate("/");
      window.location.assign("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div style={{ backgroundColor: "rgb(4,5,57)" }}>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="card py-4 px-4">
            <div className="text-center">
              <img src="https://i.imgur.com/u5cP8rr.png" width={60} />
            </div>
            <div className="text-center mt-3">
              <span className="info-text">
                Please enter your mobile number to signup or login
              </span>
            </div>
            <div className="position-relative mt-3 form-input">
              <input
                type="text"
                className="form-control"
                placeholder="enter your mobile number"
                name="phone"
                value={phone}
                onChange={handleChange}
                required
              />
              <i className="bx bxs-phone" />
            </div>
            <div id="recaptcha-container"></div>
            <div className=" mt-5 d-flex justify-content-between align-items-center">
              {/* <span>Login or Signup</span> */}
              <button className="go-button" onSubmit={handleSubmit}>
                <i class="fas fa-arrow-to-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhoneAuth;
