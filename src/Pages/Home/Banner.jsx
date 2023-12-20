import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import { FcAlarmClock } from "react-icons/fc";

const Banner = () => {
  useEffect(() => {
    const typewriterElement = document.getElementById("typewriter");

    if (typewriterElement) {
      new Typewriter(typewriterElement, {
        strings: ["Welcome to sync360"],
        autoStart: true,
      });
    }
  }, []);

  return (
    <div className="min-h-screen my-10 flex flex-col lg:flex-row-reverse">
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src="../../../public/Resources/bannerImg.png"
          className="p-10 w-3/4 object-contain"
        />
      </div>
      <div className="flex-1 text-center lg:text-left max-w-lg p-5 text-black">
        <div className="flex">
          <div id="typewriter" className="py-9 text-3xl font-bold"></div>{" "}
          <FcAlarmClock />
        </div>
        <h1 className="my-10 text-4xl md:text-6xl text-red-900/50">
          TASK MANAGEMENT SOFTWARE
        </h1>
        <p className="mb-5 text-xs">
          Organize and manage your team like a boss with Sync360, task
          management software packing more capabilities than you can imagine.
        </p>
        <button className="px-7 py-3 bg-black/60 text-white font-black rounded-3xl shadow-xl hover:bg-black/70">
          Let’s Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
