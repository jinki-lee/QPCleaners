import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our History
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            About Q&P Cleaners
          </h2>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-left lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-blue-900 font-bold">Since 1960</h3>
            <div>
              <p className="my-5 text-l text-gray-600 font-semibold">
                For more than six decades and spanning three generations, Q&P
                Cleaners has been a trusted partner to renowned brands,
                consistently delivering exceptional quality and price to our
                cherished customers. As a privately held, family-owned
                establishment, our unwavering commitment has always been
                centered on tailoring our services to meet your unique clothing
                care needs, whether it involves the meticulous removal of a
                minor stain or the delicate alteration of a cherished wedding
                gown.
              </p>
            </div>

            <div>
              <p className="my-5 text-l text-gray-600 font-semibold">
                At Q&P Cleaners, Han Joon Lee and his business takes
                responsibility towards the environment seriously. We are proud
                to hold the distinction of being the first in all of Canada to
                acquire the innovative SOLVONK4 machine. This state-of-the-art
                technology employs a halogen-free solvent that is not only
                non-toxic and non-hazardous but also biodegradable. Its
                remarkable cleaning efficiency ensures that your garments are
                treated with the utmost care while leaving a minimal ecological
                footprint.
              </p>
            </div>

            <div>
              <p className="my-5 text-l text-gray-600 font-semibold">
                Join us on a journey spanning over six decades, where tradition,
                innovation, and a deep commitment to customer satisfaction have
                always been at the heart of Q&P Cleaners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
