import { useContext } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen my-10">
        <div className="hero-overlay bg-opacity-5">
          <img
            src="../../../public/Resources/bannerBg.png"
            className="w-full"
            alt="black"
          />
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:max-w-xl flex flex-col gap-7 justify-center items-center">
            <h1 className="mb-5 text-3xl md:text-6xl font-black text-zinc-50/50">
              TASK MANAGEMENT SYSTEM
            </h1>
            <p className="text-xs">
              Organize and manage your team like a boss with Sync360, task
              management software packing more capabilities than you can
              imagine.
            </p>
            <Link to={user ? "/dashboard" : "/login"}>
              <p className="px-7 py-3 bg-black/40 text-white font-black rounded-3xl shadow-xl hover:bg-black/20 flex items-center gap-3">
                <FcAlarmClock />
                Let’s Explore
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
