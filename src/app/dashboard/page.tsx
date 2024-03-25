import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="h-full w-full bg-green-100">
        <div className=" p-2 grid grid-cols-2 h-full w-full gap-2">
          <div className="grid gap-2">
            <div className="bg-white rounded-md shadow-md box-border p-4">
              <h1 className="text-4xl font-medium">Welcome to Health App</h1>
              <p className="text-xl">An optimal app for various tasks</p>
              
            </div>
            <div className="bg-white rounded-md shadow-md box-border p-4">
              <h1 className="">Welcome to Health App</h1>
              <p>An optimal app for various tasks</p>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md">c</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
