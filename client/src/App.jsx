import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/Signin";
import { Toaster } from "sonner";
import Staff from "./pages/Staff.jsx";
import Patients from "./pages/Patients.jsx";
import RegisterPage from "./pages/Register.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import HealthScheduler from "./pages/HealthScheduler.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFoundPage from "./pages/404page.jsx";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/schedule" element={<HealthScheduler />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Toaster richColors />
    </>
  );
}

export default App;
