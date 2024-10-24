import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/pagination component in reactjs.jpg";
import blog2 from "../../public/images/articles/create loading screen in react js.jpg";
import blog3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import blog4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import blog5 from "../../public/images/articles/create modal component in react using react portals.png";
import blog6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import blog7 from "../../public/images/articles/What is Redux with easy explanation.png";
import blog8 from "../../public/images/articles/What is higher order component in React.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, link }) => {
 
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        
      
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          
          alt={title}
          className="w-full h-auto"
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority // P3f68
          quality={100} // P3f68
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Queue Landing Page | Careers Page</title>
        <meta name="description" content="Careers" />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >

        <Layout className="pt-16">
          <AnimatedText
            text=""
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            Open Positions
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="IOS Engineer"
              img={blog3}
              date=""
              link="mailto:support@queue.cx"
            />
            <Article
              title="Web Developer"
              img={blog4}
              date=""
              link="mailto:support@queue.cx"
            />
            <Article
              title="Machine Learning Engineer"
              img={blog5}
              date=""
              link="mailto:support@queue.cx"
            />
            <Article
              title="Artficial Intelligence Researcher"
              img={blog6}
              date=""
              link="mailto:support@queue.cx"
            />
            <Article
              title="Ecology & Environment Expert"
              date=""
              img={blog8}
              link="mailto:support@queue.cx"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
