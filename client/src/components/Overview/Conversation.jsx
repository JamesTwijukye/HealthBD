
import mine from "../../assets/ye.jpeg";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";

const Conversation = () => {
  return (
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
  )
}

export default Conversation