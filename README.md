# Mock-10-Backend

An flight website for booking tickets with authentication of users.

Live:https://mysterious-undershirt-seal.cyclic.app/

## Routes And Usage

1. Home Route:

METHOD - GET

URL - https://mysterious-undershirt-seal.cyclic.app/

RESPONSE - Welcome To Air Ticket Booking App


2. Register Route:

METHOD - POST

URL - https://mysterious-undershirt-seal.cyclic.app/register

BODY:
{
  "name":"Ritik",
  "email":"ritik@gmail.com",
  "password":"ritik@123"
}


RESPONSE - Register Successfull

3. Login Route:

METHOD - POST

URL - https://mysterious-undershirt-seal.cyclic.app/login

BODY:
{
  "email":"ritik@gmail.com",
  "password":"ritik@123"
}

RESPONSE - Login Successfull

4. Flights Route:

METHOD - GET

URL - https://mysterious-undershirt-seal.cyclic.app/flights

RESPONSE - [{"_id":"63f710a456aa50f75acc70f0","airline":"KingFisher","flightNo":"ABD657","departure":"Ranchi","arrival":"Delhi","departureTime":"2022-01-01T18:30:00.000Z","arrivalTime":"2022-02-01T18:30:00.000Z","seats":45,"price":4400,"__v":0},{"_id":"63f711e956aa50f75acc70f2","airline":"Air India","flightNo":"ALN897","departure":"Bangalore","arrival":"Chennai","departureTime":"2025-01-01T18:30:00.000Z","arrivalTime":"2023-02-01T18:30:00.000Z","seats":55,"price":3200,"__v":0},{"_id":"63f715e40f7a6b6c0ad181d1","airline":"Demo FLight","flightNo":"ALN897","departure":"Demo","arrival":"Demp","departureTime":"2025-01-01T18:30:00.000Z","arrivalTime":"2023-02-01T18:30:00.000Z","seats":90,"price":3200,"__v":0}]

4. Flights by ID Route:

METHOD - GET

URL - https://mysterious-undershirt-seal.cyclic.app/flights/63f710a456aa50f75acc70f0

RESPONSE - {"_id":"63f710a456aa50f75acc70f0","airline":"KingFisher","flightNo":"ABD657","departure":"Ranchi","arrival":"Delhi","departureTime":"2022-01-01T18:30:00.000Z","arrivalTime":"2022-02-01T18:30:00.000Z","seats":45,"price":4400,"__v":0}

