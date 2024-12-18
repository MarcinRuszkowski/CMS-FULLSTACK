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
import EditEmployeePage from "./pages/EditEmployeePage";
import AbsencePlannerPage from "./pages/AbsencePlannerPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./layouts/Layout";
import ThemeController from "./layouts/ThemeController";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <DashboardPage />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <DashboardPage />
      </Layout>
    ),
  },
  {
    path: "/employees",
    element: (
      <Layout>
        <EmployeesPage />
      </Layout>
    ),
  },
  {
    path: "/absence",
    element: (
      <Layout>
        <AbsencePage />
      </Layout>
    ),
  },
  {
    path: "/absence/detail",
    element: (
      <Layout>
        <AbsenceDetailsPage />
      </Layout>
    ),
  },
  {
    path: "/absence/absencePlanner",
    element: (
      <Layout>
        <AbsencePlannerPage />
      </Layout>
    ),
  },
  {
    path: "/aboutCompany/docs/companyDocs",
    element: (
      <Layout>
        <CompanyDocsPage />
      </Layout>
    ),
  },
  {
    path: "/aboutCompany/departments",
    element: (
      <Layout>
        <DepartmentsPage />
      </Layout>
    ),
  },
  {
    path: "/eventsCalendar",
    element: (
      <Layout>
        <EventsCalendarPage />
      </Layout>
    ),
  },
  {
    path: "/vacationForm",
    element: (
      <Layout>
        <VacationFormPage />
      </Layout>
    ),
  },
  {
    path: "/failure",
    element: (
      <Layout>
        <FailurePage />
      </Layout>
    ),
  },
  {
    path: "/aboutCompany/docs",
    element: (
      <Layout>
        <DocsPage />
      </Layout>
    ),
  },
  {
    path: "/aboutCompany/mainDocs",
    element: (
      <Layout>
        <MainDocsDBPage />
      </Layout>
    ),
  },
  {
    path: "/aboutCompany",
    element: (
      <Layout>
        <AboutCompanyPage />
      </Layout>
    ),
  },
  {
    path: "/adminPanel",
    element: (
      <Layout>
        <AdminPanel />
      </Layout>
    ),
  },
  {
    path: "/adminPanel/addEmployee",
    element: (
      <Layout>
        <AddEmployeePage />
      </Layout>
    ),
  },
  {
    path: "/adminPanel/editEmployee",
    element: (
      <Layout>
        <EditEmployeePage />
      </Layout>
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
  {
    path: "/signup",
    element: (
      <div className="relative">
        <div className="absolute top-5 right-8">
          <ThemeController />
        </div>
        <div className="absolute top-20 w-full">
          <SignupPage />
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
