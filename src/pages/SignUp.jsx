import React from "react";

function SignUp() {
  return (
    <div>
      <div className="flex h-screen justify-center items-center flex-col items-center p-6 bg-background">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Are you an <span className="text-primary">employer</span> or a{" "}
          <span className="text-primary">job seeker</span>?
        </h1>
        <p className="text-muted-foreground mb-6 text-center">
          Sign Up to get started
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center p-4 border border-border rounded-lg shadow-md bg-card w-full md:w-1/2 lg:w-1/3">
            <img
              undefinedhidden="true"
              alt="job-seeker-icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=👤"
              className="mb-2"
            />
            <h2 className="font-semibold text-center">I am a Job seeker</h2>
            <p className="text-muted-foreground text-center">
              Lorem ipsum dolor sit amet consectetur. Faucibus pulvinar sem quam
              ac. Interdum vestibulum sed varius mollis at dignissim convallis
              amet.
            </p>
            <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">
              Sign Up
            </button>
          </div>
          <div className="flex flex-col items-center p-4 border border-border rounded-lg shadow-md bg-card w-full md:w-1/2 lg:w-1/3">
            <img
              undefinedhidden="true"
              alt="employer-icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=💼"
              className="mb-2"
            />
            <h2 className="font-semibold text-center">I am an Employer</h2>
            <p className="text-muted-foreground text-center">
              Lorem ipsum dolor sit amet consectetur. Faucibus pulvinar sem quam
              ac. Interdum vestibulum sed varius mollis at dignissim convallis
              amet.
            </p>
            <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
