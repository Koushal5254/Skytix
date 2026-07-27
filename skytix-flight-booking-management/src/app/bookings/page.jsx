import MainLayout from "@/components/layout/MainLayout/MainLayout";

import BookingHeader from "@/components/bookings/BookingHeader/BookingHeader";
import BookingStats from "@/components/bookings/BookingStats/BookingStats";
import BookingFilters from "@/components/bookings/BookingFilters/BookingFilters";
import BookingList from "@/components/bookings/BookingList/BookingList";
import BookingPagination from "@/components/bookings/BookingPagination/BookingPagination";
import BookingFooter from "@/components/bookings/BookingFooter/BookingFooter";

import "@/styles/bookings.scss";

export default function BookingsPage() {
  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <div className="bookings-page">
        <BookingHeader />
        <BookingStats />
        <BookingFilters />
        <BookingList />
        <BookingPagination />
        <BookingFooter />
      </div>
    </MainLayout>
  );
}