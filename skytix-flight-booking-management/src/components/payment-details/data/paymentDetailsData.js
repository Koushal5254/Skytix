export const bookingHistory = [
  {
    id:1,
    airline:"CloudNine Airlines",
    flight:"CN-2458",

    from:"Paris",
    to:"New York",

    departure:"20 Jul 2028 • 08:30",
    arrival:"20 Jul 2028 • 14:15",

    status:"Completed"
  },

  {
    id:2,
    airline:"FlyFast Airways",
    flight:"FF-1190",

    from:"London",
    to:"Dubai",

    departure:"15 Jun 2028 • 09:15",
    arrival:"15 Jun 2028 • 18:00",

    status:"Completed"
  },

  {
    id:3,
    airline:"SkyHigh Airlines",
    flight:"SH-7732",

    from:"Frankfurt",
    to:"Bangkok",

    departure:"01 May 2028 • 11:00",
    arrival:"01 May 2028 • 23:10",

    status:"Completed"
  }

];

export const purchaseHistory = [
  {
    id: 1,
    bookingCode: "CN-KL2345",
    route: "Paris → New York",
    date: "20 Jul 2028",
    amount: "$520",
    status: "Purchased",
  },
  {
    id: 2,
    bookingCode: "FF-HJ1290",
    route: "London → Dubai",
    date: "15 Jun 2028",
    amount: "$760",
    status: "Purchased",
  },
  {
    id: 3,
    bookingCode: "SH-BK8821",
    route: "Frankfurt → Bangkok",
    date: "01 May 2028",
    amount: "$940",
    status: "Purchased",
  },
];