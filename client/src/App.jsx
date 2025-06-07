import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./pages/Signin";
import HealthScheduler from "./components/HealthScheduler/HealthScheduler";
import Patients from "./components/Patients/Patients";
import Staff from "./components/staff/Staff";
import Login from "./components/Login&Register/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/schedule" element={<HealthScheduler />} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
       


      </Routes>
    </Router>
  );
}

export default App;
