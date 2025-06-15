
// import MyCalendar from '../Calendar';
import Sidebar from '../SideBar/Sidebar';
import Header from '../Header/Header';
// import DataTableComponent from '../HealthScheduler/DataTableComponent';
import AddUser from './AddUser';

const Staff = () => {
   
      return (
        <div className="w-full h-screen max-h-screen overflow-hidden bg-white">
          {/* Header */}
          <Header/>
          {/* Lower body section */}
          <div className="h-full w-full flex items-center">
            {/* Sidebar */}
            <div className="h-full border-gray-100 ">
              <Sidebar/>
            </div>
            {/* Main body */}
            <AddUser/>
            {/* <DataTableComponent */}
          </div>
        </div>
      );
 
}

export default Staff;