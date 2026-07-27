export const ticketSales = [
  3,
  4,
  3.5,
  5,
  4.5,
  4,
  5,
];

export const flightSchedule = [
  120,
  110,
  150,
  100,
  170,
  130,
  140,
  125,
];

export const airlineDistribution = [
  35,
  30,
  20,
  15,
];

/* ========================================
   TOP ROUTES
======================================== */

export const topRoutes = [
  {
    passengers: "140,000",
    route: "Hong Kong (HKG) → Los Angeles (LAX)",
    distance: "11,002 km",
    progress: 100,
  },
  {
    passengers: "130,000",
    route: "Frankfurt (FRA) → Bangkok (BKK)",
    distance: "8,027 km",
    progress: 85,
  },
  {
    passengers: "120,000",
    route: "Los Angeles (LAX) → Tokyo (HND)",
    distance: "8,736 km",
    progress: 75,
  },
  {
    passengers: "110,000",
    route: "Singapore (SIN) → London (LHR)",
    distance: "10,885 km",
    progress: 65,
  },
];

/* ========================================
   RECENT ACTIVITY
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
    airline: "CloudNine Airlines",
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
    airline: "QuickWing Air",
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
    airline: "SkyHigh Airlines",
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
    airline: "FlyFast Airways",
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
    airline: "AeroJet",
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
    name: "Paris Milton",
    bookingCode: "CN-K22345",
    date: "2028-07-01",
    route: "CDG-JFK",
    airline: "CloudNine Airlines",
    amount: "$500.00",
    status: "Confirmed",
  },

  {
    name: "Eero Winston",
    bookingCode: "QW-MH6789",
    date: "2028-07-01",
    route: "HKG-LAX",
    airline: "QuickWing Air",
    amount: "$750.00",
    status: "Pending",
  },

  {
    name: "Roger Pilton",
    bookingCode: "SH-OP3456",
    date: "2028-07-01",
    route: "FRA-BKK",
    airline: "SkyHigh Airlines",
    amount: "$650.00",
    status: "Confirmed",
  },

  {
    name: "Paula Ortega",
    bookingCode: "FP-QR7890",
    date: "2028-07-01",
    route: "LAX-HND",
    airline: "FlyFast Airways",
    amount: "$800.00",
    status: "Cancelled",
  },

  {
    name: "Jackie Long",
    bookingCode: "AJ-ST0123",
    date: "2028-07-01",
    route: "SIN-LHR",
    airline: "AeroJet",
    amount: "$900.00",
    status: "Confirmed",
  },
];