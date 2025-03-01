

import { FaCalendarDays } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";

const Task = () => {
  return (
    <div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-evenly gap-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <p className="text-sm font-medium">Mark McKinney</p>
              </div>
    
              <div className="flex-grow text-xs text-gray-700">
                <p>This is the first row I am currently on, please.</p>
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
  )
}

export default Task