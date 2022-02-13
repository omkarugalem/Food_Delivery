import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResetPassword } from "../../redux/Action/Action";

const PasswordReset = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
  });
  let { email } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(ResetPassword(email));
      toast.success(`"password send successfully to your"${email}`);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="form-content">
      <div className="addForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password_reset">Enter your Email Id</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group btn-group">
            <button style={{ color: "white" }}>Send</button>
          </div>
        </form>
      </div>
    </div>

    
  );
};

export default PasswordReset;
