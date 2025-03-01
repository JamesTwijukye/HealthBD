import ye from "../../assets/ye.jpeg";
import { HiMiniCheckCircle } from "react-icons/hi2";
const UpcomingAppointment = () => {
  return (
    <div className="w-full border border-1 flex flex-row justify-between items-center p-2 mx-2 my-1">
      <div className="flex flex-row gap-3">
        <img src={ye} className="h-5 w-5 rounded-full" />
        <div className="flex flex-col gap-2">
          <p className="text-xs">
            <span className="text-green-700">Darlene Robertson</span> |
            darlr@gmail.com
          </p>
        </div>
      </div>
      <div className=" h-full  text-xs flex flex-col ">
        <p>Time 09:25 EST</p>
      </div>
      <HiMiniCheckCircle className="text-green-700 cursor-pointer" />
    </div>
  );
};

export default UpcomingAppointment;
