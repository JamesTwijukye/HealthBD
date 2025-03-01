import { FaPlus } from "react-icons/fa6";
import web from "../../assets/web.png";


import UpcomingAppointment from "./UpcomingAppointment";
import Task from "./Task";
import Conversation from "./Conversation";
const Overview = () => {
  return (
    <div className="h-full w-full flex flex-col  p-6">
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
      <Conversation/>
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
        <Task/>
        </div>
      
      </div>
    </div>
  );
};

export default Overview;
