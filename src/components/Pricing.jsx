import React from "react";

function Pricing() {
  return (
    <div className="md:flex md:justify-center md:items-center md:h-screen">
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 p-8">
        <div className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Starter</h2>
          <p className="text-muted-foreground">
            Post up to 3 job listings per month.
          </p>
          <p className="text-2xl font-bold">
            $2 <span className="text-muted-foreground">/month</span>
          </p>
          <ul className="list-disc list-inside my-4">
            <li>✔️ 3 job postings per month</li>
            <li>✔️ 1 GB storage</li>
            <li>✔️ Basic features</li>
          </ul>
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full p-2 rounded-lg">
            Upgrade to Post Jobs
          </button>
        </div>
        <div className="bg-zinc-800 text-white border border-border rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Pro</h2>
          <p className="text-muted-foreground">
            Post up to 10 job listings per month.
          </p>
          <p className="text-2xl font-bold">
            $8 <span className="text-muted-foreground">/month</span>
          </p>
          <ul className="list-disc list-inside my-4">
            <li>✔️ 10 job postings per month</li>
            <li>✔️ 10 GB storage</li>
            <li>✔️ Advanced features</li>
          </ul>
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full p-2 rounded-lg">
            Upgrade to Post Jobs
          </button>
        </div>
        <div className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold">Enterprise</h2>
          <p className="text-muted-foreground">
            Post unlimited job listings per month.
          </p>
          <p className="text-2xl font-bold">
            $15 <span className="text-muted-foreground">/month</span>
          </p>
          <ul className="list-disc list-inside my-4">
            <li>✔️ Unlimited job postings</li>
            <li>✔️ Unlimited storage</li>
            <li>✔️ Enterprise features</li>
          </ul>
          <button className=" txtb hover:bg-secondary/80 w-full p-2 rounded-lg">
            Upgrade to Post Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
