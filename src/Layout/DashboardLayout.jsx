import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaCalendar,
  FaHome,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { RxSlash } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title>Sync360 | Dashboard</title>
      </Helmet>
      <div className="flex flex-col md:flex-row">
        {/* dashboard side bar */}
        <div className="w-full md:w-64 min-h-screen bg-black text-white text-xl font-semibold pt-20 text-center flex flex-row md:flex-col gap-3">
          <p className="text-xl font-semibold text-stone-100/50">
            User Dashboard
          </p>
          <img className="w-8 h-8 rounded-full mx-auto" src={user?.photoURL} />
          <p className="text-lime-600 text-sm">{user?.displayName}</p>
          <button
            onClick={handleLogOut}
            className="text-red-600 text-sm flex justify-center items-center gap-1"
          >
            Log out <FaArrowAltCircleRight className="w-3 text-red-500/50" />
          </button>
          <ul className="menu">
            <li>
              <NavLink to="/dashboard">
                <FaCalendar />
                <p className="hover:underline">My Donations</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-zinc-400/10 py-2 px-4 rounded-xl"
                    : "py-2 px-4"
                }
              >
                <div className="flex justify-center items-center gap-2">
                  <FaHome />
                  Sync360 | Home
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8 bg-white text-black">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
