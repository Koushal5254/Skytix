"use client";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import {
  FiCheckCircle,
  FiDollarSign,
} from "react-icons/fi";

import { FaPlaneDeparture } from "react-icons/fa6";
import { MdOutlineFlightLand } from "react-icons/md";

import StatisticCard from "@/components/dashboard/StatisticCard/StatisticCard";
import TicketSalesChart from "@/components/dashboard/TicketSalesChart/TicketSalesChart";
import FlightScheduleChart from "@/components/dashboard/FlightScheduleChart/FlightScheduleChart";
import PopularDestination from "@/components/dashboard/PopularDestination/PopularDestination";
import AllBookings from "@/components/dashboard/AllBookings/AllBookings";
import PaymentHistory from "@/components/dashboard/PaymentHistory/PaymentHistory";
import PopularAirlines from "@/components/dashboard/PopularAirlines/PopularAirlines";
import TopRoutes from "@/components/dashboard/TopRoutes/TopRoutes";
import RecentActivity from "@/components/dashboard/RecentActivity/RecentActivity";

import "./page.scss";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="dashboard-wrapper">

        <main className="dashboard-content">

          <section className="stats-row">
            <StatisticCard
              title="Completed Flights"
              value="125"
              percentage="+13.5%"
              icon={FiCheckCircle}
            />

            <StatisticCard
              title="Active Flights"
              value="80"
              percentage="+3.66%"
              icon={FaPlaneDeparture}
            />

            <StatisticCard
              title="Canceled Flights"
              value="25"
              percentage="-1.4%"
              icon={MdOutlineFlightLand}
            />

            <StatisticCard
              title="Total Revenue"
              value="$15,000"
              percentage="+5.4%"
              icon={FiDollarSign}
            />
          </section>

          <section className="chart-row">
            <TicketSalesChart />
            <FlightScheduleChart />
          </section>

          <section className="booking-row">
            <PopularDestination />
            <AllBookings />
          </section>

          <PaymentHistory />

        </main>

        <aside className="dashboard-sidebar">
          <PopularAirlines />
          <TopRoutes />
          <RecentActivity />
        </aside>

      </div>
    </MainLayout>
  );
}