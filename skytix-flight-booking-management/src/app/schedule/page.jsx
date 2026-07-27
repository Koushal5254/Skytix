import MainLayout from "@/components/layout/MainLayout/MainLayout";

import ScheduleHeader from "@/components/schedule/ScheduleHeader/ScheduleHeader";
import SearchBar from "@/components/schedule/SearchBar/SearchBar";
import FilterSidebar from "@/components/schedule/FilterSidebar/FilterSidebar";
import FlightList from "@/components/schedule/FlightList/FlightList";
import Pagination from "@/components/schedule/Pagination/Pagination";
import ScheduleFooter from "@/components/schedule/ScheduleFooter/ScheduleFooter";

import "@/styles/schedule.scss";

export default function SchedulePage() {
  return (
    <MainLayout showHeader={false} showFooter={false}>
      <section className="schedule-page">

        <ScheduleHeader />

        <section className="schedule-content">

          <aside className="left-panel">
            <FilterSidebar />
          </aside>

          <main className="right-panel">

            <SearchBar />

            {/* <FlightListHeader /> */}

            <FlightList />

            <Pagination />

            <ScheduleFooter />

          </main>

        </section>

      </section>
    </MainLayout>
  );
}