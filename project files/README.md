# FlightFinder - Flight Booking Application (MERN Stack)

A comprehensive flight booking web application built with MongoDB, Express.js, React.js, and Node.js.

## 🎥 Demo Video

[Watch Demo Video](https://drive.google.com/file/d/1h9WmWnXxj29E7_kBTAXE-R5dgMVFI0yg/view?usp=sharing)

## 📋 Features

### Customer Features
- Search flights by departure city, destination, and travel dates
- Past dates automatically disabled for booking
- Choose from Economy, Premium Economy, Business, or First Class
- Book tickets for multiple passengers
- Real-time dynamic pricing
- View and cancel bookings

### Flight Operator Features
- Register and manage flights (requires admin approval)
- Add new flights with complete details
- Edit flight information
- View all bookings for their flights

### Admin Features
- Approve/reject flight operator registrations
- View and manage all users
- Monitor all flights and bookings
- Complete platform control

## 🛠️ Technology Stack

**Frontend:**
- React.js
- React Router
- Axios
- Bootstrap 5
- Context API

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (v4.4+)
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd "FlightFinder Navigating Your Air Travel Options"
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

4. **Start MongoDB**
```bash
net start MongoDB
```

5. **Start the server** (Port 6001)
```bash
cd server
npm start
```

6. **Start the client** (Port 3000)
```bash
cd client
npm start
```

## 🔐 User Roles

| Role | Approval | Access |
|------|----------|--------|
| Customer | Instant | Book flights, manage own bookings |
| Flight Operator | Admin approval required | Add/edit flights, view flight bookings |
| Administrator | Manual | Full system access |

## 🚀 API Endpoints

### Authentication
- `POST /register` - Register new user
- `POST /login` - User login

### User Management
- `GET /fetch-user/:id` - Get user by ID
- `GET /fetch-users` - Get all users
- `POST /approve-operator` - Approve flight operator
- `POST /reject-operator` - Reject flight operator

### Flight Management
- `POST /add-Flight` - Add new flight
- `PUT /update-flight` - Update flight
- `GET /fetch-flights` - Get all flights
- `GET /fetch-flight/:id` - Get flight by ID

### Booking Management
- `POST /book-ticket` - Book ticket
- `GET /fetch-bookings` - Get all bookings
- `PUT /cancel-ticket/:id` - Cancel booking

## 📊 Database Schema

### User
```javascript
{
  username: String,
  email: String (unique),
  usertype: String,
  password: String (hashed),
  approval: String
}
```

### Flight
```javascript
{
  flightName: String,
  flightId: String,
  origin: String,
  destination: String,
  departureTime: String,
  arrivalTime: String,
  basePrice: Number,
  totalSeats: Number
}
```

### Booking
```javascript
{
  user: ObjectId,
  flight: ObjectId,
  passengers: [{ name, age }],
  totalPrice: Number,
  journeyDate: Date,
  seatClass: String,
  bookingStatus: String
}
```

## 🔒 Security Features

- Password encryption with bcrypt
- Protected routes with authentication
- CORS configuration
- Input validation
- Role-based access control

## 🐛 Troubleshooting

**Registration Failed:**
- Ensure MongoDB is running
- Check server is running on port 6001
- Verify all fields are filled

**Connection Error:**
- Start MongoDB service
- Check port availability
- Verify connection string

## 📄 Documentation

For detailed documentation, see [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md) or open [PROJECT_DOCUMENTATION.html](PROJECT_DOCUMENTATION.html) in your browser.

## 📝 License

© 2026 SB FlightConnect - All rights reserved

## 👨‍💻 Author

Developed as a MERN Stack project demonstration.
