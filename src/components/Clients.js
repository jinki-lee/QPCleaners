import React from "react";

import integritymechanical from "../images/clients/integritymechanical.png";
import cleanersupply from "../images/clients/cleanersupply.png";
import ElevationSupplies from "../images/clients/ElevationSupplies.png";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  return (
    <div className="mt-8 bg-gray-300">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Partners
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="grid sm:grid-cols-3 lg:grid-cols-3">
            <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/2"
            >
              <img src={integritymechanical} alt="client" />
            </div>
            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={ElevationSupplies} alt="client" />
            </div>
            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={cleanersupply} alt="client" />
            </div>
          </div>

          <div className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-100 hover:opacity-100">
            <div className="text-center">
              <h2 className="mt-4 text-xl lg:text-l font-semibold text-gray-600 common-class">
                This website was developed by Han's son, Jinki Lee
              </h2>
              <a
                href="https://www.linkedin.com/in/jinkilee/"
                target="_blank" // Opens the link in a new tab/window
                rel="noopener noreferrer" // Recommended for security
                className="common-class text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
              >
                View Jinki's LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
