import ListItem from "./ListItem";
import { GrOverview } from "react-icons/gr";
import { MdSick } from "react-icons/md";
import { AiTwotoneSchedule } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import dp from "../../assets/dp.png";

const Sidebar = () => {
  return (
    <div className="h-full w-full flex flex-col items-start text-black bg-white border-gray-100 shadow-lg">
      <div className="w-full flex flex-col items-center justify-center mb-12">
        <img src={dp} className="w-16 border rounded-lg shadow-lg mt-4" />
        <div className="flex flex-col items-center mt-3">
          <h3 className="text-sm font-bold">Dr. Shama Yunice</h3>
          <p className="text-sm text-gray-500">Doctor</p>
        </div>
      </div>
      <ListItem icon={<GrOverview />} item="Overview" link_to="/" />
      <ListItem
        icon={<AiTwotoneSchedule />}
        item="Schedule"
        link_to="/schedule"
      />
      <ListItem icon={<MdSick />} item="Patients" link_to="/patients" />
      <ListItem icon={<RiTeamFill />} item="Staff" link_to="/staff" />
    </div>
  );
};

export default Sidebar;
