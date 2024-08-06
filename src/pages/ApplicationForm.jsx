import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, coverLetter, resume } = formData;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !coverLetter ||
      !resume
    ) {
      setFormError("Please fill all the fields.");
      return;
    }

    try {
      // Initialize storage
      const storage = getStorage();

      // Upload resume to storage
      const resumeRef = ref(storage, `resumes/${resume.name}`);
      await uploadBytes(resumeRef, resume);
      const resumeURL = await getDownloadURL(resumeRef);

      // Store user details in Firestore
      await addDoc(collection(db, "applications"), {
        firstName,
        lastName,
        email,
        phone,
        coverLetter,
        resumeURL,
        appliedAt: new Date(),
      });

      // Redirect to modal page
      navigate("/modal"); // Updated navigation
    } catch (error) {
      console.error("Error submitting application:", error);
      setFormError("Failed to submit application. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-[#DBF7FD] p-6 md:w-5/6 w-11/12 my-5 mx-auto rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="firstName"
              >
                First name*
              </label>
              <input
                className="mt-1 block w-full border border-border rounded-md p-2"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="lastName"
              >
                Last name*
              </label>
              <input
                className="mt-1 block w-full border border-border rounded-md p-2"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="email"
              >
                Email address*
              </label>
              <input
                className="mt-1 block w-full border border-border rounded-md p-2"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="phone"
              >
                Phone number*
              </label>
              <input
                className="mt-1 block w-full border border-border rounded-md p-2"
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-muted-foreground"
              htmlFor="coverLetter"
            >
              Cover letter*
            </label>
            <textarea
              className="mt-1 block w-full border border-border rounded-md p-2"
              id="coverLetter"
              rows="9"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-muted-foreground"
              htmlFor="resume"
            >
              Upload CV/Resume*
            </label>
            <input
              className="mt-1 block w-full border border-border rounded-md p-2"
              type="file"
              id="resume"
              accept=".doc,.docx,.pdf"
              onChange={handleFileChange}
              required
            />
            <p className="text-sm text-muted-foreground mt-1">
              File type should not be larger than 12MB. Supported file types:
              doc, docx, pdf.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" required className="mr-2" />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the{" "}
              <a href="#" className="text-primary">
                Terms & Conditions
              </a>
            </label>
          </div>
          {formError && (
            <p className="text-red-500 text-sm mb-4">{formError}</p>
          )}
          <button
            type="submit"
            className="bgb text-white hover:bg-secondary/80 px-4 py-2 rounded-md"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
