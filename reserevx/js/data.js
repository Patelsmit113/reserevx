// Mock data for Reserevx booking platform

const BOOKING_DATA = {
  bus: [
    { id: 'bus-001', name: 'Volvo AC Sleeper', operator: 'RedBus Express', from: 'Mumbai', to: 'Pune', departure: '06:30 AM', arrival: '10:00 AM', duration: '3h 30m', price: 450, seats: 12, rating: 4.5, type: 'AC Sleeper' },
    { id: 'bus-002', name: 'Mercedes Benz', operator: 'VRL Travels', from: 'Mumbai', to: 'Pune', departure: '08:00 AM', arrival: '11:30 AM', duration: '3h 30m', price: 380, seats: 8, rating: 4.2, type: 'AC Seater' },
    { id: 'bus-003', name: 'Scania Multi-Axle', operator: 'SRS Travels', from: 'Mumbai', to: 'Pune', departure: '10:15 AM', arrival: '01:45 PM', duration: '3h 30m', price: 520, seats: 15, rating: 4.7, type: 'AC Sleeper' },
    { id: 'bus-004', name: 'Ashok Leyland', operator: 'Neeta Travels', from: 'Mumbai', to: 'Pune', departure: '02:00 PM', arrival: '05:30 PM', duration: '3h 30m', price: 320, seats: 20, rating: 3.9, type: 'Non-AC Seater' },
    { id: 'bus-005', name: 'Volvo Multi-Axle', operator: 'Purple Travels', from: 'Delhi', to: 'Jaipur', departure: '07:00 AM', arrival: '01:00 PM', duration: '6h', price: 650, seats: 10, rating: 4.6, type: 'AC Sleeper' },
    { id: 'bus-006', name: 'Tata Starbus', operator: 'RSRTC', from: 'Delhi', to: 'Jaipur', departure: '09:30 AM', arrival: '03:30 PM', duration: '6h', price: 480, seats: 18, rating: 4.0, type: 'AC Seater' },
  ],

  flight: [
    { id: 'flt-001', name: 'IndiGo 6E-204', operator: 'IndiGo', from: 'Mumbai (BOM)', to: 'Delhi (DEL)', departure: '06:00 AM', arrival: '08:15 AM', duration: '2h 15m', price: 4500, seats: 45, rating: 4.4, type: 'Economy', stops: 'Non-stop' },
    { id: 'flt-002', name: 'Air India AI-665', operator: 'Air India', from: 'Mumbai (BOM)', to: 'Delhi (DEL)', departure: '09:30 AM', arrival: '11:50 AM', duration: '2h 20m', price: 5200, seats: 32, rating: 4.1, type: 'Economy', stops: 'Non-stop' },
    { id: 'flt-003', name: 'SpiceJet SG-8169', operator: 'SpiceJet', from: 'Mumbai (BOM)', to: 'Delhi (DEL)', departure: '02:00 PM', arrival: '04:20 PM', duration: '2h 20m', price: 3800, seats: 28, rating: 4.0, type: 'Economy', stops: 'Non-stop' },
    { id: 'flt-004', name: 'Vistara UK-944', operator: 'Vistara', from: 'Mumbai (BOM)', to: 'Delhi (DEL)', departure: '06:30 PM', arrival: '08:50 PM', duration: '2h 20m', price: 6800, seats: 15, rating: 4.7, type: 'Premium Economy', stops: 'Non-stop' },
    { id: 'flt-005', name: 'IndiGo 6E-501', operator: 'IndiGo', from: 'Bangalore (BLR)', to: 'Chennai (MAA)', departure: '07:15 AM', arrival: '08:30 AM', duration: '1h 15m', price: 3200, seats: 50, rating: 4.3, type: 'Economy', stops: 'Non-stop' },
    { id: 'flt-006', name: 'Akasa QP-1102', operator: 'Akasa Air', from: 'Bangalore (BLR)', to: 'Chennai (MAA)', departure: '11:00 AM', arrival: '12:15 PM', duration: '1h 15m', price: 2900, seats: 38, rating: 4.5, type: 'Economy', stops: 'Non-stop' },
  ],

  train: [
    { id: 'trn-001', name: 'Rajdhani Express', operator: 'Indian Railways', from: 'Mumbai CST', to: 'New Delhi', departure: '04:15 PM', arrival: '08:35 AM', duration: '16h 20m', price: 1850, seats: 24, rating: 4.6, type: '3AC', class: '3AC' },
    { id: 'trn-002', name: 'Duronto Express', operator: 'Indian Railways', from: 'Mumbai CST', to: 'New Delhi', departure: '11:00 PM', arrival: '04:00 PM', duration: '17h', price: 2200, seats: 18, rating: 4.5, type: '2AC', class: '2AC' },
    { id: 'trn-003', name: 'Deccan Queen', operator: 'Indian Railways', from: 'Mumbai CST', to: 'Pune', departure: '05:10 AM', arrival: '09:15 AM', duration: '4h 5m', price: 350, seats: 40, rating: 4.3, type: 'CC', class: 'Chair Car' },
    { id: 'trn-004', name: 'Shatabdi Express', operator: 'Indian Railways', from: 'Mumbai CST', to: 'Pune', departure: '06:25 AM', arrival: '09:45 AM', duration: '3h 20m', price: 520, seats: 35, rating: 4.4, type: 'CC', class: 'Chair Car' },
    { id: 'trn-005', name: 'Garib Rath', operator: 'Indian Railways', from: 'Delhi', to: 'Jaipur', departure: '06:00 PM', arrival: '10:30 PM', duration: '4h 30m', price: 280, seats: 50, rating: 3.8, type: '3AC', class: '3AC' },
    { id: 'trn-006', name: 'Double Decker', operator: 'Indian Railways', from: 'Delhi', to: 'Jaipur', departure: '07:30 AM', arrival: '12:00 PM', duration: '4h 30m', price: 420, seats: 30, rating: 4.2, type: 'CC', class: 'Chair Car' },
  ],

  movie: [
    { id: 'mov-001', name: 'Dune: Part Three', operator: 'PVR Cinemas', from: 'PVR Phoenix', to: '', departure: '10:00 AM', arrival: '01:00 PM', duration: '2h 45m', price: 350, seats: 45, rating: 4.8, type: 'IMAX', genre: 'Sci-Fi', language: 'English' },
    { id: 'mov-002', name: 'Dune: Part Three', operator: 'INOX', from: 'INOX R-City', to: '', departure: '01:30 PM', arrival: '04:15 PM', duration: '2h 45m', price: 280, seats: 60, rating: 4.7, type: 'Standard', genre: 'Sci-Fi', language: 'English' },
    { id: 'mov-003', name: 'Pushpa 3', operator: 'Cinepolis', from: 'Cinepolis Seawoods', to: '', departure: '06:00 PM', arrival: '09:15 PM', duration: '3h 15m', price: 320, seats: 55, rating: 4.5, type: 'Dolby Atmos', genre: 'Action', language: 'Telugu' },
    { id: 'mov-004', name: 'Pushpa 3', operator: 'PVR Cinemas', from: 'PVR Juhu', to: '', departure: '09:30 PM', arrival: '12:45 AM', duration: '3h 15m', price: 400, seats: 30, rating: 4.6, type: 'Gold Class', genre: 'Action', language: 'Telugu' },
    { id: 'mov-005', name: 'Avatar 4', operator: 'IMAX', from: 'IMAX Wadala', to: '', departure: '11:00 AM', arrival: '02:30 PM', duration: '3h 30m', price: 550, seats: 40, rating: 4.9, type: 'IMAX 3D', genre: 'Sci-Fi', language: 'English' },
    { id: 'mov-006', name: 'Stree 3', operator: 'Miraj Cinemas', from: 'Miraj Sion', to: '', departure: '07:00 PM', arrival: '09:30 PM', duration: '2h 30m', price: 250, seats: 70, rating: 4.3, type: 'Standard', genre: 'Horror-Comedy', language: 'Hindi' },
  ],

  hotel: [
    { id: 'htl-001', name: 'Taj Mahal Palace', operator: 'Taj Hotels', from: 'Mumbai', to: '', departure: 'Check-in 2 PM', arrival: 'Check-out 11 AM', duration: '5 Star', price: 15000, seats: 5, rating: 4.9, type: 'Luxury', amenities: 'Pool, Spa, WiFi' },
    { id: 'htl-002', name: 'ITC Grand Central', operator: 'ITC Hotels', from: 'Mumbai', to: '', departure: 'Check-in 2 PM', arrival: 'Check-out 11 AM', duration: '5 Star', price: 12000, seats: 8, rating: 4.7, type: 'Luxury', amenities: 'Pool, Gym, WiFi' },
    { id: 'htl-003', name: 'Oberoi Delhi', operator: 'Oberoi Hotels', from: 'Delhi', to: '', departure: 'Check-in 2 PM', arrival: 'Check-out 11 AM', duration: '5 Star', price: 18000, seats: 3, rating: 4.9, type: 'Luxury', amenities: 'Pool, Spa, Restaurant' },
    { id: 'htl-004', name: 'Treebo Trend', operator: 'Treebo', from: 'Pune', to: '', departure: 'Check-in 12 PM', arrival: 'Check-out 10 AM', duration: '3 Star', price: 2500, seats: 12, rating: 4.1, type: 'Budget', amenities: 'WiFi, Breakfast' },
    { id: 'htl-005', name: 'FabHotel Prime', operator: 'FabHotels', from: 'Bangalore', to: '', departure: 'Check-in 12 PM', arrival: 'Check-out 10 AM', duration: '3 Star', price: 3200, seats: 10, rating: 4.2, type: 'Mid-Range', amenities: 'WiFi, Gym' },
    { id: 'htl-006', name: 'OYO Townhouse', operator: 'OYO', from: 'Jaipur', to: '', departure: 'Check-in 12 PM', arrival: 'Check-out 11 AM', duration: '2 Star', price: 1800, seats: 15, rating: 3.9, type: 'Budget', amenities: 'WiFi' },
  ],

  event: [
    { id: 'evt-001', name: 'Coldplay Concert', operator: 'BookMyShow', from: 'DY Patil Stadium', to: '', departure: '07:00 PM', arrival: '11:00 PM', duration: '4h', price: 3500, seats: 200, rating: 4.9, type: 'Music', category: 'Concert' },
    { id: 'evt-002', name: 'IPL Final 2026', operator: 'BookMyShow', from: 'Narendra Modi Stadium', to: '', departure: '07:30 PM', arrival: '11:30 PM', duration: '4h', price: 5000, seats: 150, rating: 4.8, type: 'Sports', category: 'Cricket' },
    { id: 'evt-003', name: 'Stand-up Comedy Night', operator: 'Insider', from: 'NCPA Mumbai', to: '', departure: '08:00 PM', arrival: '10:30 PM', duration: '2h 30m', price: 800, seats: 80, rating: 4.5, type: 'Comedy', category: 'Stand-up' },
    { id: 'evt-004', name: 'Tech Summit 2026', operator: 'MeraEvents', from: 'BEC Mumbai', to: '', departure: '09:00 AM', arrival: '06:00 PM', duration: '9h', price: 2500, seats: 300, rating: 4.6, type: 'Conference', category: 'Technology' },
  ],
};

const CITIES = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
  'Pune', 'Jaipur', 'Ahmedabad', 'Goa', 'Kochi', 'Chandigarh'
];

const CATEGORY_INFO = {
  bus: { title: 'Bus Tickets', icon: '🚌', color: 'icon-bus', page: 'bus.html' },
  flight: { title: 'Flight Tickets', icon: '✈️', color: 'icon-flight', page: 'flight.html' },
  train: { title: 'Train Tickets', icon: '🚂', color: 'icon-train', page: 'train.html' },
  movie: { title: 'Movie Tickets', icon: '🎬', color: 'icon-movie', page: 'movie.html' },
  hotel: { title: 'Hotel Booking', icon: '🏨', color: 'icon-hotel', page: 'hotel.html' },
  event: { title: 'Events & Shows', icon: '🎪', color: 'icon-event', page: 'event.html' },
};
