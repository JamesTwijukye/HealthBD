import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./pages/Signin";
import HealthScheduler from "./components/HealthScheduler/HealthScheduler";
import Patients from "./components/Patients/Patients";
import Staff from "./components/staff/Staff";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/schedule" element={<HealthScheduler />} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/staff" element={<Staff/>} />
      </Routes>
    </Router>
  );
}

export default App;
