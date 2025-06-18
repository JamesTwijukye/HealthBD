import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";


const Staff = () => {


  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      {/* Header */}
      <Header />
      {/* Lower body section */}
      <div className="h-full w-full flex items-center">
        {/* Sidebar */}
        <div className="h-full border-gray-100 ">
          <Sidebar />
        </div>
        {/* Main body */}
        <div className="bg-green-300 h-screen w-full">

        </div>
        {/* <DataTableComponent */}
      </div>
    </div>
  );

}

export default Staff;