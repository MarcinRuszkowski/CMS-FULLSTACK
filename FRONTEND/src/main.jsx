import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";

import MainDocsDBPage from "./pages/MainDocsDBPage";
import DocsPage from "./pages/DocsPage";
import FailurePage from "./pages/FailuresPage";
import VacationFormPage from "./pages/VacationFormPage";
import EventsCalendarPage from "./pages/EventsCalendarPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import CompanyDocsPage from "./pages/CompanyDocsPage";
import DashboardPage from "./pages/DashboardPage";
import AbsenceDetailsPage from "./pages/AbsenceDetailsPage";
import AbsencePage from "./pages/AbsencePage";
import EmployeesPage from "./pages/EmployeesPage";
import AboutCompanyPage from "./pages/AboutCompanyPage";
import AdminPanel from "./pages/AdminPanel";
import AddEmployeePage from "./pages/AddEmployeePage";
import AbsencePlannerPage from "./pages/AbsencePlannerPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layouts/Layout";
import ThemeController from "./layouts/ThemeController";
// import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <Layout>
        <DashboardPage />
      </Layout>
      // </PrivateRoute>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/employees",
    element: (
      // <PrivateRoute>
      <Layout>
        <EmployeesPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/absence",
    element: (
      // <PrivateRoute>
      <Layout>
        <AbsencePage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/absence/detail",
    element: (
      // <PrivateRoute>
      <Layout>
        <AbsenceDetailsPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/absence/absencePlanner",
    element: (
      // <PrivateRoute>
      <Layout>
        <AbsencePlannerPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/aboutCompany/docs/companyDocs",
    element: (
      // <PrivateRoute>
      <Layout>
        <CompanyDocsPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/aboutCompany/departments",
    element: (
      // <PrivateRoute>
      <Layout>
        <DepartmentsPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/eventsCalendar",
    element: (
      // <PrivateRoute>
      <Layout>
        <EventsCalendarPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/vacationForm",
    element: (
      // <PrivateRoute>
      <Layout>
        <VacationFormPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/failure",
    element: (
      // <PrivateRoute>
      <Layout>
        <FailurePage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/aboutCompany/docs",
    element: (
      // <PrivateRoute>
      <Layout>
        <DocsPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/aboutCompany/mainDocs",
    element: (
      // <PrivateRoute>
      <Layout>
        <MainDocsDBPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/aboutCompany",
    element: (
      // <PrivateRoute>
      <Layout>
        <AboutCompanyPage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/adminPanel",
    element: (
      // <PrivateRoute>
      <Layout>
        <AdminPanel />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/adminPanel/addEmployee",
    element: (
      // <PrivateRoute>
      <Layout>
        <AddEmployeePage />
      </Layout>
      // </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="relative">
        <div className="absolute top-5 right-8">
          <ThemeController />
        </div>
        <div className="absolute top-20 w-full">
          <LoginPage />
        </div>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
