"use client";

import React from "react";
import Input from "./InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginProps, LoginValidation } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const credentials = {
  email: "abc@gmail.com",
  password: "abc12345",
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ resolver: zodResolver(LoginValidation) });

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    // Check if input credentials match predefined credentials
    data.email === credentials.email && data.password === credentials.password
      ? router.push("/dashboard")
      : alert("Invalid credentials");
  };
  return (
    <div className=" w-full h-screen bg-green-50 flex justify-center items-center">
      <div className="bg-white p-5 flex-cols justify-center items-center h-[60%] w-[25%] rounded-lg shadow-xl">
        <h1 className="text-center font-semibold text-3xl uppercase mb-10">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="grid col-auto items-center"> */}
          <div className="mb-5">
            <Input
              design="p-3 border-2 border-green-400 rounded-md w-full"
              name="email"
              type="text"
              placeholder="E-mail"
              register={register}
              error={errors.email}
            />
          </div>
          <div className=" box-content mb-5">
            <Input
              design="p-3 border-2 border-green-400 rounded-md w-full"
              name="password"
              type="password"
              placeholder="Password"
              register={register}
              error={errors.password}
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 p-3 w-[50%] rounded-md ml-[24%] font-medium text-md text-gray-800 "
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
