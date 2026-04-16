// ============================================================
// TRIP DATA - Edit via the dashboard UI or directly in this file
// ============================================================
// STATUS values:  "booked" | "needs-booking" | "in-progress"
// TYPE values:    "flight" | "hotel" | "train" | "activity"
// ============================================================

window.TRIP_DATA = {
  "trip": {
    "name": "Armenia, Copenhagen & Stockholm",
    "startDate": "2026-07-25",
    "endDate": "2026-08-13",
    "traveler": "",
    "year": 2026
  },
  "legs": [
    {
      "id": "leg-1",
      "title": "Departure & Copenhagen Transit",
      "startDate": "2026-07-25",
      "endDate": "2026-07-27",
      "location": "Copenhagen, Denmark",
      "emoji": "🇩🇰",
      "segments": [
        {
          "id": "seg-flight-1",
          "type": "flight",
          "status": "booked",
          "title": "SFO → CPH",
          "details": {
            "airline": "SAS Scandinavian Airlines",
            "flightNumber": "",
            "departure": {
              "airport": "SFO",
              "city": "San Francisco",
              "dateTime": "2026-07-25T16:45"
            },
            "arrival": {
              "airport": "CPH",
              "city": "Copenhagen",
              "dateTime": "2026-07-26T12:00"
            },
            "duration": "10h 15m",
            "layovers": [],
            "confirmationCode": "",
            "notes": "Overnight flight"
          }
        },
        {
          "id": "seg-hotel-1",
          "type": "hotel",
          "status": "booked",
          "title": "Copenhagen Hotel (1 night)",
          "details": {
            "hotelName": "Hotel Vesterbro",
            "address": "Vesterbrogade 23-29, Vesterbro, 1620 Copenhagen, Denmark",
            "checkIn": "2026-07-26",
            "checkOut": "2026-07-27",
            "nights": 1,
            "confirmationCode": "",
            "notes": "Check in 3 PM, check out 11 AM"
          }
        },
        {
          "id": "seg-flight-2",
          "type": "flight",
          "status": "booked",
          "title": "CPH → EVN via Riga",
          "details": {
            "airline": "Air Baltic",
            "flightNumber": "",
            "departure": {
              "airport": "CPH",
              "city": "Copenhagen",
              "dateTime": "2026-07-27T20:30"
            },
            "arrival": {
              "airport": "EVN",
              "city": "Yerevan",
              "dateTime": "2026-07-28T04:40"
            },
            "duration": "6h 10m",
            "layovers": [
              {
                "airport": "RIX",
                "city": "Riga",
                "duration": "45m"
              }
            ],
            "confirmationCode": "",
            "notes": "Overnight flight, arrives early morning"
          }
        }
      ]
    },
    {
      "id": "leg-2",
      "title": "Armenia",
      "startDate": "2026-07-28",
      "endDate": "2026-08-06",
      "location": "Yerevan, Armenia",
      "emoji": "🇦🇲",
      "segments": [
        {
          "id": "seg-hotel-2",
          "type": "hotel",
          "status": "booked",
          "title": "Yerevan Apartment",
          "details": {
            "hotelName": "2 bed 2 abth",
            "address": "",
            "checkIn": "2026-08-03",
            "checkOut": "2026-08-06",
            "nights": 3,
            "confirmationCode": "",
            "notes": "Check in 2pm, check out 11am"
          }
        }
      ]
    },
    {
      "id": "leg-3",
      "title": "Stockholm",
      "startDate": "2026-08-06",
      "endDate": "2026-08-11",
      "location": "Stockholm, Sweden",
      "emoji": "🇸🇪",
      "segments": [
        {
          "id": "seg-flight-3",
          "type": "flight",
          "status": "booked",
          "title": "EVN → ARN via Istanbul",
          "details": {
            "airline": "Turkish Airlines",
            "flightNumber": "",
            "departure": {
              "airport": "EVN",
              "city": "Yerevan",
              "dateTime": "2026-08-06T09:40"
            },
            "arrival": {
              "airport": "ARN",
              "city": "Stockholm",
              "dateTime": "2026-08-06T17:35"
            },
            "duration": "9h 55m",
            "layovers": [
              {
                "airport": "IST",
                "city": "Istanbul",
                "duration": "3h 45m"
              }
            ],
            "confirmationCode": "",
            "notes": ""
          }
        },
        {
          "id": "seg-hotel-3",
          "type": "hotel",
          "status": "booked",
          "title": "Stockholm Hotel (5 nights)",
          "details": {
            "hotelName": "Radisson Blu Royal Viking Hotel, Stockholm",
            "address": "Vasagatan 1, Norrmalm, 101 24 Stockholm, Sweden",
            "checkIn": "2026-08-06",
            "checkOut": "2026-08-11",
            "nights": 5,
            "confirmationCode": "",
            "notes": ""
          }
        }
      ]
    },
    {
      "id": "leg-4",
      "title": "Return to Copenhagen & Home",
      "startDate": "2026-08-11",
      "endDate": "2026-08-13",
      "location": "Copenhagen, Denmark",
      "emoji": "🇩🇰",
      "segments": [
        {
          "id": "seg-train-1",
          "type": "train",
          "status": "needs-booking",
          "title": "Stockholm → Copenhagen Train",
          "details": {
            "operator": "",
            "trainNumber": "",
            "departure": {
              "station": "Stockholm Central",
              "city": "Stockholm",
              "dateTime": ""
            },
            "arrival": {
              "station": "Copenhagen Central",
              "city": "Copenhagen",
              "dateTime": ""
            },
            "duration": "",
            "confirmationCode": "",
            "notes": "SJ or Snälltåget are common operators for this route"
          }
        },
        {
          "id": "seg-hotel-4",
          "type": "hotel",
          "status": "needs-booking",
          "title": "Copenhagen Hotel (2 nights)",
          "details": {
            "hotelName": "",
            "address": "",
            "checkIn": "2026-08-11",
            "checkOut": "2026-08-13",
            "nights": 2,
            "confirmationCode": "",
            "notes": ""
          }
        },
        {
          "id": "seg-activity-3",
          "type": "activity",
          "status": "booked",
          "title": "Explore Copenhagen",
          "details": {
            "description": "Full day to explore Copenhagen",
            "startDate": "2026-08-12",
            "endDate": "2026-08-12",
            "notes": ""
          }
        },
        {
          "id": "seg-flight-4",
          "type": "flight",
          "status": "booked",
          "title": "CPH → SFO",
          "details": {
            "airline": "SAS Scandinavian Airlines",
            "flightNumber": "",
            "departure": {
              "airport": "CPH",
              "city": "Copenhagen",
              "dateTime": "2026-08-13T12:45"
            },
            "arrival": {
              "airport": "SFO",
              "city": "San Francisco",
              "dateTime": "2026-08-13T14:40"
            },
            "duration": "10h 55m",
            "layovers": [],
            "confirmationCode": "",
            "notes": "Arrives same day (time zone gain)"
          }
        }
      ]
    }
  ]
};
