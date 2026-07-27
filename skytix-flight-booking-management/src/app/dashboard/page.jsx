import MainLayout from "@/components/layout/MainLayout/MainLayout";

import { FiUsers } from "react-icons/fi";
import { FaPlaneDeparture } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { RiFlightTakeoffLine } from "react-icons/ri";

import StatisticCard from "@/components/dashboard/StatisticCard/StatisticCard";

import TicketSalesChart from "@/components/dashboard/TicketSalesChart/TicketSalesChart";
import FlightScheduleChart from "@/components/dashboard/FlightScheduleChart/FlightScheduleChart";

import PopularAirlines from "@/components/dashboard/PopularAirlines/PopularAirlines";
import PopularDestination from "@/components/dashboard/PopularDestination/PopularDestination";
import AllBookings from "@/components/dashboard/AllBookings/AllBookings";
import TopRoutes from "@/components/dashboard/TopRoutes/TopRoutes";
import RecentActivity from "@/components/dashboard/RecentActivity/RecentActivity";
import PaymentHistory from "@/components/dashboard/PaymentHistory/PaymentHistory";




import "@/styles/dashboard-layout.scss";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="dashboard-wrapper">

        {/* LEFT CONTENT */}
        <div className="dashboard-content">

          {/* STATS */}
          <div className="stats-row">

            <StatisticCard
              title="Completed Flights"
              value="125"
              percentage="+13.5%"
              icon={FiUsers}
              color="#E4C66D"
            />

            <StatisticCard
              title="Active Flights"
              value="80"
              percentage="+3.66%"
              icon={FaPlaneDeparture}
              color="#E4C66D"
            />

            <StatisticCard
              title="Canceled Flights"
              value="25"
              percentage="-1.4%"
              icon={MdOutlinePayments}
              color="#E4C66D"
            />

            <StatisticCard
              title="Total Revenue"
              value="$15,000"
              percentage="+5.4%"
              icon={RiFlightTakeoffLine}
              color="#E4C66D"
            />

          </div>

          {/* CHARTS */}
          <div className="chart-row">

            <TicketSalesChart />

            <FlightScheduleChart />

          </div>

          {/* DESTINATION + BOOKINGS */}
          <div className="booking-row">

            <PopularDestination />

            <AllBookings />

          </div>

          {/* PAYMENT */}
          <div className="payment-row">

            <PaymentHistory />

          </div>

          {/* ================================= */}
          {/* DASHBOARD PART 2 */}
          {/* ================================= */}

        

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="dashboard-sidebar">

          <PopularAirlines />

          <TopRoutes />

          <RecentActivity />

        </div>

      </div>
    </MainLayout>
  );
}