import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/Client";
// import LoginPage from "./pages/Auth/Login";
// import Template from "./pages/Template";
// import Dashboard from "./pages/Admin/Dashboard";
// import DashboardViewer from "./pages/Viewer/Dashboard";
// import Users from "./pages/Admin/Users";
// import Product from "./pages/Admin/product";
// import Catalogue from "./pages/Admin/product/Catalog";
// import DefaultLayout from "./components/Admin/layout/DefaultLayout";
// import DefaultLayoutViewer from "./components/Viewer/layout/DefaultLayout";
// import TemplateView from "./pages/Viewer/Template/TemplateViewer";
// import ViewerSubs from "./pages/Viewer/Subscribe/ViewerSubs";
// import DashboardAnalytics from "./pages/Viewer/Subscribe/Analytics/DashboardAnalytics";
export default function Mainrouter() {
//   const role = localStorage.getItem("role");

  return (
    <Routes>
      {/* Public routes accessible to all users */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/template" element={<Template />} /> */}

      {/* Redirect to login page if not admin */}
      {/* {role !== "admin" && (
        <Route path="/admin/dashboard" element={<Navigate to="/login" />} />
      )} */}

      {/* Admin routes */}
      {/* {role === "admin" && (
        <Route path="/admin" element={<DefaultLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="product" element={<Product />} />
          <Route path="product/catalogue" element={<Catalogue />} />
        </Route>
      )}

      {role === "viewer" && (
        <Route path="/viewer" element={<DefaultLayoutViewer />}>
          <Route path="dashboard" element={<DashboardViewer />} />
          <Route path="template" element={<TemplateView />} />
          <Route path="subs" element={<ViewerSubs />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
        </Route>
      )} */}

      {/* Handle unknown paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
