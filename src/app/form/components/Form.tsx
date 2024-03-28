"use client";
import React from "react";
import { Date, Heading, Name, Number, Options, Text } from ".";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormElements } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { genderOptions } from "./optionsList";
import { FormValidation } from "./validation";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormElements>({ resolver: zodResolver(FormValidation) });

  const onSubmit: SubmitHandler<FormElements> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white m-5 rounded-md shadow-xl p-16 pt-12 dark:bg-gray-800 dark:text-white">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-medium text-green-500">
                {" "}
                Patient form
              </h1>
              <p className="text-md">
                Fill the details to register the patient
              </p>
            </div>
            <div className="text-right">
              <h1 className="font-medium text-xl text-green-500">
                Celeritaz Health Pvt Ltd
              </h1>
              <p> 12-45/2 Amigo Street, Darwin Colony</p>
            </div>
          </div>

          <hr className="my-3 border-gray-700 border-[1px]" />

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 p-4 justify-center">
            <Date
              label="Date"
              name="registration_date"
              register={register}
              errorMessage={errors.registration_date?.message}
            />
            <Number
              label="Registration ID"
              name="id"
              placeholder="Registration ID"
              register={register}
              errorMessage={errors.id?.message}
            />
            <Name label="Doctor Name" name="doctor_name" register={register} />
            <Text
              label="Department"
              name="department"
              placeholder="Department"
              register={register}
              errorMessage={errors?.department?.message}
            />
          </div>
          <Heading title="Personal Details" />
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 p-4 justify-center">
            <Name
              label="Patient Name"
              name="patient_name"
              register={register}
            />
            <Date label="Date of Birth" name="dob" register={register} />
            <Number
              label="Age"
              name="age"
              placeholder="Age"
              register={register}
              errorMessage={errors.age?.message}
            />
            <Options label="Gender" options={genderOptions} name="gender" />
            <Name label="Mother Name" name="mother_name" register={register} />
            <Name label="Father Name" name="father_name" register={register} />
          </div>
          <button className="p-4 mt-9 mx-[35rem] items-center bg-green-500 hover:bg-green-400 text-lg rounded-lg">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
