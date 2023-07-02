import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/layout/Layout";
import { axiosPost } from "../../utils/Helper";
import "./Login.css";

export default function Login() {
  const { setUser } = useContext(UserContext);
const nevigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    axiosPost("/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.encodedToken);
        setUser(res.data.foundUser);
        nevigate("/home")
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3 heigth">
            <label>Email address</label>
            <input
              type="text"
              className={`form-control mt-1 ${
                errors.username ? "border border-danger" : ""
              }`}
              placeholder="Enter username"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-danger">Please enter number for username.</p>
            )}
          </div>
          <div className="form-group mt-3 heigth">
            <label>Password</label>
            <input
              type="password"
              className={`form-control mt-1 ${
                errors.password ? "border border-danger" : ""
              }`}
              placeholder="Enter password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <p className="text-danger">Please enter number for password.</p>
            )}
          </div>
          <div className="d-grid gap-2 mt-3 ">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
