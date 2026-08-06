/* ========================================
   DASHBOARD STATISTICS
======================================== */

export const dashboardStats = [
  {
    id: "completed",
    title: "Completed Flights",
    value: 125,
    percentage: "+13.5%",
  },
  {
    id: "active",
    title: "Active Flights",
    value: 80,
    percentage: "+3.66%",
  },
  {
    id: "cancelled",
    title: "Canceled Flights",
    value: 25,
    percentage: "-1.4%",
  },
  {
    id: "revenue",
    title: "Total Revenue",
    value: "$15,000",
    percentage: "+5.4%",
  },
];

/* ========================================
   TICKET SALES
======================================== */

export const ticketSalesPeriods = {
  week: {
    label: "This Week",
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    data: [8, 10, 9, 11, 10, 12, 9],
    total: "12,500",
    highlightIndex: 3,
  },

  lastWeek: {
    label: "Last Week",
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    data: [7, 9, 8, 10, 9, 11, 8],
    total: "11,300",
    highlightIndex: 5,
  },

  month: {
    label: "This Month",
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [10, 12, 11, 13],
    total: "48,600",
    highlightIndex: 3,
  },
};

/* ========================================
   FLIGHT SCHEDULE
======================================== */

export const flightSchedulePeriods = {
  week: {
    label: "This Week",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    completed: [20, 30, 28, 45, 38, 55, 48],
    pending: [15, 22, 20, 35, 30, 42, 37],
  },

  lastWeek: {
    label: "Last Week",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    completed: [18, 25, 24, 39, 34, 48, 43],
    pending: [12, 18, 17, 29, 25, 36, 31],
  },

  month: {
    label: "This Month",
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    completed: [38, 47, 55, 63],
    pending: [27, 34, 39, 44],
  },
};

/* ========================================
   DESTINATIONS
======================================== */

export const destinationPeriods = {
  month: {
    label: "This Month",
    destinations: [
      { country: "Mexico", percentage: "24%" },
      { country: "Canada", percentage: "18%" },
      { country: "United Kingdom", percentage: "16%" },
      { country: "India", percentage: "12%" },
      { country: "France", percentage: "9%" },
      { country: "Australia", percentage: "7%" },
    ],
  },

  lastMonth: {
    label: "Last Month",
    destinations: [
      { country: "Canada", percentage: "22%" },
      { country: "Mexico", percentage: "19%" },
      { country: "India", percentage: "17%" },
      { country: "United Kingdom", percentage: "14%" },
      { country: "Australia", percentage: "10%" },
      { country: "France", percentage: "8%" },
    ],
  },

  year: {
    label: "This Year",
    destinations: [
      { country: "United Kingdom", percentage: "26%" },
      { country: "Mexico", percentage: "21%" },
      { country: "Canada", percentage: "18%" },
      { country: "India", percentage: "15%" },
      { country: "France", percentage: "11%" },
      { country: "Australia", percentage: "9%" },
    ],
  },
};

/* ========================================
   AIRLINES
======================================== */

export const airlines = [
  {
    id: 1,
    name: "SkyHigh Airlines",
    value: 35,
    className: "yellow",
  },
  {
    id: 2,
    name: "FlyFast Airways",
    value: 30,
    className: "black",
  },
  {
    id: 3,
    name: "AeroJet",
    value: 20,
    className: "gray",
  },
  {
    id: 4,
    name: "Nimbus Airlines",
    value: 15,
    className: "light",
  },
];

/* ========================================
   TOP ROUTES
======================================== */

export const topRoutes = [
  {
    id: 1,
    passengers: "140,000",
    route: "Hong Kong (HKG) → Los Angeles (LAX)",
    distance: "11,002 km",
    progress: 100,
  },
  {
    id: 2,
    passengers: "130,000",
    route: "Frankfurt (FRA) → Bangkok (BKK)",
    distance: "8,027 km",
    progress: 85,
  },
  {
    id: 3,
    passengers: "120,000",
    route: "Los Angeles (LAX) → Tokyo (HND)",
    distance: "8,736 km",
    progress: 75,
  },
  {
    id: 4,
    passengers: "110,000",
    route: "Singapore (SIN) → London (LHR)",
    distance: "10,885 km",
    progress: 65,
  },
];

