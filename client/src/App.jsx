import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./pages/Signin";
import HealthScheduler from "./components/HealthScheduler/HealthScheduler";
import Patients from "./components/Patients/Patients";
import Login from "./components/Login&Register/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import {Toaster} from "sonner";
import AddUser from "./components/staff/AddUser";

function App() {
  return (
      <>
     
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/schedule" element={<HealthScheduler />} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/staff" element={<AddUser/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/AddUser" element={<AddUser/>}/>

      </Routes>
    </Router>
    <Toaster richColors/>
      </>
  );
}

export default App;
