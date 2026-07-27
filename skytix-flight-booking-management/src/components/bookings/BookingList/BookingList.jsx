import BookingCard from "../BookingCard/BookingCard";
import "./BookingList.scss";

const bookings = [
  {
    airline: "CloudNine Airlines",
    code: "CN-MN8901",
    from: "Paris",
    fromCode: "CDG",
    fromTime: "7:30 AM",
    to: "New York",
    toCode: "JFK",
    toTime: "10:30 AM",
    duration: "3 hours",
    seats: "+192",
    status: "Confirmed",
  },
  {
    airline: "QuickWing Air",
    code: "QW-XY2345",
    from: "Hongkong",
    fromCode: "HKG",
    fromTime: "10:00 PM",
    to: "Los Angeles",
    toCode: "LAX",
    toTime: "7:00 AM",
    duration: "9 hours",
    seats: "+202",
    status: "Confirmed",
  },
  {
    airline: "SkyHigh Airlines",
    code: "SH-ZY6789",
    from: "Frankfurt",
    fromCode: "FRA",
    fromTime: "8:00 AM",
    to: "Bangkok",
    toCode: "BKK",
    toTime: "4:00 PM",
    duration: "8 hours",
    seats: "+182",
    status: "Pending",
  },
  {
    airline: "FlyFast Airways",
    code: "FF-LV3456",
    from: "Los Angeles",
    fromCode: "LAX",
    fromTime: "6:00 PM",
    to: "Tokyo",
    toCode: "HND",
    toTime: "11:00 PM",
    duration: "5 hours",
    seats: "+162",
    status: "Confirmed",
  },
  {
    airline: "AeroJet",
    code: "AJ-WX9012",
    from: "Singapore",
    fromCode: "SIN",
    fromTime: "5:30 AM",
    to: "London",
    toCode: "LHR",
    toTime: "11:30 AM",
    duration: "6 hours",
    seats: "+152",
    status: "Cancelled",
  },
];

export default function BookingList() {
  return (
    <div className="booking-list">
      {bookings.map((item, index) => (
        <BookingCard key={index} booking={item} />
      ))}
    </div>
  );
}