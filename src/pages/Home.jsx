import React from "react";
import { CiClock2 } from "react-icons/ci";
import hero from "../assets/images/hero.png";
import hiw from "../assets/images/hiw.png";
import fm from "../assets/images/fm.png";
import f2 from "../assets/images/f2.png";
import lnk from "../assets/images/lnk.png";
import fcb from "../assets/images/fcb.png";
import gog from "../assets/images/gog.png";
import cvu from "../assets/images/cvu.png";
import e1 from "../assets/images/e1.png";
import e2 from "../assets/images/e2.png";
import e3 from "../assets/images/e3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center md:h-[65vh] h-[45vh] flex flex-col bg "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex-grow flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="md:text-2xl text-lg font-bold text-center mb-4 font-serif">
            FIND JOBS AND HIRE AMAZING <br />
            TALENTS!
          </h1>

          {/* DESKTOP */}

          <div className="  md:p-10 p-4 bar rounded-lg md:flex justify-between items-center gap-8 hidden">
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Industry</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Hospitality">Hospitality</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Mode of Work</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Location</option>
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
            <div className="md:col-span-1 col-span-full flex justify-center  ">
              <Link to={"/jobs"}>
                <button className="bgb text-white px-4 py-2 rounded-lg outline-none shadow-md">
                  Find Jobs
                </button>
              </Link>
            </div>
          </div>

          {/* MOBILE */}
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 md:gap-2 md:place-content-center md:place-items-center  md:p-10 p-4 bar rounded-lg md:hidden">
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Industry</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Hospitality">Hospitality</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select work mode</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Location</option>
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
            <div className="md:col-span-1 col-span-full flex justify-center mt-2 md:mt-0 ">
              <Link to={"/jobs"}>
                <button className="bgb text-white px-4 py-2 rounded-lg outline-none shadow-md">
                  Find Jobs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hs">
        <div className="bg-background text-foreground md:w-5/6 p-10 mx-auto">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 p-2">
            <div className="flex-1">
              <img
                className="rounded-full border-4 border-primary"
                src={fm}
                alt="Group of people working together"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">
                Find Millions of Job Opportunities Right for You!
              </h2>
              <p className="text-muted-foreground">
                Welcome to JobMe, your gateway to an abundance of job
                opportunities across various industries. Explore a wide range of
                roles tailored to your skills and career aspirations. Whether
                you're starting your career or seeking new challenges, JobMe
                connects you with employers eager to find talent like yours.
                Begin your job search today and take the next step toward your
                dream job. At JobMe, your future starts here.
              </p>
              <button className="bgb text-white hover:bg-primary/80 px-4 py-2 rounded-lg">
                Discover More
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-8  md:space-y-0 md:space-x-8 p-2">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">
                Looking for the World's Best Talents?
              </h2>
              <p className="text-muted-foreground">
                Welcome to JobMe, where top talents meet the best opportunities.
                Our platform is designed to connect you with exceptional
                professionals across diverse industries. Discover skilled
                individuals ready to bring innovation and excellence to your
                organization. Whether you're hiring for specialized roles or
                building a dynamic team, JobMe is your trusted partner in talent
                acquisition. Let us help you find the perfect match for your
                business needs.
              </p>
              <button className="bgb text-white hover:bg-primary/80 px-4 py-2 rounded-lg">
                Discover More
              </button>
            </div>
            <div className="flex-1">
              <img
                className="rounded-full border-4 border-primary"
                src={f2}
                alt="Group of people working together"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background text-foreground  md:w-5/6 p-10 mx-auto">
        <div className="text-center mb-8">
          <img src={hiw} alt="How It Works" className="mx-auto mb-4" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Job Listing</h2>
          <p className="text-muted-foreground mb-6">
            Explore our most recent job listings at JobMe. Whether you're
            seeking a new challenge or a step up in your career, we have a
            variety of opportunities just for you. Discover roles across
            multiple industries and locations, tailored to your skills and
            aspirations. Stay ahead with JobMe and find your next great
            opportunity today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              Digital Marketer
            </h3>
            <p className="text-muted-foreground mb-4 flex items-center gap-1 tg">
              {" "}
              <CiClock2 className="text-xl txt" />
              Posted 24 hours ago
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#0DCAF01F] text-[#0DCAF0] px-2 py-1 rounded">
                Full Time
              </span>
              <span className="text-muted-foreground">$ 30k - 35k</span>
            </div>
            <div className="flex items-center mb-4">
              <img src={gog} alt="Google" className="mr-2 h-5 object-cover" />
              <span>Google</span>
              <span className="text-muted-foreground ml-2">United Kingdom</span>
            </div>
            <button className="bg-[#0DCAF0] text-[#FFFFFF] hover:bg-secondary/80 px-3 py-1 font-medium text-sm rounded-xl">
              Apply Now
            </button>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-[#000000]">
              Web Developer
            </h3>
            <p className="text-muted-foreground mb-4 flex items-center gap-1 tg">
              {" "}
              <CiClock2 className="text-xl txt" />
              Posted 2 days ago
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#0DCAF01F] text-[#0DCAF0] px-2 py-1 rounded">
                Full Time
              </span>
              <span className="text-muted-foreground">$ 38k - 40k</span>
            </div>
            <div className="flex items-center mb-4">
              <img src={fcb} alt="Facebook" className="mr-2 h-5 object-cover" />
              <span>Facebook</span>
              <span className="text-muted-foreground ml-2">Australia</span>
            </div>
            <button className="bg-[#0DCAF0] text-[#FFFFFF] hover:bg-secondary/80 px-3 py-1 font-medium text-sm rounded-xl">
              Apply Now
            </button>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2 text-[#000000]">
              UI/UX Designer
            </h3>
            <p className="text-muted-foreground mb-4 flex items-center gap-1 tg">
              <CiClock2 className="text-xl txt" />
              Posted 3 hours ago
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#0DCAF01F] text-[#0DCAF0] text-primary-foreground px-2 py-1 rounded">
                Remote
              </span>
              <span className="text-muted-foreground">$ 26k - 34k</span>
            </div>

            <div className="flex items-center mb-4">
              <img src={lnk} alt="LinkedIn" className="mr-2 h-5 object-cover" />
              <span>LinkedIn</span>
              <span className="text-muted-foreground ml-2">South Africa</span>
            </div>
            <button className="bg-[#0DCAF0] text-[#FFFFFF] hover:bg-secondary/80 px-3 py-1 font-medium text-sm rounded-xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#E0F7FA] h-[392px] xl:h-[515px] flex items-center">
        <div className="md:w-5/6 p-10 mx-auto flex items-center">
          <div className="flex flex-col space-y-5 md:w-1/2">
            <h2 className="font-medium text-xl">
              Get Jobs that match your Qualifications and Skill Set
            </h2>
            <p className="text-[#000000] md:text-lg text-sm">
              At JobMe, we understand the importance of finding a job that
              aligns with your qualifications and skill set. Our platform is
              tailored to connect you with opportunities that suit your
              professional profile. Explore personalized job matches, crafted to
              help you excel in your career. Join us and discover a range of
              positions that fit your expertise, ensuring a perfect match for
              your career aspirations.
            </p>
            <div>
              <button className="bg-[#0DCAF0] text-[#FFFFFF] p-2 px-2 text-sm rounded-xl">
                Upload Your CV
              </button>
            </div>
          </div>

          <div className="md:w-1/2 w-full md:block hidden">
            <img
              src={cvu}
              alt="CV Upload"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-background text-foreground p-8  ">
        <div className=" md:w-5/6 md:p-10 p-5 mx-auto">
          <div className="text-center mb-8">
            <h2 className="txtb text-lg">Testimonials</h2>
            <h1 className="text-2xl font-bold">Feedbacks from clients</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-[#F5F3F3] p-6 rounded-lg shadow-md text-center">
              <img
                className="mx-auto rounded-full border-4 border-primary w-24 h-24 mb-4"
                src={e1}
                alt="Client 1"
              />
              <p className="text-muted-foreground mb-4">
                “JobMe transformed my job search experience. The platform
                connected me with top employers in my field, making the process
                smooth and efficient. I'm now in a role that perfectly matches
                my skills and aspirations.”
              </p>
              <h3 className="txtb font-semibold">Alice Shata</h3>
              <p className="text-muted-foreground">South Africa</p>
            </div>
            <div className="bg-[#F5F3F3] p-6 rounded-lg shadow-md text-center">
              <img
                className="mx-auto rounded-full border-4 border-primary w-24 h-24 mb-4"
                src={e2}
                alt="Client 2"
              />
              <p className="text-muted-foreground mb-4">
                “Thanks to JobMe, I found a fantastic job opportunity that I
                wouldn't have discovered otherwise. The personalized job matches
                and user-friendly interface made my job hunt stress-free and
                successful.”
              </p>
              <h3 className="txtb font-semibold">Blard James</h3>
              <p className="text-muted-foreground">Kenya</p>
            </div>
            <div className="bg-[#F5F3F3] p-6 rounded-lg shadow-md text-center">
              <img
                className="mx-auto rounded-full border-4 border-primary w-24 h-24 mb-4"
                src={e3}
                alt="Client 3"
              />
              <p className="text-muted-foreground mb-4">
                “I highly recommend JobMe for anyone looking to advance their
                career. The platform's extensive job listings and easy
                application process helped me land my dream job in no time. I'm
                grateful for the support and resources JobMe provides.”
              </p>
              <h3 className="txtb font-semibold">Jide Oba</h3>
              <p className="text-muted-foreground">Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
