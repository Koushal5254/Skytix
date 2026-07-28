"use client";

import {
  useMemo,
  useState,
} from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import ScheduleHeader from "@/components/schedule/ScheduleHeader/ScheduleHeader";
import SearchBar from "@/components/schedule/SearchBar/SearchBar";
import FilterSidebar from "@/components/schedule/FilterSidebar/FilterSidebar";
import FlightList from "@/components/schedule/FlightList/FlightList";
import Pagination from "@/components/schedule/Pagination/Pagination";
import ScheduleFooter from "@/components/schedule/ScheduleFooter/ScheduleFooter";
import AddFlightModal from "@/components/schedule/AddFlightModal/AddFlightModal";

import {
  flights as initialFlights,
} from "@/data/flights";

import "@/styles/schedule.scss";

const ITEMS_PER_PAGE = 5;

const INITIAL_TRANSIT = {
  direct: true,
  oneTransit: false,
  twoTransit: false,
};

const INITIAL_SECTIONS = {
  transit: true,
  price: true,
  departure: true,
  airline: true,
};

const INITIAL_SEARCH = {
  from: "LAX",
  to: "JFK",
  departureDate: "",
  seatClass: "Economy",
};

export default function SchedulePage() {
  /* ========================================
     FLIGHTS
  ======================================== */

  const [flights, setFlights] =
    useState(initialFlights);

  /* ========================================
     SEARCH

     searchForm = what user is editing
     appliedSearch = actual filter
  ======================================== */

  const [
    searchForm,
    setSearchForm,
  ] = useState(INITIAL_SEARCH);

  const [
    appliedSearch,
    setAppliedSearch,
  ] = useState(INITIAL_SEARCH);

  /* ========================================
     SORTING
  ======================================== */

  const [priceSort, setPriceSort] =
    useState("cheapest");

  const [timeSort, setTimeSort] =
    useState("earliest");

  /* ========================================
     PAGINATION
  ======================================== */

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  /* ========================================
     MODAL
  ======================================== */

  const [
    isAddFlightOpen,
    setIsAddFlightOpen,
  ] = useState(false);

  /* ========================================
     SIDEBAR
  ======================================== */

  const [
    sections,
    setSections,
  ] = useState(INITIAL_SECTIONS);

  const [
    transit,
    setTransit,
  ] = useState(INITIAL_TRANSIT);

  const [
    maxPrice,
    setMaxPrice,
  ] = useState(1000);

  const [
    departureTime,
    setDepartureTime,
  ] = useState(100);

  /* ========================================
     LOCATIONS
  ======================================== */

  const locations =
    useMemo(() => {
      const locationMap =
        new Map();

      flights.forEach(
        (flight) => {
          if (flight.fromCode) {
            locationMap.set(
              flight.fromCode,
              {
                code:
                  flight.fromCode,

                city:
                  flight
                    .departureDetails
                    ?.city ||
                  flight.fromCode,
              }
            );
          }

          if (flight.toCode) {
            locationMap.set(
              flight.toCode,
              {
                code:
                  flight.toCode,

                city:
                  flight
                    .arrivalDetails
                    ?.city ||
                  flight.toCode,
              }
            );
          }
        }
      );

      return [
        ...locationMap.values(),
      ].sort((a, b) =>
        a.city.localeCompare(
          b.city
        )
      );
    }, [flights]);

  /* ========================================
     AIRLINES
  ======================================== */

  const airlines =
    useMemo(() => {
      return [
        ...new Set(
          flights
            .map(
              (flight) =>
                flight.airline
            )
            .filter(Boolean)
        ),
      ].sort((a, b) =>
        a.localeCompare(b)
      );
    }, [flights]);

  const [
    airlineSelection,
    setAirlineSelection,
  ] = useState(null);

  const selectedAirlines =
    airlineSelection === null
      ? airlines
      : airlineSelection.filter(
          (airline) =>
            airlines.includes(
              airline
            )
        );

  /* ========================================
     SEARCH HANDLERS
  ======================================== */

  const handleFromChange = (
    value
  ) => {
    setSearchForm(
      (previous) => ({
        ...previous,
        from: value,
      })
    );
  };

  const handleToChange = (
    value
  ) => {
    setSearchForm(
      (previous) => ({
        ...previous,
        to: value,
      })
    );
  };

  const handleDateChange = (
    value
  ) => {
    setSearchForm(
      (previous) => ({
        ...previous,

        departureDate:
          value,
      })
    );
  };

  const handleSeatClassChange = (
    value
  ) => {
    setSearchForm(
      (previous) => ({
        ...previous,

        seatClass: value,
      })
    );
  };

  /* ========================================
     SWAP
  ======================================== */

  const handleSwap = () => {
    setSearchForm(
      (previous) => ({
        ...previous,

        from: previous.to,

        to: previous.from,
      })
    );
  };

  /* ========================================
     APPLY SEARCH
  ======================================== */

  const handleSearch = () => {
    setAppliedSearch({
      ...searchForm,
    });

    setCurrentPage(1);
  };

  /* ========================================
     SIDEBAR HANDLERS
  ======================================== */

  const handleToggleSection = (
    section
  ) => {
    setSections(
      (previous) => ({
        ...previous,

        [section]:
          !previous[section],
      })
    );
  };

  const handleTransitChange = (
    name
  ) => {
    setTransit(
      (previous) => ({
        ...previous,

        [name]:
          !previous[name],
      })
    );

    setCurrentPage(1);
  };

  const handleMaxPriceChange = (
    value
  ) => {
    setMaxPrice(
      Number(value)
    );

    setCurrentPage(1);
  };

  const handleDepartureTimeChange = (
    value
  ) => {
    setDepartureTime(
      Number(value)
    );

    setCurrentPage(1);
  };

  const handleAirlineChange = (
    airline
  ) => {
    setAirlineSelection(
      (previous) => {
        const current =
          previous === null
            ? [...airlines]
            : previous;

        if (
          current.includes(
            airline
          )
        ) {
          return current.filter(
            (item) =>
              item !== airline
          );
        }

        return [
          ...current,
          airline,
        ];
      }
    );

    setCurrentPage(1);
  };

  const handleSelectAllAirlines =
    () => {
      setAirlineSelection(
        null
      );

      setCurrentPage(1);
    };

  const handleClearAllAirlines =
    () => {
      setAirlineSelection(
        []
      );

      setCurrentPage(1);
    };

  const handleResetFilters =
    () => {
      setTransit(
        INITIAL_TRANSIT
      );

      setMaxPrice(1000);

      setDepartureTime(100);

      setAirlineSelection(
        null
      );

      setCurrentPage(1);
    };

  /* ========================================
     FILTER
  ======================================== */

  const filteredFlights =
    useMemo(() => {
      return flights.filter(
        (flight) => {
          /* ROUTE */

          const matchesFrom =
            !appliedSearch.from ||
            flight.fromCode ===
              appliedSearch.from;

          const matchesTo =
            !appliedSearch.to ||
            flight.toCode ===
              appliedSearch.to;

          /* DATE */

          const matchesDate =
            !appliedSearch.departureDate ||
            datesMatch(
              flight,
              appliedSearch.departureDate
            );

          /* CLASS */

          const matchesClass =
            appliedSearch.seatClass ===
              "All" ||
            !appliedSearch.seatClass ||
            flight.flightClass ===
              appliedSearch.seatClass;

          /* AIRLINE */

          const matchesAirline =
            selectedAirlines.includes(
              flight.airline
            );

          /* PRICE */

          const price =
            Number(
              flight.price
            ) || 0;

          const matchesPrice =
            price >= 350 &&
            price <= maxPrice;

          /* TRANSIT */

          const stops =
            getFlightStops(
              flight
            );

          const matchesTransit =
            (stops === 0 &&
              transit.direct) ||
            (stops === 1 &&
              transit.oneTransit) ||
            (stops >= 2 &&
              transit.twoTransit);

          /* DEPARTURE TIME */

          const departureMinutes =
            timeToMinutes(
              flight.departure
            );

          const matchesDeparture =
            departureMinutes >=
              5 * 60 &&
            departureMinutes <=
              getDepartureLimit(
                departureTime
              );

          return (
            matchesFrom &&
            matchesTo &&
            matchesDate &&
            matchesClass &&
            matchesAirline &&
            matchesPrice &&
            matchesTransit &&
            matchesDeparture
          );
        }
      );
    }, [
      flights,
      appliedSearch,
      selectedAirlines,
      maxPrice,
      transit,
      departureTime,
    ]);

  /* ========================================
     SORT
  ======================================== */

  const sortedFlights =
    useMemo(() => {
      const result = [
        ...filteredFlights,
      ];

      result.sort((a, b) => {
        const priceA =
          Number(a.price) || 0;

        const priceB =
          Number(b.price) || 0;

        const priceDifference =
          priceSort ===
          "expensive"
            ? priceB - priceA
            : priceA - priceB;

        if (
          priceDifference !== 0
        ) {
          return priceDifference;
        }

        const timeA =
          timeToMinutes(
            a.departure
          );

        const timeB =
          timeToMinutes(
            b.departure
          );

        return timeSort ===
          "latest"
          ? timeB - timeA
          : timeA - timeB;
      });

      return result;
    }, [
      filteredFlights,
      priceSort,
      timeSort,
    ]);

  /* ========================================
     PAGINATION
  ======================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(
      sortedFlights.length /
        ITEMS_PER_PAGE
    )
  );

  const safeCurrentPage =
    Math.min(
      currentPage,
      totalPages
    );

  const startIndex =
    (safeCurrentPage - 1) *
    ITEMS_PER_PAGE;

  const visibleFlights =
    sortedFlights.slice(
      startIndex,
      startIndex +
        ITEMS_PER_PAGE
    );

  /* ========================================
     ADD FLIGHT
  ======================================== */

  const handleAddFlight = (
    newFlight
  ) => {
    const flight = {
      ...newFlight,

      id:
        globalThis.crypto
          ?.randomUUID?.() ??
        Date.now(),

      stops:
        Number(
          newFlight.stops
        ) || 0,
    };

    setFlights(
      (previous) => [
        flight,
        ...previous,
      ]
    );

    /*
      Clear route/date/class search
      after adding so the new flight
      isn't hidden by an unrelated
      search.
    */

    const resetSearch = {
      from: "",
      to: "",
      departureDate: "",
      seatClass: "All",
    };

    setSearchForm(
      resetSearch
    );

    setAppliedSearch(
      resetSearch
    );

    setTransit(
      INITIAL_TRANSIT
    );

    setMaxPrice(1000);

    setDepartureTime(100);

    setAirlineSelection(
      null
    );

    setCurrentPage(1);

    setIsAddFlightOpen(
      false
    );
  };

  /* ========================================
     RENDER
  ======================================== */

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <section className="schedule-page">

        <ScheduleHeader />

        <div className="schedule-content">

          {/* FILTERS */}

          <aside className="schedule-left-panel">

            <FilterSidebar
              sections={
                sections
              }
              transit={
                transit
              }
              maxPrice={
                maxPrice
              }
              departureTime={
                departureTime
              }
              airlines={
                airlines
              }
              selectedAirlines={
                selectedAirlines
              }
              onToggleSection={
                handleToggleSection
              }
              onTransitChange={
                handleTransitChange
              }
              onMaxPriceChange={
                handleMaxPriceChange
              }
              onDepartureTimeChange={
                handleDepartureTimeChange
              }
              onAirlineChange={
                handleAirlineChange
              }
              onSelectAllAirlines={
                handleSelectAllAirlines
              }
              onClearAllAirlines={
                handleClearAllAirlines
              }
              onResetFilters={
                handleResetFilters
              }
            />

          </aside>

          {/* RESULTS */}

          <div className="schedule-right-panel">

            <SearchBar
              from={
                searchForm.from
              }
              to={
                searchForm.to
              }
              departureDate={
                searchForm.departureDate
              }
              seatClass={
                searchForm.seatClass
              }
              locations={
                locations
              }
              onFromChange={
                handleFromChange
              }
              onToChange={
                handleToChange
              }
              onDepartureDateChange={
                handleDateChange
              }
              onSeatClassChange={
                handleSeatClassChange
              }
              onSwap={
                handleSwap
              }
              onSearch={
                handleSearch
              }
            />

            <FlightList
              flights={
                visibleFlights
              }
              totalResults={
                sortedFlights.length
              }
              priceSort={
                priceSort
              }
              timeSort={
                timeSort
              }
              onPriceSortChange={(
                value
              ) => {
                setPriceSort(
                  value
                );

                setCurrentPage(
                  1
                );
              }}
              onTimeSortChange={(
                value
              ) => {
                setTimeSort(
                  value
                );

                setCurrentPage(
                  1
                );
              }}
              onAddFlight={() =>
                setIsAddFlightOpen(
                  true
                )
              }
            />

            <Pagination
              currentPage={
                safeCurrentPage
              }
              totalPages={
                totalPages
              }
              totalItems={
                sortedFlights.length
              }
              itemsPerPage={
                ITEMS_PER_PAGE
              }
              onPageChange={
                setCurrentPage
              }
            />

            <ScheduleFooter />

          </div>

        </div>

        <AddFlightModal
          open={
            isAddFlightOpen
          }
          onClose={() =>
            setIsAddFlightOpen(
              false
            )
          }
          onAdd={
            handleAddFlight
          }
        />

      </section>
    </MainLayout>
  );
}

