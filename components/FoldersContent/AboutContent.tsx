import React from "react";

const AboutContent = () => {
  return (
    <div className="w-full px-5 py-10 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-5">Hi, I'm Anurag 👋</h2>
      <p className="text-lg text-center mb-10">
        I am a frontend developer currently pursuing my bachelor's degree and doing an internship.
      </p>

      <div className="w-full max-w-lg">
        <h3 className="text-xl font-bold mb-3">Experience</h3>
        <p className="text-base mb-5">In the past, I have done these things:</p>
        <ul className="list-disc pl-5">
          <li className="mb-2">
          Studied Architecture and Interior design (This was my first love ❤️).
          </li>
          <li className="mb-2">
          Did game live streaming on multiple platforms for almost 3 years.
          </li>
          <li className="mb-2">
            Built a startup (We were building a 2.5D community building platform for content creators) <a className="text-blue-500 hover:cursor-pointer" href={"https://offsta-mvp-v2-ak-1.bubbleapps.io/version-test/place_entrance_screen/1655294587384x550707056462528500"} target="_blank" rel="noreferrer"> MVP Link </a>
          </li>
          <li  className="mb-2">Tested with some users </li>
          <li className="mb-2">Shut down the startup after 7 months</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContent;
