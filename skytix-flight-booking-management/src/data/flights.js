export const flights = [
  {
    id: 1,

    airline: "SkyHigh Airlines",
    code: "SH-ZY6789",
    status: "On Time",

    departure: "6:00 AM",
    arrival: "9:00 PM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 350,

    passengers: 207,
    totalPassengers: 220,

    aircraft: "Boeing 787 Dreamliner",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "13 hours",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "6:00 AM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal B",
    },

    arrivalDetails: {
      time: "9:00 PM",
      date: "15 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 4",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 2,

    airline: "FlyFast Airways",
    code: "FF-LV3456",
    status: "On Time",

    departure: "8:00 AM",
    arrival: "11:30 AM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 400,

    passengers: 185,
    totalPassengers: 200,

    aircraft: "Airbus A350",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "3 hours 30 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "8:00 AM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 3",
    },

    arrivalDetails: {
      time: "11:30 AM",
      date: "15 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 5",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 3,

    airline: "AeroJet",
    code: "AJ-WX9012",
    status: "On Time",

    departure: "10:00 AM",
    arrival: "12:45 PM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 450,

    passengers: 174,
    totalPassengers: 190,

    aircraft: "Boeing 777",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "2 hours 45 minutes",

    flightClass: "Economy",
    seatLayout: "3-4-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "10:00 AM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 4",
    },

    arrivalDetails: {
      time: "12:45 PM",
      date: "15 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 7",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 4,

    airline: "JetStream Aviation",
    code: "JS-AB4567",
    status: "On Time",

    departure: "10:30 AM",
    arrival: "1:00 PM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 600,

    passengers: 196,
    totalPassengers: 215,

    aircraft: "Boeing 787-9",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "2 hours 30 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "10:30 AM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 5",
    },

    arrivalDetails: {
      time: "1:00 PM",
      date: "15 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 4",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 5,

    airline: "Nimbus Airlines",
    code: "NA-CD7890",
    status: "On Time",

    departure: "11:00 AM",
    arrival: "2:00 PM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 600,

    passengers: 201,
    totalPassengers: 220,

    aircraft: "Airbus A330",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "3 hours",

    flightClass: "Economy",
    seatLayout: "2-4-2 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "11:00 AM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 6",
    },

    arrivalDetails: {
      time: "2:00 PM",
      date: "15 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 8",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  /* ========================================
     MORE LAX -> JFK FLIGHTS
  ======================================== */

  {
    id: 6,

    airline: "CloudNine Airlines",
    code: "CN-MN8901",
    status: "On Time",

    departure: "12:30 PM",
    arrival: "8:45 PM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 520,

    passengers: 192,
    totalPassengers: 210,

    aircraft: "Boeing 787-8",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "8 hours 15 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "12:30 PM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 2",
    },

    arrivalDetails: {
      time: "8:45 PM",
      date: "15 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 4",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 7,

    airline: "QuickWing Air",
    code: "QW-XY2345",
    status: "Delayed",

    departure: "1:45 PM",
    arrival: "11:30 PM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 480,

    passengers: 202,
    totalPassengers: 225,

    aircraft: "Airbus A321neo",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "9 hours 45 minutes",

    flightClass: "Economy",
    seatLayout: "3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "1:45 PM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "11:30 PM",
      date: "15 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 5",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Paid WiFi",
    },
  },

  {
    id: 8,

    airline: "SuperJet Airways",
    code: "SJ-KL5521",
    status: "On Time",

    departure: "3:00 PM",
    arrival: "2:20 AM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 570,

    passengers: 188,
    totalPassengers: 205,

    aircraft: "Airbus A330-900",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "11 hours 20 minutes",

    flightClass: "Economy",
    seatLayout: "2-4-2 configuration",

    stops: 2,
    transitLabel: "2+ Transit",

    departureDetails: {
      time: "3:00 PM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal B",
    },

    arrivalDetails: {
      time: "2:20 AM",
      date: "16 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 7",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 9,

    airline: "SkyHigh Airlines",
    code: "SH-RT6240",
    status: "Boarding",

    departure: "4:30 PM",
    arrival: "12:50 AM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 650,

    passengers: 211,
    totalPassengers: 230,

    aircraft: "Boeing 777-300ER",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "8 hours 20 minutes",

    flightClass: "Business",
    seatLayout: "1-2-1 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "4:30 PM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal B",
    },

    arrivalDetails: {
      time: "12:50 AM",
      date: "16 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 4",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Premium Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 10,

    airline: "FlyFast Airways",
    code: "FF-JK7820",
    status: "On Time",

    departure: "5:45 PM",
    arrival: "1:35 AM",

    fromCode: "LAX",
    toCode: "JFK",

    price: 620,

    passengers: 179,
    totalPassengers: 195,

    aircraft: "Airbus A350-900",

    bookingDate: "July 1, 2028",
    flightDate: "2028-07-15",

    duration: "7 hours 50 minutes",

    flightClass: "Business",
    seatLayout: "1-2-1 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "5:45 PM",
      date: "15 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 3",
    },

    arrivalDetails: {
      time: "1:35 AM",
      date: "16 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 5",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Premium Meal",
      wifi: "Free WiFi",
    },
  },

  /* ========================================
     NEW YORK -> LOS ANGELES
  ======================================== */

  {
    id: 11,

    airline: "CloudNine Airlines",
    code: "CN-NY2451",
    status: "On Time",

    departure: "7:15 AM",
    arrival: "10:35 AM",

    fromCode: "JFK",
    toCode: "LAX",

    price: 410,

    passengers: 184,
    totalPassengers: 210,

    aircraft: "Boeing 787-9",

    bookingDate: "July 2, 2028",
    flightDate: "2028-07-16",

    duration: "6 hours 20 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "7:15 AM",
      date: "16 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 4",
    },

    arrivalDetails: {
      time: "10:35 AM",
      date: "16 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal B",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 12,

    airline: "QuickWing Air",
    code: "QW-NY8874",
    status: "On Time",

    departure: "9:40 AM",
    arrival: "1:10 PM",

    fromCode: "JFK",
    toCode: "LAX",

    price: 460,

    passengers: 198,
    totalPassengers: 220,

    aircraft: "Airbus A321neo",

    bookingDate: "July 2, 2028",
    flightDate: "2028-07-16",

    duration: "6 hours 30 minutes",

    flightClass: "Economy",
    seatLayout: "3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "9:40 AM",
      date: "16 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 5",
    },

    arrivalDetails: {
      time: "1:10 PM",
      date: "16 Jul 2028",
      city: "Los Angeles",
      airport:
        "Los Angeles International Airport (LAX)",
      terminal: "Terminal 1",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Paid WiFi",
    },
  },

  /* ========================================
     LONDON -> PARIS
  ======================================== */

  {
    id: 13,

    airline: "Nimbus Airlines",
    code: "NA-LP1180",
    status: "On Time",

    departure: "6:30 AM",
    arrival: "8:50 AM",

    fromCode: "LHR",
    toCode: "CDG",

    price: 370,

    passengers: 146,
    totalPassengers: 170,

    aircraft: "Airbus A320neo",

    bookingDate: "July 3, 2028",
    flightDate: "2028-07-17",

    duration: "1 hour 20 minutes",

    flightClass: "Economy",
    seatLayout: "3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "6:30 AM",
      date: "17 Jul 2028",
      city: "London",
      airport: "Heathrow Airport (LHR)",
      terminal: "Terminal 2",
    },

    arrivalDetails: {
      time: "8:50 AM",
      date: "17 Jul 2028",
      city: "Paris",
      airport:
        "Charles de Gaulle Airport (CDG)",
      terminal: "Terminal 2E",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 14,

    airline: "JetStream Aviation",
    code: "JS-LP3485",
    status: "Delayed",

    departure: "11:20 AM",
    arrival: "2:50 PM",

    fromCode: "LHR",
    toCode: "CDG",

    price: 430,

    passengers: 151,
    totalPassengers: 180,

    aircraft: "Airbus A320",

    bookingDate: "July 3, 2028",
    flightDate: "2028-07-17",

    duration: "2 hours 30 minutes",

    flightClass: "Economy",
    seatLayout: "3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "11:20 AM",
      date: "17 Jul 2028",
      city: "London",
      airport: "Heathrow Airport (LHR)",
      terminal: "Terminal 5",
    },

    arrivalDetails: {
      time: "2:50 PM",
      date: "17 Jul 2028",
      city: "Paris",
      airport:
        "Charles de Gaulle Airport (CDG)",
      terminal: "Terminal 2B",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Paid WiFi",
    },
  },

  /* ========================================
     DUBAI -> SINGAPORE
  ======================================== */

  {
    id: 15,

    airline: "SuperJet Airways",
    code: "SJ-DS5632",
    status: "On Time",

    departure: "8:00 AM",
    arrival: "7:25 PM",

    fromCode: "DXB",
    toCode: "SIN",

    price: 580,

    passengers: 214,
    totalPassengers: 240,

    aircraft: "Airbus A350-1000",

    bookingDate: "July 4, 2028",
    flightDate: "2028-07-18",

    duration: "7 hours 25 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "8:00 AM",
      date: "18 Jul 2028",
      city: "Dubai",
      airport:
        "Dubai International Airport (DXB)",
      terminal: "Terminal 3",
    },

    arrivalDetails: {
      time: "7:25 PM",
      date: "18 Jul 2028",
      city: "Singapore",
      airport:
        "Singapore Changi Airport (SIN)",
      terminal: "Terminal 1",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 16,

    airline: "AeroJet",
    code: "AJ-DS7726",
    status: "On Time",

    departure: "2:30 PM",
    arrival: "4:10 AM",

    fromCode: "DXB",
    toCode: "SIN",

    price: 540,

    passengers: 189,
    totalPassengers: 215,

    aircraft: "Boeing 787-10",

    bookingDate: "July 4, 2028",
    flightDate: "2028-07-18",

    duration: "9 hours 40 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "2:30 PM",
      date: "18 Jul 2028",
      city: "Dubai",
      airport:
        "Dubai International Airport (DXB)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "4:10 AM",
      date: "19 Jul 2028",
      city: "Singapore",
      airport:
        "Singapore Changi Airport (SIN)",
      terminal: "Terminal 3",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  /* ========================================
     TOKYO -> SYDNEY
  ======================================== */

  {
    id: 17,

    airline: "SkyHigh Airlines",
    code: "SH-TS3087",
    status: "Boarding",

    departure: "7:30 AM",
    arrival: "6:15 PM",

    fromCode: "HND",
    toCode: "SYD",

    price: 610,

    passengers: 203,
    totalPassengers: 225,

    aircraft: "Boeing 787-9",

    bookingDate: "July 5, 2028",
    flightDate: "2028-07-19",

    duration: "9 hours 45 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "7:30 AM",
      date: "19 Jul 2028",
      city: "Tokyo",
      airport: "Haneda Airport (HND)",
      terminal: "Terminal 3",
    },

    arrivalDetails: {
      time: "6:15 PM",
      date: "19 Jul 2028",
      city: "Sydney",
      airport: "Sydney Airport (SYD)",
      terminal: "Terminal 1",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 18,

    airline: "FlyFast Airways",
    code: "FF-TS9021",
    status: "On Time",

    departure: "12:15 PM",
    arrival: "1:20 AM",

    fromCode: "HND",
    toCode: "SYD",

    price: 590,

    passengers: 176,
    totalPassengers: 205,

    aircraft: "Airbus A330-900",

    bookingDate: "July 5, 2028",
    flightDate: "2028-07-19",

    duration: "12 hours 5 minutes",

    flightClass: "Economy",
    seatLayout: "2-4-2 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "12:15 PM",
      date: "19 Jul 2028",
      city: "Tokyo",
      airport: "Haneda Airport (HND)",
      terminal: "Terminal 3",
    },

    arrivalDetails: {
      time: "1:20 AM",
      date: "20 Jul 2028",
      city: "Sydney",
      airport: "Sydney Airport (SYD)",
      terminal: "Terminal 1",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Paid WiFi",
    },
  },

  /* ========================================
     HONG KONG -> BANGKOK
  ======================================== */

  {
    id: 19,

    airline: "QuickWing Air",
    code: "QW-HB6624",
    status: "On Time",

    departure: "5:30 AM",
    arrival: "7:40 AM",

    fromCode: "HKG",
    toCode: "BKK",

    price: 390,

    passengers: 168,
    totalPassengers: 190,

    aircraft: "Airbus A321",

    bookingDate: "July 6, 2028",
    flightDate: "2028-07-20",

    duration: "3 hours 10 minutes",

    flightClass: "Economy",
    seatLayout: "3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "5:30 AM",
      date: "20 Jul 2028",
      city: "Hong Kong",
      airport:
        "Hong Kong International Airport (HKG)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "7:40 AM",
      date: "20 Jul 2028",
      city: "Bangkok",
      airport:
        "Suvarnabhumi Airport (BKK)",
      terminal: "Main Terminal",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 20,

    airline: "Nimbus Airlines",
    code: "NA-HB7193",
    status: "Delayed",

    departure: "6:00 PM",
    arrival: "11:35 PM",

    fromCode: "HKG",
    toCode: "BKK",

    price: 420,

    passengers: 159,
    totalPassengers: 185,

    aircraft: "Airbus A320neo",

    bookingDate: "July 6, 2028",
    flightDate: "2028-07-20",

    duration: "6 hours 35 minutes",

    flightClass: "Economy",
    seatLayout: "3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "6:00 PM",
      date: "20 Jul 2028",
      city: "Hong Kong",
      airport:
        "Hong Kong International Airport (HKG)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "11:35 PM",
      date: "20 Jul 2028",
      city: "Bangkok",
      airport:
        "Suvarnabhumi Airport (BKK)",
      terminal: "Main Terminal",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Paid WiFi",
    },
  },

  /* ========================================
     FRANKFURT -> DUBAI
  ======================================== */

  {
    id: 21,

    airline: "JetStream Aviation",
    code: "JS-FD4096",
    status: "On Time",

    departure: "9:00 AM",
    arrival: "5:40 PM",

    fromCode: "FRA",
    toCode: "DXB",

    price: 550,

    passengers: 194,
    totalPassengers: 220,

    aircraft: "Boeing 777-200LR",

    bookingDate: "July 7, 2028",
    flightDate: "2028-07-21",

    duration: "6 hours 40 minutes",

    flightClass: "Economy",
    seatLayout: "3-4-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "9:00 AM",
      date: "21 Jul 2028",
      city: "Frankfurt",
      airport: "Frankfurt Airport (FRA)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "5:40 PM",
      date: "21 Jul 2028",
      city: "Dubai",
      airport:
        "Dubai International Airport (DXB)",
      terminal: "Terminal 3",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 22,

    airline: "SuperJet Airways",
    code: "SJ-FD5831",
    status: "On Time",

    departure: "1:30 PM",
    arrival: "11:50 PM",

    fromCode: "FRA",
    toCode: "DXB",

    price: 510,

    passengers: 183,
    totalPassengers: 210,

    aircraft: "Airbus A330",

    bookingDate: "July 7, 2028",
    flightDate: "2028-07-21",

    duration: "8 hours 20 minutes",

    flightClass: "Economy",
    seatLayout: "2-4-2 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "1:30 PM",
      date: "21 Jul 2028",
      city: "Frankfurt",
      airport: "Frankfurt Airport (FRA)",
      terminal: "Terminal 2",
    },

    arrivalDetails: {
      time: "11:50 PM",
      date: "21 Jul 2028",
      city: "Dubai",
      airport:
        "Dubai International Airport (DXB)",
      terminal: "Terminal 1",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  /* ========================================
     PARIS -> NEW YORK
  ======================================== */

  {
    id: 23,

    airline: "CloudNine Airlines",
    code: "CN-PN3305",
    status: "On Time",

    departure: "7:20 AM",
    arrival: "10:15 AM",

    fromCode: "CDG",
    toCode: "JFK",

    price: 630,

    passengers: 216,
    totalPassengers: 235,

    aircraft: "Boeing 787-10",

    bookingDate: "July 8, 2028",
    flightDate: "2028-07-22",

    duration: "8 hours 55 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "7:20 AM",
      date: "22 Jul 2028",
      city: "Paris",
      airport:
        "Charles de Gaulle Airport (CDG)",
      terminal: "Terminal 2E",
    },

    arrivalDetails: {
      time: "10:15 AM",
      date: "22 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 4",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 24,

    airline: "AeroJet",
    code: "AJ-PN4408",
    status: "On Time",

    departure: "2:00 PM",
    arrival: "7:30 PM",

    fromCode: "CDG",
    toCode: "JFK",

    price: 590,

    passengers: 187,
    totalPassengers: 215,

    aircraft: "Airbus A350-900",

    bookingDate: "July 8, 2028",
    flightDate: "2028-07-22",

    duration: "11 hours 30 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "2:00 PM",
      date: "22 Jul 2028",
      city: "Paris",
      airport:
        "Charles de Gaulle Airport (CDG)",
      terminal: "Terminal 2A",
    },

    arrivalDetails: {
      time: "7:30 PM",
      date: "22 Jul 2028",
      city: "New York",
      airport:
        "John F. Kennedy International Airport (JFK)",
      terminal: "Terminal 7",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Paid WiFi",
    },
  },

  /* ========================================
     BUSINESS / FIRST CLASS EXAMPLES
  ======================================== */

  {
    id: 25,

    airline: "Nimbus Airlines",
    code: "NA-LD8240",
    status: "On Time",

    departure: "9:15 AM",
    arrival: "7:10 PM",

    fromCode: "LHR",
    toCode: "DXB",

    price: 850,

    passengers: 142,
    totalPassengers: 170,

    aircraft: "Airbus A350-1000",

    bookingDate: "July 9, 2028",
    flightDate: "2028-07-23",

    duration: "6 hours 55 minutes",

    flightClass: "Business",
    seatLayout: "1-2-1 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "9:15 AM",
      date: "23 Jul 2028",
      city: "London",
      airport: "Heathrow Airport (LHR)",
      terminal: "Terminal 2",
    },

    arrivalDetails: {
      time: "7:10 PM",
      date: "23 Jul 2028",
      city: "Dubai",
      airport:
        "Dubai International Airport (DXB)",
      terminal: "Terminal 3",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Premium Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 26,

    airline: "SkyHigh Airlines",
    code: "SH-LD9375",
    status: "On Time",

    departure: "7:00 PM",
    arrival: "5:40 AM",

    fromCode: "LHR",
    toCode: "DXB",

    price: 980,

    passengers: 126,
    totalPassengers: 150,

    aircraft: "Boeing 777-300ER",

    bookingDate: "July 9, 2028",
    flightDate: "2028-07-23",

    duration: "7 hours 40 minutes",

    flightClass: "First Class",
    seatLayout: "1-1-1 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "7:00 PM",
      date: "23 Jul 2028",
      city: "London",
      airport: "Heathrow Airport (LHR)",
      terminal: "Terminal 5",
    },

    arrivalDetails: {
      time: "5:40 AM",
      date: "24 Jul 2028",
      city: "Dubai",
      airport:
        "Dubai International Airport (DXB)",
      terminal: "Terminal 3",
    },

    facilities: {
      baggage: "3 Baggage",
      meal: "Premium Meal",
      wifi: "Free WiFi",
    },
  },

  /* ========================================
     SINGAPORE -> TOKYO
  ======================================== */

  {
    id: 27,

    airline: "SuperJet Airways",
    code: "SJ-ST2846",
    status: "On Time",

    departure: "6:45 AM",
    arrival: "2:35 PM",

    fromCode: "SIN",
    toCode: "HND",

    price: 470,

    passengers: 191,
    totalPassengers: 215,

    aircraft: "Boeing 787-8",

    bookingDate: "July 10, 2028",
    flightDate: "2028-07-24",

    duration: "6 hours 50 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "6:45 AM",
      date: "24 Jul 2028",
      city: "Singapore",
      airport:
        "Singapore Changi Airport (SIN)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "2:35 PM",
      date: "24 Jul 2028",
      city: "Tokyo",
      airport: "Haneda Airport (HND)",
      terminal: "Terminal 3",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 28,

    airline: "QuickWing Air",
    code: "QW-ST6190",
    status: "Delayed",

    departure: "3:20 PM",
    arrival: "1:10 AM",

    fromCode: "SIN",
    toCode: "HND",

    price: 440,

    passengers: 178,
    totalPassengers: 205,

    aircraft: "Airbus A321XLR",

    bookingDate: "July 10, 2028",
    flightDate: "2028-07-24",

    duration: "8 hours 50 minutes",

    flightClass: "Economy",
    seatLayout: "3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "3:20 PM",
      date: "24 Jul 2028",
      city: "Singapore",
      airport:
        "Singapore Changi Airport (SIN)",
      terminal: "Terminal 2",
    },

    arrivalDetails: {
      time: "1:10 AM",
      date: "25 Jul 2028",
      city: "Tokyo",
      airport: "Haneda Airport (HND)",
      terminal: "Terminal 3",
    },

    facilities: {
      baggage: "1 Baggage",
      meal: "No Meal",
      wifi: "Paid WiFi",
    },
  },

  /* ========================================
     SYDNEY -> SINGAPORE
  ======================================== */

  {
    id: 29,

    airline: "FlyFast Airways",
    code: "FF-SS7452",
    status: "On Time",

    departure: "8:10 AM",
    arrival: "2:20 PM",

    fromCode: "SYD",
    toCode: "SIN",

    price: 560,

    passengers: 209,
    totalPassengers: 230,

    aircraft: "Airbus A350-900",

    bookingDate: "July 11, 2028",
    flightDate: "2028-07-25",

    duration: "8 hours 10 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 0,
    transitLabel: "Direct",

    departureDetails: {
      time: "8:10 AM",
      date: "25 Jul 2028",
      city: "Sydney",
      airport: "Sydney Airport (SYD)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "2:20 PM",
      date: "25 Jul 2028",
      city: "Singapore",
      airport:
        "Singapore Changi Airport (SIN)",
      terminal: "Terminal 3",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },

  {
    id: 30,

    airline: "CloudNine Airlines",
    code: "CN-SS8361",
    status: "On Time",

    departure: "5:00 PM",
    arrival: "2:15 AM",

    fromCode: "SYD",
    toCode: "SIN",

    price: 530,

    passengers: 186,
    totalPassengers: 215,

    aircraft: "Boeing 787-9",

    bookingDate: "July 11, 2028",
    flightDate: "2028-07-25",

    duration: "11 hours 15 minutes",

    flightClass: "Economy",
    seatLayout: "3-3-3 configuration",

    stops: 1,
    transitLabel: "1 Transit",

    departureDetails: {
      time: "5:00 PM",
      date: "25 Jul 2028",
      city: "Sydney",
      airport: "Sydney Airport (SYD)",
      terminal: "Terminal 1",
    },

    arrivalDetails: {
      time: "2:15 AM",
      date: "26 Jul 2028",
      city: "Singapore",
      airport:
        "Singapore Changi Airport (SIN)",
      terminal: "Terminal 1",
    },

    facilities: {
      baggage: "2 Baggage",
      meal: "Free Meal",
      wifi: "Free WiFi",
    },
  },
];

