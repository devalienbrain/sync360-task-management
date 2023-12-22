import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  const links = (
    <>
      <div className="flex justify-center items-center gap-2">
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
            <img
              src="../../../public/Resources/logo.jpg"
              alt="logo"
              className="w-6 h-6 rounded-full"
            />
            Sync360
            <span className="border border-zinc-200/50 rounded">
              <RxSlash />
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/features"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/25 py-2 px-4 rounded-xl"
              : "py-2 px-4"
          }
        >
          Features
        </NavLink>
      </div>
    </>
  );
  const conditionalLinks = (
    <>
      <div className="flex justify-between items-center gap-3 md:gap-7 font-bold">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/25 py-2 px-4 rounded-lg"
              : "py-2 px-4"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/25 py-2 px-4 rounded-lg"
              : "py-2 px-4"
          }
        >
          Join Us
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="flex justify-center items-center gap-3">
      <div className="flex justify-center items-center gap-3 text-xs md:text-sm">
        {links}
      </div>
      <div className="flex justify-center items-center gap-3 text-xs md:text-sm">
        {user ? (
          <div className="justify-end flex items-center gap-2">
            <Link to="/dashboard">Dashboard</Link>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost ">
                <img className="w-6 h-6 rounded-full" src={user?.photoURL} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
              >
                <div className="p-3 text-center flex flex-col space-y-3">
                  <p className="text-lime-600">{user?.displayName}</p>

                  <p className="text-red-600" onClick={handleLogOut}>
                    Logout
                  </p>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-3 text-xs md:text-sm">
            {conditionalLinks}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
