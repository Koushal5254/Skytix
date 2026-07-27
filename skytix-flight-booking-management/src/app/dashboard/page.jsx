import MainLayout from "@/components/layout/MainLayout/MainLayout";

import {
  FiUsers,
} from "react-icons/fi";

import {
  FaPlaneDeparture,
} from "react-icons/fa6";

import {
  MdOutlinePayments,
} from "react-icons/md";

import {
  RiFlightTakeoffLine,
} from "react-icons/ri";

import StatisticCard from "@/components/dashboard/StatisticCard/StatisticCard";

import TicketSalesChart from "@/components/dashboard/TicketSalesChart/TicketSalesChart";
import FlightScheduleChart from "@/components/dashboard/FlightScheduleChart/FlightScheduleChart";

import PopularDestination from "@/components/dashboard/PopularDestination/PopularDestination";
import AllBookings from "@/components/dashboard/AllBookings/AllBookings";
import PaymentHistory from "@/components/dashboard/PaymentHistory/PaymentHistory";

import PopularAirlines from "@/components/dashboard/PopularAirlines/PopularAirlines";
import TopRoutes from "@/components/dashboard/TopRoutes/TopRoutes";
import RecentActivity from "@/components/dashboard/RecentActivity/RecentActivity";

import "@/styles/dashboard-layout.scss";

export default function Dashboard() {
  return (
    <MainLayout>

      <div className="dashboard-wrapper">

        {/* =====================================
            MAIN CONTENT
        ====================================== */}

        <main className="dashboard-content">

          {/* ===================================
              STATISTICS
          ==================================== */}

          <section className="stats-row">

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

          </section>

          {/* ===================================
              TICKET SALES + FLIGHT SCHEDULE
          ==================================== */}

          <section className="chart-row">

            <div className="dashboard-chart-item dashboard-ticket-sales">
              <TicketSalesChart />
            </div>

            <div className="dashboard-chart-item dashboard-flight-schedule">
              <FlightScheduleChart />
            </div>

          </section>

          {/* ===================================
              DESTINATION + BOOKINGS
          ==================================== */}

          <section className="booking-row">

            <div className="dashboard-destination-item">
              <PopularDestination />
            </div>

            <div className="dashboard-bookings-item">
              <AllBookings />
            </div>

          </section>

          {/* ===================================
              PAYMENT HISTORY
          ==================================== */}

          <section className="payment-row">
            <PaymentHistory />
          </section>

        </main>

        {/* =====================================
            RIGHT SIDEBAR
        ====================================== */}

        <aside className="dashboard-sidebar">

          <PopularAirlines />

          <TopRoutes />

          <RecentActivity />

        </aside>

      </div>

    </MainLayout>
  );
}