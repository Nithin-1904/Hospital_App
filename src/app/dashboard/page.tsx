"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {

  const router = useRouter()
  const register = ()=>{router.push("/form")}

  return (
    <>
      <div className="h-full w-full bg-green-100">
        <div className=" p-2 grid grid-cols-2 h-full w-full gap-2">
          <div className="grid gap-2">
            <div className="bg-white rounded-md shadow-md box-border p-4">
              <h1 className="text-4xl font-medium">Welcome to Health App</h1>
              <p className="text-xl mb-7">An optimal app for various tasks:</p>
              <p className="text-md mb-5">
                Lorem ipsum dolor sit amet, simul nominati definiebas ius eu, ne
                eius summo rationibus pro. At error sensibus rationibus ius, qui
                et appetere instructior consectetuer, saepe laudem moderatius
                his cu. Est option indoctum volutpat ea, vitae dicant duo an. Ea
                idque copiosae eos, autem mollis cu duo. Mea cu mutat mundi
                deterruisset. Ius debitis dolorem efficiendi at, ex sea
                patrioque constituto. Dicant epicuri ut est, in eam ignota
                accommodare.
              </p>
              <div className="flex justify-between items-center">
                <div className="grid gap-2">
                  <label className="text-xl"> Register a Patient </label>
                  <button onClick={register} className="bg-green-400  hover:bg-green-500 h-12 rounded-md">
                    {" "}
                    Register{" "}
                  </button>
                </div>
                <div className="grid gap-2">
                  <label className="text-xl">Patients list</label>
                  <button className="bg-green-400 hover:bg-green-500 h-12 rounded-md">
                    {" "}
                    Enter{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md box-border p-4">
              <h1 className="">Welcome to Health App</h1>
              <p>An optimal app for various tasks</p>
              <p className="text-md mb-5">
                Lorem ipsum dolor sit amet, simul nominati definiebas ius eu, ne
                eius summo rationibus pro. At error sensibus rationibus ius, qui
                et appetere instructior consectetuer, saepe laudem moderatius
                his cu. Est option indoctum volutpat ea, vitae dicant duo an. Ea
                idque copiosae eos, autem mollis cu duo. Mea cu mutat mundi
                deterruisset. Ius debitis dolorem efficiendi at, ex sea
                patrioque constituto. Dicant epicuri ut est, in eam ignota
                accommodare. Ut autem doming invenire quo, usu amet repudiandae
                te. Et tale brute dicant usu, no enim democritum argumentum per.
                Pro meis equidem appellantur ad, has errem verterem ut.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">
            <Image src="/graph.png" alt="graph" height={100} width={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
