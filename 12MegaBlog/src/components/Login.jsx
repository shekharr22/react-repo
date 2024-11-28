import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login as authLogin } from "./index";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm} from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rouded-xl p-10 border border-black/10`}
      >
        <div className="flex justify-center mb-2">
          <span className="w-full iniline-block max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-tigh">
          {" "}
          Sign in to your account{" "}
        </h2>

        <p className="mt-2 text-base text-center text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium transition-all duration-200 text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-center text-red-500">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="m-8">
            <div className="space-y-5">
                <input 
                label = "Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true, 
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",                         
                    }
                    
                })}
                />
                <Input
                label ="Password:"
                type ="Password"
                placeholder = "Enter your Password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                className='w-full'>Sign in </Button>
                
            </div>
            
        </form>
      </div>
    </div>
  );
}

export default Login;
