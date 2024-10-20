# waiterapp
# WaiterAPP API

Welcome to the WaiterAPP API documentation. This API is designed to manage restaurant orders and streamline the workflow for waitstaff.

## Introduction

The WaiterAPP API provides a set of endpoints to handle various operations such as creating orders, updating order status, and retrieving order details.

## Installation

To install the WaiterAPP API, follow these steps:

1. Clone the repository:
  ```sh
  git clone https://github.com/MatheusKamer/waiterapp.git
  ```
2. Navigate to the project directory:
  ```sh
  cd WaiterAPP/api
  ```
3. Install the dependencies:
  ```sh
  npm install
  ```

## Usage

To start the API server, run:
```sh
npm start
```
The server will start on `http://localhost:3001`.

## Endpoints

### Create Order
- **URL:** `/orders`
- **Method:** `POST`
- **Description:** Create a new order.
- **Request Body:**
  ```json
  {
    "tableNumber": 1,
    "items": [
      {"id": "item1", "quantity": 2},
      {"id": "item2", "quantity": 1}
    ]
  }
  ```

### Update Order Status
- **URL:** `/orders/:orderId`
- **Method:** `PUT`
- **Description:** Update the status of an existing order.
- **Request Body:**
  ```json
  {
    "status": "completed"
  }
  ```

### Get Order Details
- **URL:** `/orders/:orderId`
- **Method:** `GET`
- **Description:** Retrieve details of a specific order.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
