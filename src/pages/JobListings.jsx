import React from "react";
import { Link } from "react-router-dom";

function JobListings() {
  return (
    <div>
      <div className="p-4 bg-background">
        <div className="flex space-x-4 mb-4">
          <select className="border border-border rounded p-2">
            <option>Select Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
          <select className="border border-border rounded p-2">
            <option>Select Industry</option>
            <option>Tech</option>
            <option>Finance</option>
          </select>
          <select className="border border-border rounded p-2">
            <option>Select Mode of Work</option>
            <option>Remote</option>
            <option>On-site</option>
          </select>
          <select className="border border-border rounded p-2">
            <option>Select Location</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
          <button className="bg-primary text-primary-foreground rounded p-2">
            Find Jobs
          </button>
        </div>
        <Link to={"/Job-details"}>
          <div className="border border-border rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=G"
                alt="Google Logo"
                className="mr-2"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-bold">Digital Marketer</h2>
                <p className="text-sm text-muted-foreground">
                  Full Time | Posted 24 hours ago | 🇬🇧 United Kingdom
                </p>
              </div>
              <span className="text-lg font-semibold">$30k - $35k</span>
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded p-2 ml-4">
                Apply Now
              </button>
            </div>
          </div>
        </Link>
        <div className="border border-border rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=F"
              alt="Facebook Logo"
              className="mr-2"
            />
            <div className="flex-grow">
              <h2 className="text-lg font-bold">Web Developer</h2>
              <p className="text-sm text-muted-foreground">
                <span className="bb txtb">Full Time</span> | Posted 2 days ago |
                🇦🇺 Australia
              </p>
            </div>
            <span className="text-lg font-semibold">$38k - $40k</span>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded p-2 ml-4">
              Apply Now
            </button>
          </div>
        </div>
        <div className="border border-border rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=L"
              alt="LinkedIn Logo"
              className="mr-2"
            />
            <div className="flex-grow">
              <h2 className="text-lg font-bold">UI/UX Designer</h2>
              <p className="text-sm text-muted-foreground">
                Remote | Posted 3 hours ago | 🇿🇦 South Africa
              </p>
            </div>
            <span className="text-lg font-semibold">$26k - $34k</span>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded p-2 ml-4">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListings;
