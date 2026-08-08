import {
  FiGrid,
  FiBook,
  FiCalendar,
  FiCreditCard,
  FiMessageCircle,
  FiMap,
  FiTag,
} from "react-icons/fi";

const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: FiGrid,
    link: "/dashboard",
  },

  {
    id: 2,
    title: "Bookings",
    icon: FiBook,
    link: "/bookings",
  },

  {
    id: 3,
    title: "Schedule",
    icon: FiCalendar,
    link: "/schedule",
  },

  {
    id: 4,
    title: "Payments",
    icon: FiCreditCard,
    link: "/payments",
  },

  {
    id: 5,
    title: "Messages",
    icon: FiMessageCircle,
    link: "/messages",
    badge: 5,
  },

  {
    id: 6,
    title: "Flight Tracking",
    icon: FiMap,
    link: "/flight-tracking",
  },

  {
    id: 7,
    title: "Deals",
    icon: FiTag,
    link: "/deals",
  },
];

export default menu;