/* ========================================
   AIRLINE OPTIONS
======================================== */

export const flightAirlines = [
  "CloudNine Airlines",
  "QuickWing Air",
  "SkyHigh Airlines",
  "FlyFast Airways",
  "AeroJet",
  "Nimbus Airlines",
  "JetStream Aviation",
  "SuperJet Airways",
];

/* ========================================
   FLIGHT CLASS OPTIONS
======================================== */

export const flightClasses = [
  "Economy",
  "Business",
  "First Class",
];

/* ========================================
   AIRPORTS
======================================== */

export const airports = [
  {
    code: "LAX",
    city: "Los Angeles",
    name: "Los Angeles International Airport",
  },
  {
    code: "JFK",
    city: "New York",
    name: "John F. Kennedy International Airport",
  },
  {
    code: "LHR",
    city: "London",
    name: "Heathrow Airport",
  },
  {
    code: "CDG",
    city: "Paris",
    name: "Charles de Gaulle Airport",
  },
  {
    code: "DXB",
    city: "Dubai",
    name: "Dubai International Airport",
  },
  {
    code: "SIN",
    city: "Singapore",
    name: "Singapore Changi Airport",
  },
  {
    code: "HND",
    city: "Tokyo",
    name: "Haneda Airport",
  },
  {
    code: "SYD",
    city: "Sydney",
    name: "Sydney Airport",
  },
  {
    code: "HKG",
    city: "Hong Kong",
    name: "Hong Kong International Airport",
  },
  {
    code: "BKK",
    city: "Bangkok",
    name: "Suvarnabhumi Airport",
  },
  {
    code: "FRA",
    city: "Frankfurt",
    name: "Frankfurt Airport",
  },
];