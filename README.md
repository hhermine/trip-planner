# Trip Dashboard

A static trip planning dashboard for my Armenia, Copenhagen & Stockholm trip (July-August 2026).

**Live site:** `https://<your-username>.github.io/<repo-name>/`

## How to Deploy on GitHub Pages

1. **Create a new repository** on [github.com](https://github.com/new)
   - Name it something like `trip-dashboard`
   - Set to **Public** (required for free GitHub Pages)
   - Click **Create repository**

2. **Upload files** — on the repo page, click **Add file > Upload files** and drag in:
   - `index.html`
   - `style.css`
   - `trip-data.js`
   - `README.md`
   - Click **Commit changes**

3. **Enable GitHub Pages**
   - Go to **Settings > Pages** (left sidebar under "Code and automation")
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
   - Click **Save**
   - Wait 1-2 minutes, then visit `https://<your-username>.github.io/<repo-name>/`

## How to Update Bookings

1. Go to your repository on GitHub.com
2. Click on **`trip-data.js`**
3. Click the **pencil icon** (Edit this file)
4. Find the segment you want to update (use Ctrl+F to search by title)
5. Make your changes:
   - Change `status: "needs-booking"` to `status: "booked"`
   - Fill in details like `hotelName`, `confirmationCode`, etc.
6. Click **Commit changes** at the bottom
7. The live site updates automatically in about 60 seconds

## Adding a New Segment

Copy one of these templates and paste it into the `segments` array of the appropriate leg in `trip-data.js`.

### New Flight
```javascript
{
  id: "seg-flight-new",
  type: "flight",
  status: "booked",
  title: "ABC to XYZ",
  details: {
    airline: "Airline Name",
    flightNumber: "XX 123",
    departure: { airport: "ABC", city: "City", dateTime: "2026-07-30T14:00" },
    arrival: { airport: "XYZ", city: "City", dateTime: "2026-07-30T18:00" },
    duration: "4h 00m",
    layovers: [],
    confirmationCode: "ABC123",
    notes: ""
  }
}
```

### New Hotel
```javascript
{
  id: "seg-hotel-new",
  type: "hotel",
  status: "booked",
  title: "Hotel Name (X nights)",
  details: {
    hotelName: "Hotel Name",
    address: "123 Street, City",
    checkIn: "2026-07-30",
    checkOut: "2026-08-02",
    nights: 3,
    confirmationCode: "ABC123",
    notes: ""
  }
}
```

### New Train
```javascript
{
  id: "seg-train-new",
  type: "train",
  status: "booked",
  title: "City A to City B Train",
  details: {
    operator: "Train Company",
    trainNumber: "123",
    departure: { station: "Station Name", city: "City A", dateTime: "2026-08-01T09:00" },
    arrival: { station: "Station Name", city: "City B", dateTime: "2026-08-01T14:00" },
    duration: "5h 00m",
    confirmationCode: "ABC123",
    notes: ""
  }
}
```

### New Activity
```javascript
{
  id: "seg-activity-new",
  type: "activity",
  status: "booked",
  title: "Activity Name",
  details: {
    description: "What you'll be doing",
    startDate: "2026-07-30",
    endDate: "2026-07-30",
    notes: ""
  }
}
```

## Status Values

| Value | Meaning | Dashboard Color |
|-------|---------|-----------------|
| `"booked"` | Confirmed and ready | Green |
| `"needs-booking"` | Still need to book this | Red |
| `"in-progress"` | Researching / comparing options | Amber |
