import React from "react";
import { Heading, Name, Text } from ".";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormElements } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
// import { FormValidation } from "../validation";

const Form = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormElements>({ resolver: zodResolver(FormValidation)});

  // const onSubmit: SubmitHandler<FormElements> = (data) => console.log(data);

  return (
    <>
      <form>
        <div className="bg-white m-5 rounded-md shadow-xl p-16 pt-12">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-medium"> Patient form</h1>
              <p className="text-md">
                Fill the details to register the patient
              </p>
            </div>
            <div className="text-right">
              <h1 className="font-medium">Celeritaz Health Pvt Ltd</h1>
              <p> 12-45/2 Amigo Street, Darwin Colony</p>
            </div>
          </div>

          <hr className="my-3 border-gray-700 border-[1px]" />

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 p-4 justify-center">
            <Name label="Doctor Name" name="doctor_name" />
            <Text
              label="Date"
              type="date"
              name="registration_date"
          
            />
            <Text
              label="Department"
              type="string"
              name="department"
              placeholder="Department"
        
            />
          </div>
          <Heading title="Personal Details" />
          <div className="grid grid-cols-2 gap-x-16 p-4 justify-center">
            <Name label="Patient Name" name="patient_name" />
            <Text
              label="Date of Birth"
              type="date"
              name="dob"
            />
          </div>
          <button className="p-4 mt-9 mx-[35rem] items-center bg-green-500 hover:bg-green-400 text-lg rounded-lg">Register</button>
        </div>
      </form>
    </>
  );
};

export default Form;
