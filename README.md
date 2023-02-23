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

5. Flights by ID Route:

METHOD - GET

URL - https://mysterious-undershirt-seal.cyclic.app/flights/63f710a456aa50f75acc70f0

RESPONSE - {"_id":"63f710a456aa50f75acc70f0","airline":"KingFisher","flightNo":"ABD657","departure":"Ranchi","arrival":"Delhi","departureTime":"2022-01-01T18:30:00.000Z","arrivalTime":"2022-02-01T18:30:00.000Z","seats":45,"price":4400,"__v":0}

6. Flights Route to Add flight:

METHOD - POST

URL - https://mysterious-undershirt-seal.cyclic.app/flights

BODY:
{
  "airline": "Air India",
  "flightNo": "ALN897",
  "departure": "Bangalore",
  "arrival": "Chennai",
  "departureTime": "1/2/25",
  "arrivalTime": "2/2/23",
  "seats": 46,
  "price": 3200
}

RESPONSE - Added Flight Successfully

7. Flights Route to PUT/PATCH flight:

METHOD - PUT/PATCH

URL - https://mysterious-undershirt-seal.cyclic.app/flights/63f710a456aa50f75acc70f0

BODY:
{
  "airline": "Changed Title with patch request"
}

RESPONSE - Updated Flight Successfully with id: 63f710a456aa50f75acc70f0


8. Flights Route to DELETE flight:

METHOD - DELETE

URL - https://mysterious-undershirt-seal.cyclic.app/flights/63f710a456aa50f75acc70f0

BODY:

RESPONSE - DELETED Flight Successfully with id: 63f710a456aa50f75acc70f0

9. Booking Route to book flight:

METHOD - POST

URL - https://mysterious-undershirt-seal.cyclic.app/booking

BODY:
{
  user: 63f70ca948ada1cd4de7e1c2
  flight: 63f710a456aa50f75acc70f0
}

RESPONSE - Booking Successfull

10. Booking Route to book flight:

METHOD - GET

URL - https://mysterious-undershirt-seal.cyclic.app/dashboard

BODY:
{
  user: 63f70ca948ada1cd4de7e1c2
  flight: 63f710a456aa50f75acc70f0
}

RESPONSE - {
  'User Details': { name: 'Sourav', email: 'sourav@gmail.com' },
  'Flight Details': {
    _id: new ObjectId("63f711e956aa50f75acc70f2"),
    airline: 'Air India',
    flightNo: 'ALN897',
    departure: 'Bangalore',
    arrival: 'Chennai',
    departureTime: 2025-01-01T18:30:00.000Z,
    arrivalTime: 2023-02-01T18:30:00.000Z,
    seats: 55,
    price: 3200,
    __v: 0
  }
}
{
  'User Details': { name: 'Pulkit', email: 'pulkit@gmail.com' },
  'Flight Details': {
    _id: new ObjectId("63f710a456aa50f75acc70f0"),
    airline: 'KingFisher',
    flightNo: 'ABD657',
    departure: 'Ranchi',
    arrival: 'Delhi',
    departureTime: 2022-01-01T18:30:00.000Z,
    arrivalTime: 2022-02-01T18:30:00.000Z,
    seats: 45,
    price: 4400,
    __v: 0
  }
}

