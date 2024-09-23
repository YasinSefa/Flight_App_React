# Flight Booking Web Application

This project is a flight booking application that allows users to browse flights, filter them by date and flight direction, and book flights. The application uses the Schiphol Airport API to fetch flight information and a Node.js backend to handle bookings, storing them in a MongoDB database.

## Table of Contents

- [Project Features](#project-features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Application Screens](#application-screens)
  - [Home Page](#home-page)
  - [My Flights Page](#my-flights-page)
- [API Usage](#api-usage)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Additional Features](#additional-features)
- [Screenshots](#screenshots)

## Project Features

- **Flight Listings:** Displays flight information retrieved from the Schiphol Airport API.
- **Flight Filtering:** Users can filter flights by date and flight direction (Arrival/Departure).
- **Flight Booking:** Users can book flights, and the selected flight details are stored in a MongoDB database.
- **Flight Management:** Users can view their booked flights on a separate page.
- **Modern UI:** Clean, stylish, and minimalistic design to improve user experience.

## Technologies Used

- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** Schiphol Flight API
- **Other Libraries:** 
  - `axios` for making HTTP requests.
  - `date-fns` for handling date operations.
  - `react-icons` for icons.

## Setup and Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/)
- A valid Schiphol API key and Application ID. You can obtain one by signing up [here](https://developer.schiphol.nl).

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YasinSefa/Flight_App_React.git
   cd flight-booking-app