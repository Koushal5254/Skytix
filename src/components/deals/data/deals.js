const deals = [
  {
    id: 1,
    promoPeriod: "July 1, 2024 - August 15, 2024",
  },
  {
    id: 2,
    promoPeriod: "July 10, 2024 - September 10, 2024",
  },
  {
    id: 3,
    promoPeriod: "July 15, 2024 - October 5, 2024",
  },
  {
    id: 4,
    promoPeriod: "July 20, 2024 - November 20, 2024",
  },
  {
    id: 5,
    promoPeriod: "August 1, 2024 - December 1, 2024",
  },
  {
    id: 6,
    promoPeriod: "August 15, 2024 - January 15, 2025",
  },
  {
    id: 7,
    promoPeriod: "September 1, 2024 - February 20, 2025",
  },
  {
    id: 8,
    promoPeriod: "September 15, 2024 - March 25, 2025",
  },
  {
    id: 9,
    promoPeriod: "October 1, 2024 - April 10, 2025",
  },

  /*
   * The reference shows 26 total promos,
   * while page 1 displays the nine above.
   *
   * The remaining records allow pagination
   * to work. Their periods can be replaced
   * later if another reference page provides
   * the exact values.
   */

  {
    id: 10,
    promoPeriod: "October 15, 2024 - April 25, 2025",
  },
  {
    id: 11,
    promoPeriod: "November 1, 2024 - May 10, 2025",
  },
  {
    id: 12,
    promoPeriod: "November 15, 2024 - May 25, 2025",
  },
  {
    id: 13,
    promoPeriod: "December 1, 2024 - June 10, 2025",
  },
  {
    id: 14,
    promoPeriod: "December 15, 2024 - June 25, 2025",
  },
  {
    id: 15,
    promoPeriod: "January 1, 2025 - July 10, 2025",
  },
  {
    id: 16,
    promoPeriod: "January 15, 2025 - July 25, 2025",
  },
  {
    id: 17,
    promoPeriod: "February 1, 2025 - August 10, 2025",
  },
  {
    id: 18,
    promoPeriod: "February 15, 2025 - August 25, 2025",
  },
  {
    id: 19,
    promoPeriod: "March 1, 2025 - September 10, 2025",
  },
  {
    id: 20,
    promoPeriod: "March 15, 2025 - September 25, 2025",
  },
  {
    id: 21,
    promoPeriod: "April 1, 2025 - October 10, 2025",
  },
  {
    id: 22,
    promoPeriod: "April 15, 2025 - October 25, 2025",
  },
  {
    id: 23,
    promoPeriod: "May 1, 2025 - November 10, 2025",
  },
  {
    id: 24,
    promoPeriod: "May 15, 2025 - November 25, 2025",
  },
  {
    id: 25,
    promoPeriod: "June 1, 2025 - December 10, 2025",
  },
  {
    id: 26,
    promoPeriod: "June 15, 2025 - December 25, 2025",
  },
];

const DEALS_PER_PAGE = 9;

export {
  deals,
  DEALS_PER_PAGE,
};