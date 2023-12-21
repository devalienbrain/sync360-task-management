import { NavLink } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
const Navbar = () => {
  const links = (
    <>
      <div className="flex justify-between items-center gap-3 md:gap-7 font-bold">
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
            Sync360
            <span className="border border-zinc-200/50 rounded">
              <RxSlash />
            </span>
          </div>
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "bg-zinc-400/25 py-2 px-4 rounded-xl"
                : "py-2 px-4"
          }
        >
          Tasks
        </NavLink>

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
    <div>
      <div className="flex justify-center items-center gap-3 text-xs md:text-sm">
        {links}
      </div>
    </div>
  );
};

export default Navbar;
