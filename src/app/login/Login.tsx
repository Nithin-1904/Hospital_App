"use client";

import React from "react";
import Input from "./FormField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProps, LoginValidation } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const credentials = {
  email: 'abc@gmail.com',
  password: "abc12345"
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(LoginValidation) });

  const onSubmit: SubmitHandler<FormProps> = (data) => data===credentials? router.push("/src/app/dashboard"):console.log(data);

  return (
    <div className=" w-full h-screen bg-green-50 flex justify-center items-center">
      <div className="bg-white p-5 flex-cols justify-center items-center md:w-[50%] md:h-[50%] lg:h-[60%] lg:w-[25%] sm:w-[70%] sm:h-[70%] rounded-lg shadow-xl">
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
              className="bg-green-400 p-3 w-[50%] rounded-md ml-[24%] font-medium text-md text-gray-800 "
            >
              Log in
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
