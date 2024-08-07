import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase"; // Your firebase config file
import { collection, getDocs } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import bgg from "../assets/images/bgg.png";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t5 from "../assets/images/t5.png";
import t6 from "../assets/images/t6.png";
import { CiFilter } from "react-icons/ci";

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobType: "",
    industry: "",
    employmentType: "",
    location: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const jobsPerPage = 4;

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt
            ? doc.data().createdAt.toDate()
            : null, // Convert Firestore timestamp to JS Date
        }));
        setJobs(jobList);
        setFilteredJobs(jobList); // Initially show all jobs
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter function
  const filterJobs = () => {
    let filtered = jobs;

    if (filters.jobType) {
      filtered = filtered.filter((job) => job.jobType === filters.jobType);
    }
    if (filters.industry) {
      filtered = filtered.filter((job) => job.industry === filters.industry);
    }
    if (filters.employmentType) {
      filtered = filtered.filter(
        (job) => job.employmentType === filters.employmentType
      );
    }
    if (filters.location) {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Pagination calculation
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <div className="p-4 bg-background">
        <img src={bgg} alt="" className="w-full" />
        <div className="md:flex space-x-4 mb-4 hidden bar py-5 px-5">
          <select
            name="jobType"
            className="border border-border rounded p-2 outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
          <select
            name="industry"
            className="border border-border rounded p-2 outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Industry</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Hospitality">Hospitality</option>
          </select>
          <select
            name="employmentType"
            className="border border-border rounded p-2 outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Mode of Work</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
          </select>
          <select
            name="location"
            className="border border-border rounded p-2  outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Location</option>
            <option value="Nigeria">Nigeria</option>
            <option value="South Africa">South Africa</option>
            <option value="Kenya">Kenya</option>
            <option value="Ghana">Ghana</option>
            <option value="Egypt">Egypt</option>
            <option value="Morocco">Morocco</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Uganda">Uganda</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Algeria">Algeria</option>
          </select>
          <button
            className="border border-gray-300 px-2 bgb text-white"
            onClick={filterJobs}
          >
            <CiFilter className="text-2xl " />
          </button>
        </div>

        {/* MOBILE device */}
        <div className=" md:hidden bar grid md:grid-cols-5 grid-cols-2 gap-4 md:gap-2 md:place-content-center md:place-items-center  md:p-10 p-4 ">
          <select
            name="jobType"
            className="border border-border rounded p-2 outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
          </select>
          <select
            name="industry"
            className="border border-border rounded p-2 outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Industry</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Hospitality">Hospitality</option>
          </select>
          <select
            name="employmentType"
            className="border border-border rounded p-2 outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Mode of Work</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
          </select>
          <select
            name="location"
            className="border border-border rounded p-2  outline-none"
            onChange={handleFilterChange}
          >
            <option value="">Select Location</option>
            <option value="Nigeria">Nigeria</option>
            <option value="South Africa">South Africa</option>
            <option value="Kenya">Kenya</option>
            <option value="Ghana">Ghana</option>
            <option value="Egypt">Egypt</option>
            <option value="Morocco">Morocco</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Uganda">Uganda</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Algeria">Algeria</option>
          </select>
          <button
            className="bg-primary font-bold text-white bgb rounded-lg p-2  md:col-span-1 col-span-full mx-24 md:mx-0 flex justify-center mt-2 md:mt-0"
            onClick={filterJobs}
          >
            Find Job
          </button>
        </div>

        {loading
          ? Array(jobsPerPage)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-4 mb-4 shadow-md"
                >
                  <div className="flex items-center">
                    <Skeleton circle height={40} width={40} />
                    <div className="flex-grow ml-8">
                      <Skeleton height={20} width="60%" />
                      <Skeleton height={15} width="80%" />
                    </div>
                    <Skeleton height={20} width="20%" />
                  </div>
                </div>
              ))
          : currentJobs.map((job, index) => (
              <Link to={`/job-details/${job.id}`} key={index}>
                {/* <div className="border border-border  rounded-lg p-4 mt-4 mb-4 shadow-md">
                  <div className="flex items-center">
                    <img
                      src={job.companyLogoURL}
                      alt={`${job.companyName} Logo`}
                      className="mr-8 h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <h2 className="text-lg font-bold">{job.jobTitle}</h2>
                      <p className="text-sm text-muted-foreground">
                        <span className="bb txtb">{job.employmentType}</span> |
                        Posted{" "}
                        {job.createdAt
                          ? formatDistanceToNow(job.createdAt) + " ago"
                          : "Unknown"}{" "}
                        | {job.location}
                      </p>
                    </div>
                    <span className="text-lg font-semibold">${job.salary}</span>
                    <button className="bg-[#0DCAF0] text-[#FFFFFF] text-sm rounded p-1 px-1.5 ml-4">
                      Apply Now
                    </button>
                  </div>
                </div> */}

                <div className="border border-border rounded-lg p-4 mt-4 mb-4 ">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                      src={job.companyLogoURL}
                      alt={`${job.companyName} Logo`}
                      className="h-10 w-10 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
                      <h2 className="text-lg font-bold">{job.jobTitle}</h2>
                      <p className="text-sm text-muted-foreground">
                        <span className="bb txtb">{job.employmentType}</span> |
                        Posted{" "}
                        {job.createdAt
                          ? formatDistanceToNow(job.createdAt) + " ago"
                          : "Unknown"}{" "}
                        | {job.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-center">
                      <span className="text-lg font-semibold mb-4 md:mb-0 md:mr-4">
                        ${job.salary}
                      </span>
                      <Link to={"/apply"}>
                        <button className="bg-[#0DCAF0] text-[#FFFFFF] text-sm rounded p-1 px-1.5">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-2 px-4 py-2 bg-black text-white border rounded"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 border rounded md:block hidden ${
                i + 1 === currentPage ? "bgb text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 py-2 bg-black text-white border rounded"
          >
            Next
          </button>
        </div>
      </div>
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mx-2 mb-4">
          Trusted by Our Partners
        </h2>
        <p className="text-muted-foreground mb-8 mx-2">
          Our product is trusted by leading companies across various industries.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img
            undefinedhidden="true"
            alt="Partner Logo 1"
            src={t1}
            className="rounded-full md:h-20 md:w-20 h-10 w-10 mx-auto border-4 md:border-8 border-[#0dcaf0]"
          />
          <img
            undefinedhidden="true"
            alt="Partner Logo 2"
            src={t2}
            className="rounded-full md:h-20 md:w-20 h-10 w-10  mx-auto border-4 md:border-8 border-[#0dcaf0]"
          />
          <img
            undefinedhidden="true"
            alt="Partner Logo 3"
            src={t6}
            className="rounded-full md:h-20 md:w-20 h-10 w-10  mx-auto border-4 md:border-8 border-[#0dcaf0]"
          />
          <img
            undefinedhidden="true"
            alt="Partner Logo 4"
            src={t5}
            className="rounded-full md:h-20 md:w-20 h-10 w-10 mx-auto border-4 md:border-8 border-[#0dcaf0]"
          />
        </div>
      </section>
    </div>
  );
}

export default JobListings;
