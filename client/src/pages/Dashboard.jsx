import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


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

      </div>
    </div>
  );
};

export default Dashboard;
