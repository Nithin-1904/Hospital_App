import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Date, DropBox, Heading, Name, Options, Text } from ".";
import { FormProps } from "./type";

const Form = () => {
  {
    /* Gender Options */
  }
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  {
    /* Marriage Options */
  }
  const martialOptions = [
    { value: "Single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widowed", label: "Widowed" },
    { value: "Seperated", label: "Seperated" },
    { value: "others", label: "Others" },
  ];

  {
    /* Employment Options */
  }
  const employOptions = [
    { value: "Employed", label: "Employed" },
    { value: "Unemployed", label: "Unemployed" },
    { value: "Retired", label: "Retired" },
    { value: "Others", label: "Others" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(FormValidation) });

  const onSubmit:SubmitHandler<FormProps> = (data)=>console.log(data)

  return (
    <>
      <div className="h-full w-full bg-green-100">
        <div className="flex-col bg-white shadow-slate-300 shadow-lg rounded-lg">
          {/* Title Container */}
          <div className="m-9 flex-col gap-1">
            <h1 className="text-[3.5rem]  font-semibold">
              Hospital Application Form
            </h1>
            <p className="text-2xl text-gray-500 font-semibold">
              123 Street, Park Avenue, Denver-007
            </p>
          </div>

          <hr className="bg-gray-200 h-px ml-9 mr-9" />
          {/* <div className="grid grid-cols-2 gap-10 items-center m-14 p-1"> */}

          {/* Form Container */}
          <div className="m-14 mt-9 p-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-10 items-center mx-11">
                <Name
                  label="Doctor Name"
                  name="doctor_name"
                  register={register}
                  error={errors.doctor_name}
                />
                <Text
                  label="Department"
                  type="text"
                  register={register}
                  name="department"
                  error={errors.department}
                />
              </div>

              <Heading title="Patient Information" />

              <div className="mx-11">
                <div className="grid grid-cols-2 gap-10 items-center mb-[3.5rem]">
                  <Name
                    label="Patient Name"
                    name="patient_name"
                    register={register}
                    error={errors.patient_name}
                  />
                  <Date label="Date of Birth" />
                </div>

                <div className="grid grid-cols-2 gap-10 items-center mb-[3.5rem]">
                  <Options label="Gender" options={genderOptions} />
                  <Text
                    label="Age"
                    type="number"
                    name="age"
                    error={errors.age}
                    register={register}
                  />
                </div>

                <Name
                  label="Parent/Guardian Name"
                  name="parent_guardian"
                  register={register}
                  design="mb-[3.5rem] gap-11"
                  error={errors.parent_guardian}
                />

                <div className="grid grid-cols-2 gap-10 items-center">
                  {/* Contact Number */}
                  <div className="flex-col mb-[1rem]">
                    <div className="mb-2">
                      <label className="text-xl font-semibold">
                        Phone Number
                      </label>
                    </div>
                    <input
                      type="tel"
                      className="p-3 rounded-md border-slate-300 border-2 w-full"
                      placeholder="000 000 0000"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex-col mb-[1rem]">
                    <div className="mb-2">
                      <label className="text-xl font-semibold">E-mail</label>
                    </div>
                    <input
                      type="email"
                      className="p-3 rounded-md border-slate-300 border-2 w-full"
                      placeholder="example123@abc.com"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>

                  <Options label="Martial Status" options={martialOptions} />
                  <Options label="Employment Status" options={employOptions} />
                </div>
                <Text
                  type="text"
                  label="Address"
                  name="address_1"
                  error={errors.address_1}
                  design="mt-[2.5rem]"
                  hint="Address Line 1"
                  register={register}
                />
                <Text
                  name="address_2"
                  error={errors.address_2}
                  type="text"
                  design="mt-5"
                  register={register}
                  hint="Address Line 2"
                />
                <div className="mt-5 grid grid-cols-2 gap-y-5 gap-x-10">
                  <DropBox />
                  <DropBox />
                  <DropBox />
                  <Text name="pincode" error={errors.pincode} type="number" register={register} hint="Pin Code" />
                </div>

                <input
                  type="submit"
                  className="bg-blue-600 px-10 py-3 ml-[43%] mt-10 rounded-md "
                />
              </div>
            </form>
            <hr className="bg-gray-200 h-px ml-9 mr-9 mt-9" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
