import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import History from "../pages/SearchHistory";
import Favourites from "../pages/Favourites";
import Settings from "../pages/Settings";
import Documents from "../pages/Documents";
import Logout from "../pages/Logout"
function AppRouter() {
  return (
    <Routes>

      <Route element={<PublicLayout />}>

        <Route
          path="/"
          element={<Landing />}
        />

      </Route>

      <Route element={<AuthLayout />}>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Route>

      <Route element={<DashboardLayout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route 
          path="/documents" 
          element={<Documents />} 
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/favourites"
          element={<Favourites />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/logout"
          element={<Logout />}
          />

      </Route>

    </Routes>
  );
}

export default AppRouter;