/* ========================================
   STOPS
======================================== */

function getFlightStops(
  flight
) {
  if (
    flight.stops !==
      undefined &&
    flight.stops !== null
  ) {
    return (
      Number(
        flight.stops
      ) || 0
    );
  }

  const value =
    String(
      flight.transit ||
        flight.stopType ||
        ""
    ).toLowerCase();

  if (
    value.includes("2") ||
    value.includes(
      "multiple"
    )
  ) {
    return 2;
  }

  if (
    value.includes("1") ||
    value.includes("one")
  ) {
    return 1;
  }

  return 0;
}

/* ========================================
   DEPARTURE LIMIT
======================================== */

function getDepartureLimit(
  percentage
) {
  const start =
    5 * 60;

  const end =
    23 * 60 + 59;

  return (
    start +
    Math.round(
      (Number(percentage) /
        100) *
        (end - start)
    )
  );
}

/* ========================================
   TIME -> MINUTES
======================================== */

function timeToMinutes(
  time
) {
  if (!time) {
    return 0;
  }

  const normalized =
    String(time)
      .trim()
      .toUpperCase();

  /*
    24 hour values from:
    <input type="time">
  */

  if (
    !normalized.includes(
      "AM"
    ) &&
    !normalized.includes(
      "PM"
    )
  ) {
    const [
      hour,
      minute,
    ] =
      normalized
        .split(":")
        .map(Number);

    if (
      Number.isNaN(hour)
    ) {
      return 0;
    }

    return (
      hour * 60 +
      (Number.isNaN(minute)
        ? 0
        : minute)
    );
  }

  /*
    Existing values:
    6:00 AM
    9:00 PM
  */

  const [
    value,
    period,
  ] =
    normalized.split(/\s+/);

  if (
    !value ||
    !period
  ) {
    return 0;
  }

  let [
    hour,
    minute,
  ] =
    value
      .split(":")
      .map(Number);

  if (
    Number.isNaN(hour)
  ) {
    return 0;
  }

  if (
    Number.isNaN(minute)
  ) {
    minute = 0;
  }

  if (
    period === "PM" &&
    hour !== 12
  ) {
    hour += 12;
  }

  if (
    period === "AM" &&
    hour === 12
  ) {
    hour = 0;
  }

  return (
    hour * 60 +
    minute
  );
}

/* ========================================
   DATE MATCHING
======================================== */

function datesMatch(
  flight,
  searchDate
) {
  if (!searchDate) {
    return true;
  }

  /*
    New flights should ideally contain:

    departureDetails.date

    Existing data contains values such as:
    "15 Jul 2028"

    Search input produces:
    "2028-07-15"
  */

  const flightDate =
    flight.departureDetails
      ?.date ||
    flight.date ||
    "";

  if (!flightDate) {
    return false;
  }

  const normalizedFlightDate =
    normalizeDate(
      flightDate
    );

  return (
    normalizedFlightDate ===
    searchDate
  );
}

/* ========================================
   NORMALIZE DATE
======================================== */

function normalizeDate(
  value
) {
  if (!value) {
    return "";
  }

  /*
    Already YYYY-MM-DD
  */

  if (
    /^\d{4}-\d{2}-\d{2}$/.test(
      value
    )
  ) {
    return value;
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "";
  }

  const year =
    date.getFullYear();

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      date.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}