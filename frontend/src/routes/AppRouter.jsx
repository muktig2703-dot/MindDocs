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
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
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
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>

<Route
  path="/register"
  element={
    <PublicRoute>
      <Register />
    </PublicRoute>
  }
/>

      </Route>

      <Route element={<DashboardLayout />}>

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route
  path="/documents"
  element={
    <ProtectedRoute>
      <Documents />
    </ProtectedRoute>
  }
/>

        <Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>

        <Route
  path="/favourites"
  element={
    <ProtectedRoute>
      <Favourites />
    </ProtectedRoute>
  }
/>

        <Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

        <Route
  path="/logout"
  element={
    <ProtectedRoute>
      <Logout />
    </ProtectedRoute>
  }
/>

      </Route>

    </Routes>
  );
}

export default AppRouter;