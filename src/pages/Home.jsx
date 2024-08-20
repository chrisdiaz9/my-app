import React from "react";
import placeholder from "../assets/placeholder.svg";

const Home = () => {
  return (
    <section className=" flex flex-col items-center justify-center lg:flex-row gap-16">
      <div>
        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
          Consume content on offense <span className="text-red-600">not defense</span>
        </h1>
        <p className=""></p>
      </div>
      <div className="relative max-md:-m-4 mt-[60px] w-full">
        <img src={placeholder} width="1080" height="625" alt="placeholder" />
      </div>
    </section>
  );
};

export default Home;