/* ========================================
   ACTIVITY
======================================== */

export const activities = [
  {
    id: 1,
    text: "Passenger booked flight CloudNine Airlines (CDG-JFK)",
    time: "23 Jul, 2024",
  },
  {
    id: 2,
    text: "Ellen Winston upgraded seat for flight QW-HKG-BKK",
    time: "1 hour ago",
  },
  {
    id: 3,
    text: "Roger Piston requested cancellation for flight SH-FRA-BKK",
    time: "2 hours ago",
  },
  {
    id: 4,
    text: "Paula Ortega completed payment for flight FLY-LAX-HND",
    time: "3 hours ago",
  },
];

/* ========================================
   BOOKINGS
======================================== */

export const bookings = [
  {
    id: 1,
    airline: "CloudNine Airlines",
    bookingCode: "CN-KL2345",
    date: "July 15, 2024",
    passengers: 190,
    departureTime: "9:00 AM",
    departureCity: "Paris",
    departureCode: "CDG",
    arrivalTime: "12:00 PM",
    arrivalCity: "New York",
    arrivalCode: "JFK",
    duration: "8 hours",
  },
  {
    id: 2,
    airline: "QuickWing Air",
    bookingCode: "QW-MN6789",
    date: "July 16, 2024",
    passengers: 210,
    departureTime: "11:00 PM",
    departureCity: "Hong Kong",
    departureCode: "HKG",
    arrivalTime: "8:00 AM",
    arrivalCity: "Los Angeles",
    arrivalCode: "LAX",
    duration: "14 hours",
  },
  {
    id: 3,
    airline: "SkyHigh Airlines",
    bookingCode: "SH-OP3456",
    date: "July 17, 2024",
    passengers: 180,
    departureTime: "7:00 AM",
    departureCity: "Frankfurt",
    departureCode: "FRA",
    arrivalTime: "3:00 PM",
    arrivalCity: "Bangkok",
    arrivalCode: "BKK",
    duration: "10 hours",
  },
  {
    id: 4,
    airline: "FlyFast Airways",
    bookingCode: "FF-QR7890",
    date: "July 18, 2024",
    passengers: 170,
    departureTime: "5:00 PM",
    departureCity: "Los Angeles",
    departureCode: "LAX",
    arrivalTime: "10:00 PM",
    arrivalCity: "Tokyo",
    arrivalCode: "HND",
    duration: "11 hours",
  },
  {
    id: 5,
    airline: "AeroJet",
    bookingCode: "AJ-ST0123",
    date: "July 19, 2024",
    passengers: 150,
    departureTime: "6:00 PM",
    departureCity: "Singapore",
    departureCode: "SIN",
    arrivalTime: "12:00 PM",
    arrivalCity: "London",
    arrivalCode: "LHR",
    duration: "13 hours",
  },
];

/* ========================================
   PAYMENTS
======================================== */

export const payments = [
  {
    id: 1,
    name: "Paris Milton",
    bookingCode: "CN-K22345",
    date: "2028-07-01",
    route: "CDG-JFK",
    airline: "CloudNine Airlines",
    amount: "$500.00",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Eero Winston",
    bookingCode: "QW-MH6789",
    date: "2028-07-01",
    route: "HKG-LAX",
    airline: "QuickWing Air",
    amount: "$750.00",
    status: "Pending",
  },
  {
    id: 3,
    name: "Roger Pilton",
    bookingCode: "SH-OP3456",
    date: "2028-07-01",
    route: "FRA-BKK",
    airline: "SkyHigh Airlines",
    amount: "$650.00",
    status: "Confirmed",
  },
  {
    id: 4,
    name: "Paula Ortega",
    bookingCode: "FP-QR7890",
    date: "2028-07-01",
    route: "LAX-HND",
    airline: "FlyFast Airways",
    amount: "$800.00",
    status: "Cancelled",
  },
  {
    id: 5,
    name: "Jackie Long",
    bookingCode: "AJ-ST0123",
    date: "2028-07-01",
    route: "SIN-LHR",
    airline: "AeroJet",
    amount: "$900.00",
    status: "Confirmed",
  },
];