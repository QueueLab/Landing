import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Customer from "@/components/Customer";
import Enterprise from "@/components/Enterprise";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Queue Enterprise | About Page</title>
        <meta name="description" content="Quality Computer Experiences." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="mobile"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">

            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
               Offline capabilities. 
              </h2>
             
              <p className="my-4 font-medium">
                Offline language models finetuned for earth. 
              </p>
              
              <p className="font-medium gap-16 sm:gap-8 ">
                Offline maps & route planning 
              </p>

              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Online capabilities.
              </h2>

              <p className="font-medium ">
                Earth Intelligence
              </p>
              <p className="font-medium">
                Search & Discovery
              </p>
               <p className="font-medium ">
                Green OS
              </p>
               <p className="font-medium ">
               (Q) Artificial intelligence Assistant 
              </p>
              
            </div>
            
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-3/4 rounded-2xl"
                src={profile}
                alt="Codebucks"
                sizes="(max-width: 500px) 70vw,
              (max-width: 1000px) 30vw,
              20vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                
              </div>
            </div>
          </div>

          <Skills />
          <Customer />
          <Enterprise />
        </Layout>
      </main>
    </>
  );
}
