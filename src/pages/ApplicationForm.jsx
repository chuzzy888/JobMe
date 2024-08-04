import React from "react";

function ApplicationForm() {
  return (
    <div>
      <div className="bg-[#DBF7FD] p-6 md:w-5/6 w-11/12 my-5 mx-auto rounded-lg shadow-md">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="first-name"
              >
                First name*
              </label>
              <input
                className="mt-1 block w-full border border-border rounded-md p-2"
                type="text"
                id="first-name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="last-name"
              >
                Last name*
              </label>
              <input
                className="mt-1 block w-full border border-border rounded-md p-2"
                type="text"
                id="last-name"
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
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-muted-foreground"
              htmlFor="cover-letter"
            >
              Cover letter*
            </label>
            <textarea
              className="mt-1 block w-full border border-border rounded-md p-2"
              id="cover-letter"
              rows="9"
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
