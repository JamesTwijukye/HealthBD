import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Patients = () => {
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
        <div className="w-full h-full">{/* Table */}</div>
      </div>
    </div>
  );
};

export default Patients;
