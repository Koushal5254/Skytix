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
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <section className="schedule-page">

        <ScheduleHeader />

        <div className="schedule-content">

          {/* FILTER SIDEBAR */}

          <aside className="schedule-left-panel">
            <FilterSidebar />
          </aside>

          {/* MAIN RESULTS */}

          <div className="schedule-right-panel">

            <SearchBar />

            <FlightList />

            <Pagination />

            <ScheduleFooter />

          </div>

        </div>

      </section>
    </MainLayout>
  );
}