import Sidebar from "./Sidebar";
import logo from "./../assets/bd.png";
import DataTableComponent from "./DataTableComponent";

const DataTables = () => {
  return (
    <div className=" h-full w-full  ">
      <div className="mb-3 h-10  w-full flex  ">
        <div className="w-1/2 h-full flex ">
          <div className="  mt-3 ml-3">
            <img src={logo} alt="" className="h-15 w-10 " />
          </div>
          <div className="  mt-3 ml-3">
            <p>HealthBD</p>
          </div>
          <div className="w-1/2 h-10   ml-2"></div>
        </div>
        <div className="flex  h-10 w-full gap-2  justify-end bg-white">
          <div className=" ml-3 w-1/4 h-10  flex "></div>
          <div className="w-13 h-10 -200 ">
            <select name="" id="cars">
              <option value="English">English</option>
              <option value="Swahili">Swahili</option>
              <option value="French">French</option>
              <option value="Kinyarwanda">Kinyarwanda</option>
            </select>
          </div>
          <div className="w-1/4 h-10 flex flex-row mr-1">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="h-4/5 w-full flex mb-1
        flex-row items-center "
      >
        <div
          className="h-full w-1/4 
        bg-blue-100 "
        >
          <Sidebar />
        </div>
        <div
          className="h-full w-3/4 bg-yellow-300
         flex flex-col  
       p-2"
        >
          <DataTableComponent />
        </div>
      </div>
    </div>
  );
};

export default DataTables;
