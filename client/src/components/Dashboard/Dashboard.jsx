import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import Overview from "../Overview/Overview";

const Dashboard = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden bg-white">
      {/* Header */}
      <Header />
      {/* Lower body section */}
      <div className="h-full w-full flex items-center">
        {/* Sidebar */}
        <div className="h-full border-gray-100 ">
          <Sidebar />
        </div>
        {/* Main body */}
        <Overview />
      </div>
    </div>
  );
};

export default Dashboard;
