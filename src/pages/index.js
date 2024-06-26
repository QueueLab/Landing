import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const Globe = dynamic(() => import('globe.gl'), { ssr: false });

export default function Home() {
  const globeRef = useRef(null);

  useEffect(() => {
    const initializeGlobe = async () => {
      if (typeof window !== "undefined" && globeRef.current) {
        const Globe = (await import('globe.gl')).default;
        const myGlobe = Globe();
        myGlobe(globeRef.current)
          .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
          .backgroundColor('rgba(0, 0, 0, 0)')
      }
    };
    initializeGlobe();
  }, []); 
  
  return (
    <>
      <Head>
        <title>Queue Enterprise</title>
        <meta
          name="description"
          content="Quality Computer Experiences"
        />
      </Head>

      <TransitionEffect />
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-center justify-start md:flex-col">
            <div className="w-0 lg:hidden md:inline-block md:w-full">
              <div ref={globeRef} className="h-auto w-1/6 ml-0"></div>
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Quality Computer Experiences"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
             The perpetual disconnect between earth and our digital lives persists. 
             As we spend increasing amounts of time indoors, 
             algorithms learn from our data and perpetuate further indoor activities. 
             This represents only half of the problem;
             there is a growing challenge in accessing nature,
             Climate action & consumer based artificial intelligent product cohesion remains largely absent from our digital experiences. 
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="https://labs.queue.cx"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                
                Lab  
                <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
                <Link
                  href="labs.queue.cx"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                 
                </Link>
                <Link
    href="https://forms.gle/vCcRPenxRFUM8Bue8" // Replace with the desired URL
    target={"https://forms.gle/vCcRPenxRFUM8Bue8"} // Remove this line if you don't want to open in a new tab
    className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
      capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
      dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
      md:p-2 md:px-4 md:text-base ml-4 // Add some left margin to separate it from the "Labs" button
    `}
  >
    Waitlist
    <LinkArrow className="ml-1 !w-6 md:!w-4" />
  </Link>

  <Link
    href="https://forms.gle/vCcRPenxRFUM8Bue8"
    className="ml-4 text-lg font-medium capitalize text-dark underline 
    dark:text-light md:text-base"
  >
  </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image
        className="relative h-auto w-full"
        src={lightBulb}
        alt=""
        />
        </div>
    </>
  );
}
