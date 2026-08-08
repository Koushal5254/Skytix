const conversations = [
  {
    id: 1,
    name: "Santo Reagan",
    role: "Customer",
    initials: "SR",
    time: "1:00 PM",
    preview:
      "What are the COVID-19 requirements for my flight from Sydney to Singapore?",
    unread: 0,
  },

  {
    id: 2,
    name: "Admin Team",
    role: "",
    initials: "AD",
    time: "1:15 PM",
    preview:
      "Reminder: Update the flight schedule for next week due to maintenance work.",
    unread: 0,
  },

  {
    id: 3,
    name: "IT Support",
    role: "",
    initials: "IT",
    time: "1:30 PM",
    preview:
      "The server maintenance will be performed on July 3, 2024, from 2:00 AM to 4:00 AM. Expect some downtime.",
    unread: 3,
  },

  {
    id: 4,
    name: "Marketing Team",
    role: "",
    initials: "MT",
    time: "1:45 PM",
    preview:
      "Please review the new promotional campaign draft and provide feedback.",
    unread: 6,
  },

  {
    id: 5,
    name: "HR Department",
    role: "",
    initials: "HR",
    time: "2:00 PM",
    preview:
      "Reminder: Submit your performance reviews by the end of the week.",
    unread: 0,
  },

  {
    id: 6,
    name: "Vicky Wisteria",
    role: "Customer",
    initials: "VW",
    time: "2:15 PM",
    preview:
      "I forgot my password. Can you assist me in resetting it?",
    unread: 2,
  },

  {
    id: 7,
    name: "Finance Team",
    role: "",
    initials: "FT",
    time: "2:30 PM",
    preview:
      "Monthly expense reports are due tomorrow. Ensure all entries are completed.",
    unread: 0,
  },

  {
    id: 8,
    name: "Operations Manager",
    role: "",
    initials: "OP",
    time: "2:45 PM",
    preview:
      "The new check-in system will be tested tomorrow at 10:00 AM. Please ensure your team is ready.",
    unread: 1,
  },

  {
    id: 9,
    name: "Yuri Wakamura",
    role: "Customer",
    initials: "YW",
    time: "Yesterday",
    preview:
      "Hi, I need to cancel my flight from New York to London next week. What are your cancellation policies?",
    unread: 5,
  },

  {
    id: 10,
    name: "Oscar Bolster",
    role: "Customer",
    initials: "OB",
    time: "08/07/2028",
    preview:
      "Great, thank you so much for your help. I really appreciate you walking me through the process.",
    unread: 0,
  },
];

/* =========================================================
   CHAT MESSAGES

   sender:
   "customer" = left/incoming
   "admin"    = right/outgoing
========================================================= */

const chatMessages = {
  /* =======================================================
     SANTO REAGAN
  ======================================================= */

  1: [
    {
      id: 101,
      sender: "customer",
      text:
        "What are the COVID-19 requirements for my flight from Sydney to Singapore?",
      time: "1:00 PM",
    },

    {
      id: 102,
      sender: "admin",
      text:
        "For your flight from Sydney to Singapore, please make sure to check the latest travel requirements before departure. Requirements may vary depending on current regulations.",
      time: "1:05 PM",
    },
  ],

  /* =======================================================
     ADMIN TEAM
  ======================================================= */

  2: [
    {
      id: 201,
      sender: "customer",
      text:
        "Reminder: Update the flight schedule for next week due to maintenance work.",
      time: "1:15 PM",
    },

    {
      id: 202,
      sender: "admin",
      text:
        "Got it. I will review the affected flights and update the schedule.",
      time: "1:18 PM",
    },
  ],

  /* =======================================================
     IT SUPPORT
  ======================================================= */

  3: [
    {
      id: 301,
      sender: "customer",
      text:
        "The server maintenance will be performed on July 3, 2024, from 2:00 AM to 4:00 AM. Expect some downtime.",
      time: "1:30 PM",
    },

    {
      id: 302,
      sender: "admin",
      text:
        "Thanks for the update. We will make sure the team is aware of the scheduled downtime.",
      time: "1:34 PM",
    },
  ],

  /* =======================================================
     MARKETING TEAM
  ======================================================= */

  4: [
    {
      id: 401,
      sender: "customer",
      text:
        "Please review the new promotional campaign draft and provide feedback.",
      time: "1:45 PM",
    },

    {
      id: 402,
      sender: "admin",
      text:
        "Sure. I will review the campaign draft and send the feedback shortly.",
      time: "1:49 PM",
    },
  ],

  /* =======================================================
     HR DEPARTMENT
  ======================================================= */

  5: [
    {
      id: 501,
      sender: "customer",
      text:
        "Reminder: Submit your performance reviews by the end of the week.",
      time: "2:00 PM",
    },

    {
      id: 502,
      sender: "admin",
      text:
        "Understood. I will make sure the performance review is submitted before the deadline.",
      time: "2:04 PM",
    },
  ],

  /* =======================================================
     VICKY WISTERIA
  ======================================================= */

  6: [
    {
      id: 601,
      sender: "customer",
      text:
        "I forgot my password. Can you assist me in resetting it?",
      time: "2:15 PM",
    },

    {
      id: 602,
      sender: "admin",
      text:
        "Of course. I can help you reset your password. Please follow the password reset instructions sent to your registered email address.",
      time: "2:18 PM",
    },
  ],

  /* =======================================================
     FINANCE TEAM
  ======================================================= */

  7: [
    {
      id: 701,
      sender: "customer",
      text:
        "Monthly expense reports are due tomorrow. Ensure all entries are completed.",
      time: "2:30 PM",
    },

    {
      id: 702,
      sender: "admin",
      text:
        "Noted. I will review the entries and make sure the report is completed.",
      time: "2:33 PM",
    },
  ],

  /* =======================================================
     OPERATIONS MANAGER
  ======================================================= */

  8: [
    {
      id: 801,
      sender: "customer",
      text:
        "The new check-in system will be tested tomorrow at 10:00 AM. Please ensure your team is ready.",
      time: "2:45 PM",
    },

    {
      id: 802,
      sender: "admin",
      text:
        "Understood. I will inform the team and make sure everything is ready for the test.",
      time: "2:49 PM",
    },
  ],

  /* =======================================================
     YURI WAKAMURA
  ======================================================= */

  9: [
    {
      id: 901,
      sender: "customer",
      text:
        "Hi, I need to cancel my flight from New York to London next week. What are your cancellation policies?",
      time: "Yesterday",
    },

    {
      id: 902,
      sender: "admin",
      text:
        "I can help you with that. The cancellation options depend on your booking and fare conditions.",
      time: "Yesterday",
    },
  ],

  /* =======================================================
     OSCAR BOLSTER
  ======================================================= */

  10: [
    {
      id: 1001,
      sender: "customer",
      text:
        "Great, thank you so much for your help. I really appreciate you walking me through the process.",
      time: "08/07/2028",
    },

    {
      id: 1002,
      sender: "admin",
      text:
        "You're welcome. I'm glad I could help. Please contact us again if you need any further assistance.",
      time: "08/07/2028",
    },
  ],
};

/* =========================================================
   EXPORTS
========================================================= */

export {
  conversations,
  chatMessages,
};