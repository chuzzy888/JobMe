// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import emp from "../assets/images/emp.png";
// import dte from "../assets/images/dte.png";
// import lte from "../assets/images/lte.png";
// import bfc from "../assets/images/bfc.png";
// import usd from "../assets/images/usd.png";
// import bt from "../assets/images/bt.png";
// import dat from "../assets/images/dat.png";

// function JobDetails() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       setLoading(true);
//       try {
//         const docRef = doc(db, "jobs", id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setJob({ id: docSnap.id, ...docSnap.data() });
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching job:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!job) return <div>Job not found.</div>;

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row bg-card p-6 rounded-lg shadow-md">
//         <div className="md:w-1/3 bg-blue-100 p-4 rounded-lg">
//           <div className="flex items-center mb-4">
//             <img
//               src={job.companyLogoURL || "default-logo-url"} // Provide a default logo URL
//               alt="Company Logo"
//               className="w-8 h-8 mr-2 rounded-full"
//             />
//             <h2 className="text-xl font-bold">{job.jobTitle}</h2>
//           </div>
//           <p className="text-muted-foreground mb-4">{job.description}</p>
//           <div className="bg-white w-full  p-5 rounded-md flex flex-col gap-2">
//             <span className="flex items-center gap-2 text-sm">
//               <img src={emp} alt="" />
//               Employment Type <p className="txtb">{job.employmentType}</p>
//             </span>
//             <span className="flex items-center gap-2 text-sm">
//               <img src={lte} alt="" />
//               Location <p className="txtb">{job.location}</p>
//             </span>
//             <span className="flex items-center gap-2 text-sm">
//               <img src={dte} alt="" />
//               Date Posted{" "}
//               <p className="txtb">
//                 {job.createdAt && job.createdAt.toDate().toDateString()}
//               </p>
//             </span>
//             <span className="flex items-center gap-2 text-sm">
//               <img src={bfc} alt="" />
//               Experience <p className="txtb">{job.experience} Years</p>
//             </span>
//             <span className="flex items-center gap-2 text-sm">
//               <img src={usd} alt="" />
//               Salary <p className="txtb">{job.salary}</p>
//             </span>
//             <span className=" flex justify-end  ">
//               {" "}
//               <p className="bar px-2 py-2 text-white rounded-md text-sm font-mono">
//                 {" "}
//                 {job.jobType}
//               </p>{" "}
//             </span>
//           </div>
//           <div className="mt-4">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046783.759905603!2d-3.6715290974918284!3d7.9016232116066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd75acda8dad6c7%3A0x54d7f230d093d236!2sGhana!5e0!3m2!1sen!2sng!4v1722468171440!5m2!1sen!2sng"
//               width="100%"
//               height="300"
//               style={{ border: "0" }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//         <div className="md:w-2/3 md:pl-6 py-5">
//           <h3 className="text-lg font-semibold ">Job Description</h3>
//           <p className="text-muted-foreground mb-4 md:w-5/6 text-sm ">
//             {job.jobDescription}
//           </p>
//           <h3 className="text-lg font-semibold">Duties & Responsibilities</h3>
//           <ul className="list-disc list-inside text-muted-foreground mb-4 flex flex-col gap-2">
//             {(job.duties || []).map((duty, index) => (
//               <li key={index} className="flex items-center gap-1 ">
//                 {" "}
//                 <img src={bt} alt="" /> {duty}.
//               </li>
//             ))}
//           </ul>
//           <h3 className="text-lg font-semibold">Skills & Qualifications</h3>
//           <ul className="list-disc list-inside text-muted-foreground mb-4 flex flex-col gap-2">
//             {(job.skills || []).map((skill, index) => (
//               <li key={index} className="flex items-center gap-1">
//                 {" "}
//                 <img src={bt} alt="" /> {skill}.
//               </li>
//             ))}
//           </ul>
//           <Link to={"/apply"}>
//             <button className="bgb text-white hover:bg-secondary/80 py-2 px-4 rounded-lg">
//               Apply Now
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="p-6 bg-background rounded-lg shadow-md">
//         <h2 className="text-xl font-bold mb-4 text-center">Related Jobs</h2>
//         <p className="text-muted-foreground mb-6 text-center">
//           Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas
//           dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet quam
//           commodo est pulvinar vitae.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-card rounded-lg p-4 shadow">
//             <h3 className="text-lg font-semibold">Marketing Manager</h3>
//             <span className="flex items-center gap-2">
//               <img src={dat} alt="" className="h-4" />
//               <p className="text-muted-foreground">Posted 22 hours ago</p>
//             </span>
//             <p className="txtb ">Remote</p>
//             <p className="text-muted-foreground">$ 59k - $ 63k</p>
//             <div className="flex items-center mt-2">
//               <img
//                 undefinedhidden="true"
//                 alt="Microsoft Logo"
//                 src="https://openui.fly.dev/openui/24x24.svg?text=🪄"
//               />
//               <span className="ml-2">Microsoft</span>
//               <span className="text-muted-foreground">| United Kingdom</span>
//             </div>
//             <button className="mt-4 bgb text-white hover:bg-primary/80 px-4 py-2 rounded">
//               Apply Now
//             </button>
//           </div>
//           <div className="bg-card rounded-lg p-4 shadow">
//             <h3 className="text-lg font-semibold">Marketing Manager</h3>
//             <p className="text-muted-foreground">Posted 22 hours ago</p>
//             <p className="text-primary">Remote</p>
//             <p className="text-muted-foreground">$ 59k - $ 63k</p>
//             <div className="flex items-center mt-2">
//               <img
//                 undefinedhidden="true"
//                 alt="Microsoft Logo"
//                 src="https://openui.fly.dev/openui/24x24.svg?text=🪄"
//               />
//               <span className="ml-2">Microsoft</span>
//               <span className="text-muted-foreground">| United Kingdom</span>
//             </div>
//             <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">
//               Apply Now
//             </button>
//           </div>
//           <div className="bg-card rounded-lg p-4 shadow">
//             <h3 className="text-lg font-semibold">Marketing Manager</h3>
//             <p className="text-muted-foreground">Posted 22 hours ago</p>
//             <p className="text-primary">Remote</p>
//             <p className="text-muted-foreground">$ 59k - $ 63k</p>
//             <div className="flex items-center mt-2">
//               <img
//                 undefinedhidden="true"
//                 alt="Microsoft Logo"
//                 src="https://openui.fly.dev/openui/24x24.svg?text=🪄"
//               />
//               <span className="ml-2">Microsoft</span>
//               <span className="text-muted-foreground">| United Kingdom</span>
//             </div>
//             <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">
//               Apply Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JobDetails;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import emp from "../assets/images/emp.png";
import dte from "../assets/images/dte.png";
import lte from "../assets/images/lte.png";
import bfc from "../assets/images/bfc.png";
import usd from "../assets/images/usd.png";
import bt from "../assets/images/bt.png";
import dat from "../assets/images/dat.png";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedJobs, setRelatedJobs] = useState([]);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "jobs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const jobData = { id: docSnap.id, ...docSnap.data() };
          setJob(jobData);
          await fetchRelatedJobs(jobData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedJobs = async (jobData) => {
      try {
        const relatedJobsQuery = query(
          collection(db, "jobs"),
          where("jobTitle", "==", jobData.jobTitle)
        );
        const querySnapshot = await getDocs(relatedJobsQuery);

        console.log("Related Jobs Query Snapshot:", querySnapshot.docs);

        const jobs = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((relatedJob) => relatedJob.id !== jobData.id);

        console.log("Filtered Related Jobs:", jobs);

        setRelatedJobs(jobs);
      } catch (error) {
        console.error("Error fetching related jobs:", error);
      }
    };

    fetchJob();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (!job) return <div>Job not found.</div>;

  return (
    <div>
      <div className="flex flex-col md:flex-row bg-card p-6 rounded-lg shadow-md">
        <div className="md:w-1/3 bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <img
              src={job.companyLogoURL || "default-logo-url"} // Provide a default logo URL
              alt="Company Logo"
              className="w-8 h-8 mr-2 rounded-full"
            />
            <h2 className="text-xl font-bold">{job.jobTitle}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{job.description}</p>
          <div className="bg-white w-full p-5 rounded-md flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm">
              <img src={emp} alt="" />
              Employment Type | -<p className="txtb">{job.employmentType}</p>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <img src={lte} alt="" />
              Location |<p className="txtb">{job.location}</p>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <img src={dte} alt="" />
              Date Posted |{" "}
              <p className="txtb">
                {job.createdAt && job.createdAt.toDate().toDateString()}
              </p>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <img src={bfc} alt="" />
              Experience |<p className="txtb">{job.experience} Years</p>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <img src={usd} alt="" />
              Salary | -<p className="txtb">{job.salary}</p>
            </span>
            <span className="flex justify-end">
              {" "}
              <p className="bar px-2 py-2 txtb font-bold rounded-md text-sm font-mono">
                {" "}
                {job.jobType}
              </p>{" "}
            </span>
          </div>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046783.759905603!2d-3.6715290974918284!3d7.9016232116066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd75acda8dad6c7%3A0x54d7f230d093d236!2sGhana!5e0!3m2!1sen!2sng!4v1722468171440!5m2!1sen!2sng"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-6 py-5">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-muted-foreground mb-4 md:w-5/6 ">
            {job.jobDescription}
          </p>
          <h3 className="text-lg font-semibold mb-2">
            Duties & Responsibilities
          </h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4 flex flex-col gap-2">
            {(job.duties || []).map((duty, index) => (
              <li key={index} className="flex items-center gap-1">
                {" "}
                <img src={bt} alt="" /> {duty}.
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">
            Skills & Qualifications
          </h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4 flex flex-col gap-2">
            {(job.skills || []).map((skill, index) => (
              <li key={index} className="flex items-center gap-1">
                {" "}
                <img src={bt} alt="" /> {skill}.
              </li>
            ))}
          </ul>
          <Link to={"/apply"}>
            <button className="bgb text-white hover:bg-secondary/80 py-2 px-4 rounded-lg">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <div className="p-6 bg-background rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Related Jobs</h2>
        <p className="text-muted-foreground mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas
          dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet quam
          commodo est pulvinar vitae.
        </p>
        {relatedJobs.length === 0 ? (
          <p className="text-center">No related jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedJobs.map((relatedJob) => (
              <div
                key={relatedJob.id}
                className="bg-card rounded-lg p-4 shadow"
              >
                <h3 className="text-lg font-semibold">{relatedJob.jobTitle}</h3>
                <span className="flex items-center gap-2">
                  <img
                    src={dat}
                    alt=""
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  <p className="text-muted-foreground">
                    Posted {relatedJob.createdAt.toDate().toDateString()}
                  </p>
                </span>
                <p className="txtb">{relatedJob.location}</p>
                <p className="text-muted-foreground">${relatedJob.salary}</p>
                <div className="flex items-center mt-2">
                  <img
                    alt={`${relatedJob.companyName} Logo`}
                    src={relatedJob.companyLogoURL || "default-logo-url"}
                    className="h-4 w-4 rounded-full"
                  />
                  <span className="ml-2">{relatedJob.companyName}</span>
                  <span className="text-muted-foreground">
                    | {relatedJob.location}
                  </span>
                </div>
                <Link to={`/job/${relatedJob.id}`}>
                  <button className="mt-4 bgb text-white hover:bg-primary/80 px-4 py-2 rounded">
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
