const flights = [
  {
    id: 1,

    flightNumber: "SH1234",
    airline: "SkyHigh Airlines",

    from: {
      code: "JFK",
      city: "New York",
      time: "10:00 AM",
    },

    to: {
      code: "LAX",
      city: "Los Angeles",
      time: "1:00 PM",
    },

    date: "July 1, 2028",

    status: "On Time",

    duration: "2 h 30 m",

    speed: "850",
    speedUnit: "km/h",

    altitude: "35,000",
    altitudeUnit: "feet",

    aircraft: {
      type: "Boeing 787 Dreamliner",
      registration: "N123SH",
    },
  },

  {
    id: 2,

    flightNumber: "FF2045",
    airline: "FlyFast Airways",

    from: {
      code: "LHR",
      city: "London",
      time: "8:00 AM",
    },

    to: {
      code: "JFK",
      city: "New York",
      time: "11:00 AM",
    },

    date: "July 1, 2028",

    status: "Delayed",

    duration: "8 h 00 m",

    speed: "820",
    speedUnit: "km/h",

    altitude: "34,000",
    altitudeUnit: "feet",

    aircraft: {
      type: "Airbus A350",
      registration: "G-FF204",
    },
  },

  {
    id: 3,

    flightNumber: "AJ3098",
    airline: "AeroJet",

    from: {
      code: "HND",
      city: "Tokyo",
      time: "2:00 PM",
    },

    to: {
      code: "SFO",
      city: "San Francisco",
      time: "8:00 AM",
    },

    date: "July 1, 2028",

    status: "In Air",

    duration: "9 h 30 m",

    speed: "890",
    speedUnit: "km/h",

    altitude: "37,000",
    altitudeUnit: "feet",

    aircraft: {
      type: "Boeing 777",
      registration: "JA3098",
    },
  },

  {
    id: 4,

    flightNumber: "NA4410",
    airline: "Nimbus Airlines",

    from: {
      code: "SYD",
      city: "Sydney",
      time: "6:00 PM",
    },

    to: {
      code: "SIN",
      city: "Singapore",
      time: "12:00 AM",
    },

    date: "July 1, 2028",

    status: "Scheduled",

    duration: "8 h 00 m",

    speed: "0",
    speedUnit: "km/h",

    altitude: "0",
    altitudeUnit: "feet",

    aircraft: {
      type: "Airbus A330",
      registration: "VH-N441",
    },
  },

  {
    id: 5,

    flightNumber: "JS5502",
    airline: "JetStream Aviation",

    from: {
      code: "DXB",
      city: "Dubai",
      time: "11:00 PM",
    },

    to: {
      code: "LHR",
      city: "London",
      time: "6:00 AM",
    },

    date: "July 1, 2028",

    status: "Scheduled",

    duration: "7 h 30 m",

    speed: "0",
    speedUnit: "km/h",

    altitude: "0",
    altitudeUnit: "feet",

    aircraft: {
      type: "Boeing 787 Dreamliner",
      registration: "A6-JS502",
    },
  },

  {
    id: 6,

    flightNumber: "CN6607",
    airline: "CloudNine Airlines",

    from: {
      code: "CDG",
      city: "Paris",
      time: "9:00 AM",
    },

    to: {
      code: "JFK",
      city: "New York",
      time: "12:00 PM",
    },

    date: "July 1, 2028",

    status: "Cancelled",

    duration: "8 h 10 m",

    speed: "0",
    speedUnit: "km/h",

    altitude: "0",
    altitudeUnit: "feet",

    aircraft: {
      type: "Airbus A350",
      registration: "F-CN607",
    },
  },

  {
    id: 7,

    flightNumber: "QW7712",
    airline: "QuickWing Air",

    from: {
      code: "HKG",
      city: "Hongkong",
      time: "11:00 PM",
    },

    to: {
      code: "LAX",
      city: "Los Angeles",
      time: "8:00 AM",
    },

    date: "July 1, 2028",

    status: "On Time",

    duration: "12 h 30 m",

    speed: "860",
    speedUnit: "km/h",

    altitude: "36,000",
    altitudeUnit: "feet",

    aircraft: {
      type: "Boeing 777",
      registration: "B-QW712",
    },
  },
];

/* ========================================
   STATUS OPTIONS
======================================== */

const flightStatuses = [
  "All",
  "On Time",
  "Delayed",
  "In Air",
  "Scheduled",
  "Cancelled",
];

/* ========================================
   EXPORTS
======================================== */

export {
  flights,
  flightStatuses,
};