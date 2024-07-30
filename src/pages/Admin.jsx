import React, { useState } from "react";
import { db } from "../firebase"; // Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Admin() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null); // For the image file
  const [companyLogoURL, setCompanyLogoURL] = useState(""); // For the image URL

  const handleImageUpload = async () => {
    if (companyLogo) {
      const storage = getStorage();
      const storageRef = ref(storage, `logos/${companyLogo.name}`);
      await uploadBytes(storageRef, companyLogo);
      const url = await getDownloadURL(storageRef);
      setCompanyLogoURL(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image and get URL
    await handleImageUpload();

    try {
      await addDoc(collection(db, "jobs"), {
        jobTitle,
        companyName,
        jobDescription,
        employmentType,
        location,
        experience,
        salary,
        companyLogoURL,
      });
      alert("Job posted successfully");
      // Reset form fields
      setJobTitle("");
      setCompanyName("");
      setJobDescription("");
      setEmploymentType("");
      setLocation("");
      setExperience("");
      setSalary("");
      setCompanyLogo(null);
      setCompanyLogoURL("");
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Error posting job");
    }
  };

  return (
    <div className="bg-gray-100  flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Post a New Job</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              id="jobTitle"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job Title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="jobDescription"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Job Description"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="employmentType"
            >
              Employment Type
            </label>
            <input
              id="employmentType"
              type="text"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              placeholder="Employment Type"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="experience"
            >
              Experience
            </label>
            <input
              id="experience"
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="salary"
            >
              Salary
            </label>
            <input
              id="salary"
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Salary"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="companyLogo"
            >
              Company Logo
            </label>
            <input
              id="companyLogo"
              type="file"
              onChange={(e) => setCompanyLogo(e.target.files[0])}
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
