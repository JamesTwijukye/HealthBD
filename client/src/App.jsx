import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import { Toaster } from "sonner";
import Staff from "./pages/Staff.jsx";
import Patients from "./pages/Patients.jsx";
import Register from "./pages/Register.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import HealthScheduler from "./pages/HealthScheduler.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/schedule" element={<HealthScheduler />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </Router>
      <Toaster richColors />
    </>
  );
}

export default App;
