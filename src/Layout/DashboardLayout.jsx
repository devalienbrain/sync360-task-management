import {
  FaCalendar,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Sync360 | Dashboard</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="flex flex-col md:flex-row">
        {/* dashboard side bar */}
        <div className="w-full md:w-64 min-h-screen bg-blue-50 text-red-700 text-xl font-semibold pt-20">
          <ul className="menu p-4">
            <div className="divider"></div>
            <li>
              <NavLink to="/dashboard/addAPet">
                <FaAd></FaAd>
                <p className="hover:underline">Add a pet</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addedPets">
                <FaShoppingCart></FaShoppingCart>
                <p className="hover:underline">My Added Pets</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaUtensils></FaUtensils>
                <p className="hover:underline">Adoption Request</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/createDonation">
                <FaCalendar></FaCalendar>
                <p className="hover:underline">Create Donation Campaign</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/createdCampaigns">
                <FaSearch></FaSearch>
                <p className="hover:underline">My Donation Campaigns</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <FaList></FaList>
                <p className="hover:underline">My Donations</p>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;