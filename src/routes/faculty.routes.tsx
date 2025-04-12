import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferDashboard from "../pages/faculty/OfferDashboard";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offer Course",
    path: "offer-course",
    element: <OfferDashboard />,
  },
];