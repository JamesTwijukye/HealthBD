import ListItem from "./ListItem";
import { GrOverview } from "react-icons/gr";
import { MdSick } from "react-icons/md";
import { AiTwotoneSchedule } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import dp from "../assets/dp.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" h-full sm:flex hidden justify-evenly flex-col text-black bg-white border-gray-100 shadow-lg  ">
      <div className="w-full flex flex-col items-center justify-center mb-12">
        <img
          src={dp}
          className="w-16 border rounded-lg shadow-lg mt-4"
          alt={"display-image"}
        />
        <div className="flex flex-col items-center mt-3">
          <h3 className="text-sm font-bold">Dr. Shama Yunice</h3>
          <p className="text-sm text-gray-500">Doctor</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <ListItem icon={<GrOverview />} item="Overview" link _to="/" />
        <ListItem
          icon={<AiTwotoneSchedule />}
          item="Schedule"
          link_to="/schedule"
        />
        <ListItem icon={<MdSick />} item="Patients" link_to="/patients" />
        <ListItem icon={<RiTeamFill />} item="Staff" link_to="/staff" />
      </div>

      {/* logout button */}
      <Link to="/Signin">
        <div className=" bg-green-600 h-[30px] w-[180px] text-white text-sm rounded-md py-3 px-3 flex justify-center items-center  ml-4 absolute bottom-0 left-0 right-0 mb-8">
          logout
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
