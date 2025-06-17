import Sidebar from "../SideBar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import Overview from "../Overview/Overview.jsx";
import { Routes, Route } from "react-router-dom";
import HealthScheduler from "../HealthScheduler/HealthScheduler.jsx"; 
import Patients from "../Patients/Patients.jsx";
import Staff from "../../pages/Staff.jsx";
const Dashboard = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden bg-white">
      {/* Header */}
      <Header />
      {/* Lower body section */}
      <div className="h-full w-full flex items-center">
        {/* Sidebar */}
        <div className="w-[20%] h-full border-r border-gray-100">
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="w-[80%] h-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/schedule" element={<HealthScheduler />} />
            <Route path="/patients" element={<Patients />} />
            {/*<Route path="/staff" element={<AddUser />} />*/}
            

          </Routes>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
