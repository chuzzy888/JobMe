import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Admin() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [duties, setDuties] = useState([""]);
  const [skills, setSkills] = useState([""]);

  const handleDutyChange = (index, value) => {
    const updatedDuties = duties.map((duty, i) => (i === index ? value : duty));
    setDuties(updatedDuties);
  };

  const addDuty = () => setDuties([...duties, ""]);

  const removeDuty = (index) => {
    const updatedDuties = duties.filter((_, i) => i !== index);
    setDuties(updatedDuties);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? value : skill
    );
    setSkills(updatedSkills);
  };

  const addSkill = () => setSkills([...skills, ""]);

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let companyLogoURL = "";

    if (companyLogo) {
      const storage = getStorage();
      const storageRef = ref(storage, `logos/${companyLogo.name}`);
      await uploadBytes(storageRef, companyLogo);
      companyLogoURL = await getDownloadURL(storageRef);
    }

    try {
      await addDoc(collection(db, "jobs"), {
        jobTitle,
        companyName,
        jobDescription,
        employmentType,
        jobType,
        location,
        industry,
        experience,
        salary,
        companyLogoURL,
        duties,
        skills,
        createdAt: serverTimestamp(),
      });
      alert("Job posted successfully");
      setJobTitle("");
      setCompanyName("");
      setJobDescription("");
      setEmploymentType("");
      setJobType("");
      setLocation("");
      setIndustry("");
      setExperience("");
      setSalary("");
      setCompanyLogo(null);
      setDuties([""]);
      setSkills([""]);
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Error posting job");
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center">
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
          {/* Company Name */}
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
          {/* Job Description */}
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
          {/* Employment Type */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="employmentType"
            >
              Employment Type
            </label>
            <select
              id="employmentType"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Employment Type
              </option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>
          {/* Job Type */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="jobType"
            >
              Job Type
            </label>
            <select
              id="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          {/* Location */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Location
              </option>
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
          </div>
          {/* Industry */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="industry"
            >
              Industry
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Industry
              </option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Hospitality">Hospitality</option>
            </select>
          </div>
          {/* Experience */}
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
          {/* Salary */}
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
          {/* Company Logo */}
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Duties */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Duties
            </label>
            {duties.map((duty, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={duty}
                  onChange={(e) => handleDutyChange(index, e.target.value)}
                  placeholder="Duty"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeDuty(index)}
                  className="ml-2 text-red-500"
                >
                  -
                </button>
              </div>
            ))}
            <button type="button" onClick={addDuty} className="text-blue-500">
              + Add Duty
            </button>
          </div>
          {/* Skills */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Skills
            </label>
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder="Skill"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="ml-2 text-red-500"
                >
                  -
                </button>
              </div>
            ))}
            <button type="button" onClick={addSkill} className="text-blue-500">
              + Add Skill
            </button>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
