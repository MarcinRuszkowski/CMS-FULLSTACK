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
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layouts/Layout";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
