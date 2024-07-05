import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Customer 
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              position="Artificial intelligent voice personal assitant"
              company=""
              companyLink=""
              time=""
              address="We've crafted a soothing voice interface for our artificial intelligence platform where we plan to add onto its capabilities to improve quality computer experiences."
              work=""
            />

            <Details
              position="Real time Maps & location intelligence"
              company=""
              companyLink=""
              time=""
              address="Q has access to the world’s most accurate maps and location intelligence, with an earth centric approach, Q is aware of your locations air quality data, solar energy potential, EV charging stations as well as local businesses in your area. "
              work=""
            />

            <Details
              position="Hands free navigation"
              company=" "
              companyLink=""
              time=""
              address="Q is able to navigate you anywhere you want completely hands free using spatial audio, it is able to understand your voice and navigate you to your destination."
              work=""
            />

            <Details
              position="Immersive bioacoustics & Green OS"
              company=""
              companyLink=""
              time=""
              address="Q crafts an immersive bioacoustics sphere around our artificial intelligence voice. Immersing you into nature while assisting you with your daily tasks. We have augmented digitally replenishing ecosystems through real world carbon capture technologies with digital interfaces. This allows us to improve user experience, reduce carbon footprint, and help the planet within our operating systems"
              work=""
            />

            <Details
              position="Weather intelligence"
              company=""
              companyLink=""
              time=""
              address="Q has accurate 10 day weather forecast and is able to recommend when its best to partake in outdoor activities while keeping our users safe."
              work=""
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
