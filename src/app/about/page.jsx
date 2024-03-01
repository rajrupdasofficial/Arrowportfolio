"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { once: true });
  const experienceRef = useRef();
  const isexperienceRefInView = useInView(experienceRef, { once: true });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* bio paragraph */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repudiandae exercitationem, aut impedit temporibus
              reiciendis rerum vero aliquam? Animi vitae dolore temporibus
              corrupti similique possimus nostrum qui, asperiores facilis
              aperiam error ipsum? Maxime, sequi similique! Possimus
              necessitatibus eligendi dolorum neque alias repellat, beatae in.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </span>
            {/* SVG SIGN */}
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="185"
                height="77"
                viewBox="0 0 200 200">
                <circle
                  fill="none"
                  stroke-opacity="1"
                  stroke="#000000"
                  stroke-width=".5"
                  cx="100"
                  cy="100"
                  r="0">
                  <animate
                    attributeName="r"
                    calcMode="spline"
                    dur="1.6"
                    values="1;80"
                    keyTimes="0;1"
                    keySplines="0 .2 .5 1"
                    repeatCount="indefinite"></animate>
                  <animate
                    attributeName="stroke-width"
                    calcMode="spline"
                    dur="1.6"
                    values="0;25"
                    keyTimes="0;1"
                    keySplines="0 .2 .5 1"
                    repeatCount="indefinite"></animate>
                  <animate
                    attributeName="stroke-opacity"
                    calcMode="spline"
                    dur="1.6"
                    values="1;0"
                    keyTimes="0;1"
                    keySplines="0 .2 .5 1"
                    repeatCount="indefinite"></animate>
                </circle>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}>
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"></path>
            </motion.svg>
          </div>
          {/* SKILLS container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skills title */}
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}>
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind Css
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Machine Learning
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Data Analysis
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Cloud Compute
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Reactnative
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Devops
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Hosting
              </div>
            </motion.div>
            {/* SKill scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}>
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"></path>
            </motion.svg>
          </div>
          {/* EXPERIECE container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}>
            {/* Experience title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isexperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">
              EXPERIENCE
            </motion.h1>
            {/* Experience list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isexperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.5 }}
              className="">
              {/* experience list item 1 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 bg-blue-200">
                  {/* job title */}
                  <div className="bg-whote p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Ecommerce Project
                  </div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">
                    Ecommerce Project for Mitali IT opc
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    09/2021-12/2021
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Mitali IT opc
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* Experience item 2 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-whote p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Ecommerce Project
                  </div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">
                    Ecommerce Project for Mitali IT opc
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    09/2021-12/2021
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Mitali IT opc
                  </div>
                </div>
              </div>
              {/* experience item 3 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 bg-blue-200">
                  {/* job title */}
                  <div className="bg-whote p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Ecommerce Project
                  </div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">
                    Ecommerce Project for Mitali IT opc
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    09/2021-12/2021
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Mitali IT opc
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
