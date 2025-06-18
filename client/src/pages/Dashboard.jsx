import { FaCalendarDays, FaPlus } from "react-icons/fa6";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import mine from "../assets/ye.jpeg";
import web from "../assets/web.png";
import UpcomingAppointment from "../components/UpcomingAppointment";
import { IoMdTimer } from "react-icons/io";
import Task from "../components/Task";

const Dashboard = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden bg-white">
      {/* Header */}
      <Header />
      {/* Lower body section */}
      <div className="h-full w-full flex items-center">
        {/* Sidebar */}
        <div className="w-1/4 h-full border-r border-gray-100">
          <Sidebar />
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col">
            <div className="flex flex-row w-full bg-gray-100  ">
              <div className="rounded-md w-1/4 flex flex-col p-2">
                <p className="text-bg-black text-sm font-bold mb-2 flex-start">
                  Up coming appointments-Today
                </p>
                <img src={web} />
              </div>
              <div className=" h-full w-full flex flex-col bg-white">
                <div className="w-full flex justify-between text-xs">
                  <p className="text-black font-semibold flex flex-start ml-3">
                    Up coming appointments-Today
                  </p>
                  <div className="flex flex-end">
                    <p className="text-blue-300 font-bold mr-2 underline ">
                      view all appointments
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <UpcomingAppointment />
                  <UpcomingAppointment />
                  <UpcomingAppointment />
                  <UpcomingAppointment />
                  <UpcomingAppointment />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 h-2/5 w-full my-2">
              <div className="border border-1 h-6 w-full flex justify-between bg-white">
                <h1 className="text-xs ml-2">Patient Conversation</h1>
                <div
                  className="flex
          flex-row items-center gap-1 mr-3 bg-gray-300 w-20 rounded-xl p-2 text-xs text-black border border-3"
                >
                  <FaPlus />
                  <p>Create</p>
                </div>
              </div>
              <div className="border border-1 h-6 w-full bg-white my-1 flex flex-row justify-between items-center gap-4 px-4">
                <div className="flex items-center gap-2">
                  <img src={mine} alt="" className="h-5 w-5 rounded-full" />
                  <p className="text-sm font-medium">MarkMckinney</p>
                </div>

                <div className="flex-grow text-xs text-gray-700">
                  <p>This is the first row am currently on please</p>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <FaCalendarDays />
                  <p>03 May, 2024</p>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <IoMdTimer />
                  <p>07:06 pm</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-2/5 w-full my-2">
              <div className=" bg-white border border-1 h-6 w-full flex justify-between">
                <h1 className="text-xs ml-2">Task</h1>
                <div className="flex flex-row justify-center items-center gap-1 mr-3 bg-blue-100 w-20 h-5  rounded-xl p-2 text-xs text-black border border-3">
                  <FaPlus />
                  <p>Create</p>
                </div>
              </div>
              <div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-evenly gap-2">
                <Task />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
