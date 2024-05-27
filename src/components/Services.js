import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

import drycleaning from "../images/clients/drycleaning.png";
import repair from "../images/clients/repair.jpg";
import alterations from "../images/clients/alterations.jpg";
import more from "../images/clients/more.png";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section>
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Locations
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Seamless drop-off and pick-up across all our locations, tailored to
            your schedule.
          </h2>
        </div>

        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 2C7.3 2 4 5.3 4 10c0 2.2 1.1 4.3 2.9 5.6L12 22l5.1-6.4C18.9 14.3 20 12.2 20 10c0-4.7-3.3-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                </svg>
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                <span className="font-black">Acadia</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  <a
                    href="https://maps.app.goo.gl/uaCvavLoXaBAiwiR6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover" /* Add the link-hover class here */
                  >
                    📍 675 Acadia Dr SE, Calgary, AB T2J 2Y1
                  </a>
                  <br></br>
                  <a href="tel:+14032713727" className="link-hover">
                    📞 (403)-271-3727
                  </a>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <u>Monday - Friday</u>
                  <br></br>
                  7:00AM - 6:00PM
                  <br></br>
                  <br></br>
                  <u>Saturday</u>
                  <br></br>
                  10:00AM - 3:00PM
                  <br></br>
                  <br></br>
                  <u>Sunday & Statutory Holidays</u>
                  <br></br>
                  Closed<em>, hours and services may differ.</em>
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 2C7.3 2 4 5.3 4 10c0 2.2 1.1 4.3 2.9 5.6L12 22l5.1-6.4C18.9 14.3 20 12.2 20 10c0-4.7-3.3-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                </svg>
              </div>
              <h3 className="text-3xl text-blue-900 font-bold">
                <span className="font-black">Downtown</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  <a
                    href="https://maps.app.goo.gl/gyquVPeB2teihwrTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover" /* Add the link-hover class here */
                  >
                    📍 509 19 Ave SW, Calgary, AB T2S 0E3
                  </a>
                  <br></br>
                  <a href="tel:+14032442949" className="link-hover">
                    📞 (403)-244-2949
                  </a>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <u>Monday - Friday</u>
                  <br></br>
                  8:30AM - 6:00PM
                  <br></br>
                  <br></br>
                  <u>Saturday</u>
                  <br></br>
                  10:00AM - 3:00PM
                  <br></br>
                  <br></br>
                  <u>Sunday & Statutory Holidays</u>
                  <br></br>
                  Closed<em>, hours and services may differ.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to ensuring customer satisfaction.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={drycleaning}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Dry Cleaning
                </h2>
                <p className="text-md font-medium">
                  We specialize in expert garment care. Our state-of-the-art
                  facility, experienced team, and eco-friendly methods ensure
                  your clothing stays fresh and lasts longer. Convenient online
                  scheduling and fast service make us your trusted clothing care
                  partner.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={alterations}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Alterations
                </h2>
                <p className="text-md font-medium">
                  We are the experts in tailoring and alterations. Our skilled
                  team transforms your garments to achieve the perfect fit and
                  style. Whether it's hemming, resizing, or custom tailoring, we
                  bring your clothing dreams to life. Elevate your wardrobe with
                  precision alterations from us.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={repair}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Repairs
                </h2>
                <p className="text-md font-medium">
                  We excel in garment restoration. Our skilled artisans are
                  experts in mending rips, tears, and snags with precision. From
                  fixing zippers to patching holes, we're dedicated to
                  rejuvenating your wardrobe staples. Trust us to make your
                  clothes look as good as new, so you can wear them with
                  confidence.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={more}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Many More
                </h2>
                <p className="text-md font-medium">
                  We offer expert garment repair, precise wedding dress
                  alterations, steaming, and cater to special requests. Your
                  clothing, our craftsmanship, and your satisfaction – it's what
                  we're all about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
