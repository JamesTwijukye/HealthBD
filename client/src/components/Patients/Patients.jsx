
import MyCalendar from '../Calendar';
import Sidebar from '../SideBar/Sidebar';
import Header from '../Header/Header';
import DataTableComponent from '../HealthScheduler/DataTableComponent';

const Patients = () => {
  return (
  
    <div className="w-full h-screen max-h-screen overflow-hidden bg-white">
      {/* Header */}
      <Header/>
      {/* Lower body section */}
      <div className="h-full w-full flex items-start">
        {/* Sidebar */}
        <div className="h-full border-gray-100 ">
          <Sidebar/>
        </div>
        {/* Main body */}
        <DataTableComponent/>
      </div>
    </div>
  );


}

export default Patients;