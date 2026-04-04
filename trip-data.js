// ============================================================
// TRIP DATA - Edit this file to update your trip dashboard
// ============================================================
// After editing, commit and push to GitHub to update the live site.
//
// STATUS values:  "booked" | "needs-booking" | "in-progress"
// TYPE values:    "flight" | "hotel" | "train" | "activity"
// ============================================================

window.TRIP_DATA = {

  trip: {
    name: "Armenia, Copenhagen & Stockholm",
    startDate: "2026-07-25",
    endDate: "2026-08-13",
    traveler: "Hermine",
    year: 2026
  },

  legs: [
    // ========== LEG 1: Departure & Copenhagen Transit ==========
    {
      id: "leg-1",
      title: "Departure & Copenhagen Transit",
      startDate: "2026-07-25",
      endDate: "2026-07-27",
      location: "Copenhagen, Denmark",
      emoji: "\u{1F1E9}\u{1F1F0}",
      segments: [
        {
          id: "seg-flight-1",
          type: "flight",
          status: "booked",
          title: "SFO \u2192 CPH",
          details: {
            airline: "SAS Scandinavian Airlines",
            flightNumber: "",
            departure: {
              airport: "SFO",
              city: "San Francisco",
              dateTime: "2026-07-25T16:45"
            },
            arrival: {
              airport: "CPH",
              city: "Copenhagen",
              dateTime: "2026-07-26T12:00"
            },
            duration: "10h 15m",
            layovers: [],
            confirmationCode: "",
            notes: "Overnight flight"
          }
        },
        {
          id: "seg-hotel-1",
          type: "hotel",
          status: "needs-booking",
          title: "Copenhagen Hotel (1 night)",
          details: {
            hotelName: "",
            address: "",
            checkIn: "2026-07-26",
            checkOut: "2026-07-27",
            nights: 1,
            confirmationCode: "",
            notes: "Arriving at noon, rest after overnight flight"
          }
        },
        {
          id: "seg-flight-2",
          type: "flight",
          status: "booked",
          title: "CPH \u2192 EVN via Riga",
          details: {
            airline: "Air Baltic",
            flightNumber: "",
            departure: {
              airport: "CPH",
              city: "Copenhagen",
              dateTime: "2026-07-27T20:30"
            },
            arrival: {
              airport: "EVN",
              city: "Yerevan",
              dateTime: "2026-07-28T04:40"
            },
            duration: "6h 10m",
            layovers: [
              { airport: "RIX", city: "Riga", duration: "45m" }
            ],
            confirmationCode: "",
            notes: "Overnight flight, arrives early morning"
          }
        }
      ]
    },

    // ========== LEG 2: Armenia ==========
    {
      id: "leg-2",
      title: "Armenia",
      startDate: "2026-07-28",
      endDate: "2026-08-06",
      location: "Yerevan, Armenia",
      emoji: "\u{1F1E6}\u{1F1F2}",
      segments: [
        {
          id: "seg-hotel-2",
          type: "hotel",
          status: "needs-booking",
          title: "Yerevan Hotel",
          details: {
            hotelName: "",
            address: "",
            checkIn: "2026-07-27",
            checkOut: "2026-08-06",
            nights: 10,
            confirmationCode: "",
            notes: "Book from July 27 so room is ready for 4:40 AM arrival on July 28"
          }
        },
        {
          id: "seg-activity-1",
          type: "activity",
          status: "booked",
          title: "Explore Armenia",
          details: {
            description: "Free time to explore Yerevan and surroundings",
            startDate: "2026-07-28",
            endDate: "2026-08-05",
            notes: ""
          }
        }
      ]
    },

    // ========== LEG 3: Stockholm ==========
    {
      id: "leg-3",
      title: "Stockholm",
      startDate: "2026-08-06",
      endDate: "2026-08-11",
      location: "Stockholm, Sweden",
      emoji: "\u{1F1F8}\u{1F1EA}",
      segments: [
        {
          id: "seg-flight-3",
          type: "flight",
          status: "booked",
          title: "EVN \u2192 ARN via Istanbul",
          details: {
            airline: "Turkish Airlines",
            flightNumber: "",
            departure: {
              airport: "EVN",
              city: "Yerevan",
              dateTime: "2026-08-06T09:40"
            },
            arrival: {
              airport: "ARN",
              city: "Stockholm",
              dateTime: "2026-08-06T17:35"
            },
            duration: "9h 55m",
            layovers: [
              { airport: "IST", city: "Istanbul", duration: "3h 45m" }
            ],
            confirmationCode: "",
            notes: ""
          }
        },
        {
          id: "seg-hotel-3",
          type: "hotel",
          status: "needs-booking",
          title: "Stockholm Hotel (5 nights)",
          details: {
            hotelName: "",
            address: "",
            checkIn: "2026-08-06",
            checkOut: "2026-08-11",
            nights: 5,
            confirmationCode: "",
            notes: ""
          }
        },
        {
          id: "seg-activity-2",
          type: "activity",
          status: "booked",
          title: "Explore Stockholm",
          details: {
            description: "Free time to explore Stockholm",
            startDate: "2026-08-07",
            endDate: "2026-08-10",
            notes: ""
          }
        }
      ]
    },

    // ========== LEG 4: Return to Copenhagen & Home ==========
    {
      id: "leg-4",
      title: "Return to Copenhagen & Home",
      startDate: "2026-08-11",
      endDate: "2026-08-13",
      location: "Copenhagen, Denmark",
      emoji: "\u{1F1E9}\u{1F1F0}",
      segments: [
        {
          id: "seg-train-1",
          type: "train",
          status: "needs-booking",
          title: "Stockholm \u2192 Copenhagen Train",
          details: {
            operator: "",
            trainNumber: "",
            departure: {
              station: "Stockholm Central",
              city: "Stockholm",
              dateTime: ""
            },
            arrival: {
              station: "Copenhagen Central",
              city: "Copenhagen",
              dateTime: ""
            },
            duration: "",
            confirmationCode: "",
            notes: "SJ or Sn\u00e4llt\u00e5get are common operators for this route"
          }
        },
        {
          id: "seg-hotel-4",
          type: "hotel",
          status: "needs-booking",
          title: "Copenhagen Hotel (2 nights)",
          details: {
            hotelName: "",
            address: "",
            checkIn: "2026-08-11",
            checkOut: "2026-08-13",
            nights: 2,
            confirmationCode: "",
            notes: ""
          }
        },
        {
          id: "seg-activity-3",
          type: "activity",
          status: "booked",
          title: "Explore Copenhagen",
          details: {
            description: "Full day to explore Copenhagen",
            startDate: "2026-08-12",
            endDate: "2026-08-12",
            notes: ""
          }
        },
        {
          id: "seg-flight-4",
          type: "flight",
          status: "booked",
          title: "CPH \u2192 SFO",
          details: {
            airline: "SAS Scandinavian Airlines",
            flightNumber: "",
            departure: {
              airport: "CPH",
              city: "Copenhagen",
              dateTime: "2026-08-13T12:45"
            },
            arrival: {
              airport: "SFO",
              city: "San Francisco",
              dateTime: "2026-08-13T14:40"
            },
            duration: "10h 55m",
            layovers: [],
            confirmationCode: "",
            notes: "Arrives same day (time zone gain)"
          }
        }
      ]
    }
  ]
};
