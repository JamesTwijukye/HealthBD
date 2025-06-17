import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./pages/Signin";
import HealthScheduler from "./components/HealthScheduler/HealthScheduler";

import {Toaster} from "sonner";
import UserList from "./components/Users/UserList";
import Staff from "./pages/Staff.jsx";

function App() {
  return (
      <>
     
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/schedule" element={<HealthScheduler />} />
        <Route path="/Userlist" element={<UserList/>} />
        <Route path="/staff" element={<Staff />} />

        
      </Routes>
    </Router>
    <Toaster richColors/>
      </>
  );
}

export default App;
