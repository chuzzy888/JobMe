import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 mx-5">
        <div className="bg-card rounded-lg shadow-lg p-6 max-w-sm w-full">
          <div className="flex items-center justify-between">
            <div className="bg-green-500 rounded-full p-2">
              <img
                undefinedhidden="true"
                alt="checkmark"
                src="https://openui.fly.dev/openui/24x24.svg?text=✔️"
              />
            </div>
            <button className="text-muted-foreground hover:text-muted">
              ✖️
            </button>
          </div>
          <h2 className="text-lg font-semibold mt-4">Application Submitted</h2>
          <p className="text-muted-foreground mt-2">
            Thank you for applying! Your application has been received and is
            now being reviewed. We will be in touch with you shortly about the
            next steps in the process.
          </p>
          <div className="mt-6 flex justify-end space-x-2">
            <Link to={"/"}>
              {" "}
              <button className="bg-secondary txtb hover:bg-secondary/80 px-4 py-2 rounded-lg">
                Close
              </button>
            </Link>
            <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg">
              Next Steps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
