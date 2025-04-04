# REST Express App

A simple REST API built with Express.js for managing resources with basic CRUD operations.

## Overview

This project demonstrates how to build a RESTful API using Express.js. It includes endpoints for creating, reading, updating, and deleting resources.

## Features

- RESTful endpoints for CRUD operations
- Express.js framework for handling HTTP requests
- JSON data format for request and response bodies
- Middleware for request validation and error handling

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Juan-Ceballos/REST-Express-App.git
   ```

2. Navigate to the project directory:
   ```
   cd REST-Express-App
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/resources | Get all resources |
| GET    | /api/resources/:id | Get a specific resource by ID |
| POST   | /api/resources | Create a new resource |
| PUT    | /api/resources/:id | Update an existing resource |
| DELETE | /api/resources/:id | Delete a resource |

## Request & Response Examples

### GET /api/resources

Response:
```json
[
  {
    "id": 1,
    "name": "Resource 1",
    "description": "Description of resource 1"
  },
  {
    "id": 2,
    "name": "Resource 2",
    "description": "Description of resource 2"
  }
]
```

### POST /api/resources

Request:
```json
{
  "name": "New Resource",
  "description": "Description of new resource"
}
```

Response:
```json
{
  "id": 3,
  "name": "New Resource",
  "description": "Description of new resource"
}
```

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Juan Ceballos
