import MyCalendar from "../Calendar";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";

const HealthScheduler = () => {
  return (
    <div className="w-full h-screen  overflow-hidden bg-white">
      {/* Header */}
      <Header />
      {/* Lower body section */}
      <div className="h-full w-full flex items-start">
        {/* Sidebar */}
        <div className="h-full w-1/4 border-gray-100 ">
          <Sidebar />
        </div>

        {/* Main body */}
        <div className="w-full h-full">
          <MyCalendar />
        </div>
      </div>
    </div>
  );
};
export default HealthScheduler;
