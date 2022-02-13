import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleProvider, Login1, SocialLogin } from "../../redux/Action/Action";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import AuthReducer from "./../../redux/Reducer/AuthReducer";

const Login = () => {
  let dispatch = useDispatch();
  let [user, setUser] = useState("");
  let selector = useSelector(async state => await state.AuthReducer.login);
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: "false",
  });
  let { email, password, loading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  // useEffect(() => {
  //   setUser(selector);
  // }, []);

  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      dispatch(Login1(email, password));
      // toast.success(`successfully ${email} logged in`);
    } catch (error) {
      // toast.error(error.message);
    }
    // setState({ loading: false });
  };

  let handleClick = async provider => {
    try {
      dispatch(SocialLogin(provider));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.unsplash.com/photo-1532290462266-c6a468b6d076?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCUyM2JlZWZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          <Link
                            to="/add-to-products"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Login
                          </Link>
                        </button>
                      </div>

                      <div style={{ display: "flex" }}>
                        <div className="pt-1 mb-4 ">
                          <button
                            className="btn btn-dark btn-lg btn-block "
                            type="button"
                            onClick={() => {
                              handleClick(GoogleProvider);
                            }}
                          >
                            <i class="fab fa-google"></i>
                          </button>
                        </div>

                        <div className="pt-1 mb-4 ">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            id="btn-phone"
                            // onSubmit={handleSubmit}
                          >
                            <Link
                              to="/phone-auth"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            >
                              <i class="fas fa-mobile"></i>
                            </Link>
                          </button>
                        </div>
                      </div>

                      <a className="small text-muted" href="password-reset">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="signup" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

// https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp
// #9A616D
// <section id="authBlock">
//   <article style={{ marginTop: "100px" }}>
//     <div className="form-content">
//       <div className="loginform">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <button
//               className="googleButton"
//               onClick={() => {
//                 handleClick(GoogleProvider);
//               }}
//             >
//               Login With Google
//             </button>
//           </div>
//           <div className="form-group">
//             <label htmlFor="">Email address or username</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address or username "
//               id="email"
//               className="form-control"
//               onChange={handleChange}
//               value={email}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password"> Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               id="password"
//               className="form-control"
//               onChange={handleChange}
//               value={password}
//             />
//           </div>
//           <div className="form-group">
//             <Link to="/password-reset" id="forgotPassword">
//               Forgot your password?
//             </Link>
//           </div>
//           <div className="form-group">
//             <span>
//               <button className="loginbtn">
//                 {loading === true ? "loading..." : "Log In"}
//               </button>
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   </article>
// </section>
