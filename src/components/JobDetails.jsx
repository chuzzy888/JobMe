import React from "react";

function JobDetails() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-card p-6 rounded-lg shadow-md">
        <div className="md:w-1/3 bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=G"
              alt="Company Logo"
              className="w-8 h-8 mr-2"
            />
            <h2 className="text-xl font-bold">Digital Marketer</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet consectetur. Et ultricies tellus
            convallis quam. Sed opi commodo proin gravida magnis pretium
            senectus aliquet.
          </p>
          <h3 className="font-semibold">Job Information:</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>
              Employment Type: <strong>Full Time</strong>
            </li>
            <li>
              Location: <strong>United Kingdom</strong>
            </li>
            <li>
              Date Posted: <strong>13th April, 2024</strong>
            </li>
            <li>
              Experience: <strong>3 Years</strong>
            </li>
            <li>
              Salary: <strong>30k - 35k per annum</strong>
            </li>
          </ul>
          <div className="mt-4">
            <img
              undefinedhidden="true"
              alt="Map"
              src="https://placehold.co/300x200?text=Map"
              className="w-full h-48 rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-lg font-semibold">Job Description:</h3>
          <p className="text-muted-foreground mb-4 md:w-5/6">
            Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
            magna integer turpis. Tortor ut sollicitudin varius varius lectus ac
            elementum vel. Viverra pellentesque risus tristique mauris metus.
            Imperdiet purus nulla mi consequat nulla.
          </p>
          <h3 className="text-lg font-semibold">Duties & Responsibilities:</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <h3 className="text-lg font-semibold">Skills & Qualifications:</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded-lg">
            Apply Now
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Related Jobs</h2>
        <p className="text-center text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas
          dolor ut. At interdum amet id dui pulvinar quis massa elit. Amet quam
          commodo est pulvinar vitae.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-semibold">Marketing Manager</h3>
            <p className="text-sm text-muted-foreground">Posted 22 hours ago</p>
            <p className="text-sm text-primary">Remote</p>
            <p className="mt-2 font-semibold">$5.9K - $63K</p>
            <p className="mt-2 text-muted-foreground">Microsoft</p>
            <p className="text-sm text-muted-foreground">United Kingdom</p>
            <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">
              Apply Now
            </button>
          </div>
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-semibold">Marketing Manager</h3>
            <p className="text-sm text-muted-foreground">Posted 22 hours ago</p>
            <p className="text-sm text-primary">Remote</p>
            <p className="mt-2 font-semibold">$5.9K - $63K</p>
            <p className="mt-2 text-muted-foreground">Microsoft</p>
            <p className="text-sm text-muted-foreground">United Kingdom</p>
            <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">
              Apply Now
            </button>
          </div>
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-semibold">Marketing Manager</h3>
            <p className="text-sm text-muted-foreground">Posted 22 hours ago</p>
            <p className="text-sm text-primary">Remote</p>
            <p className="mt-2 font-semibold">$5.9K - $63K</p>
            <p className="mt-2 text-muted-foreground">Microsoft</p>
            <p className="text-sm text-muted-foreground">United Kingdom</p>
            <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
