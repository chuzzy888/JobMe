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

function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[65vh]  flex flex-col bg "
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
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Industry</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Mode of Work</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Location</option>
            </select>
            <div className="md:col-span-1 col-span-full flex justify-center  ">
              <button className="bgb text-white px-4 py-2 rounded-lg outline-none shadow-md">
                Find Jobs
              </button>
            </div>
          </div>

          {/* MOBILE */}
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 md:gap-2 md:place-content-center md:place-items-center  md:p-10 p-4 bar rounded-lg md:hidden">
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Job Type</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Industry</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Mode of Work</option>
            </select>
            <select className="bg-white text-black px-4 py-2 rounded-lg outline-none shadow-md mb-2">
              <option>Select Location</option>
            </select>
            <div className="md:col-span-1 col-span-full flex justify-center mt-2 md:mt-0 ">
              <button className="bgb text-white px-4 py-2 rounded-lg outline-none shadow-md">
                Find Jobs
              </button>
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
                Lorem ipsum dolor sit amet consectetur. Duis sed ornare
                adipiscing sed platea integer habitant. Eros quis hac amet
                dignissim morbi vulputate eriva it commodo mi. Est mauris diam
                donec magna. Sit cras fringilla integer sed praesent urna amet.
                Donec suspendisse quis sed placerat lacus euipii pretium duis
                semper est ac nec ultricie.
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
                Lorem ipsum dolor sit amet consectetur. Duis sed ornare
                adipiscing sed platea integer habitant. Eros quis hac amet
                dignissim morbi vulputate eriva it commodo mi. Est mauris diam
                donec magna. Sit cras fringilla integer sed praesent urna amet.
                Donec suspendisse quis sed placerat lacus euipii pretium duis
                semper est ac nec ultricie.
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
            Lorem ipsum dolor sit amet consectetur. Augue lacus senectus at amet
            viverra ultrices eget. Tincidunt tristique viverra facilisis arcu
            non nulla faucibus. Adipiscing blandit nunc lobortis pretium. Tempus
            viverra vitae nisl imperdiet auctor mattis viverra egestas mattis.
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
              Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla
              aliquam a. In ac in ornare donec consectetur. Nam semper gravida
              enim dolor velit aliquam ut ac. Lorem ipsum dolor sit amet
              consectetur. Dolor euismod mattis nulla aliquam a. In ac in ornare
              donec consectetur. Nam semper gravida enim dolor velit aliquam ut
              ac.
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
                “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
                tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
                aliquet eu gravida massa vel.”
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
                “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
                tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
                aliquet eu gravida massa vel.”
              </p>
              <h3 className="txtb font-semibold">Blard James</h3>
              <p className="text-muted-foreground">United Kingdom</p>
            </div>
            <div className="bg-[#F5F3F3] p-6 rounded-lg shadow-md text-center">
              <img
                className="mx-auto rounded-full border-4 border-primary w-24 h-24 mb-4"
                src={e3}
                alt="Client 3"
              />
              <p className="text-muted-foreground mb-4">
                “Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam
                tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus
                aliquet eu gravida massa vel.”
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
