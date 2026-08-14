# Shopping API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected routes require JWT token in Authorization header:
```
Authorization: Bearer {token}
```

## Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "OK",
  "message": "Shopping API is running",
  "timestamp": "2024-08-14T11:30:08Z"
}
```

### Welcome
```
GET /
```

Response:
```json
{
  "message": "Welcome to Shopping API",
  "version": "0.1.0",
  "endpoints": {
    "health": "/api/health",
    "products": "/api/products",
    "users": "/api/users",
    "orders": "/api/orders",
    "payment": "/api/payment"
  }
}
```

## Products

### List Products
```
GET /products
```

### Get Product
```
GET /products/:id
```

### Create Product (Admin)
```
POST /products
Authorization: Bearer {token}
```

### Update Product (Admin)
```
PUT /products/:id
Authorization: Bearer {token}
```

### Delete Product (Admin)
```
DELETE /products/:id
Authorization: Bearer {token}
```

## Users

### Register
```
POST /users/register
```

### Login
```
POST /users/login
```

### Get Profile
```
GET /users/profile
Authorization: Bearer {token}
```

### Update Profile
```
PUT /users/profile
Authorization: Bearer {token}
```

## Orders

### List Orders
```
GET /orders
Authorization: Bearer {token}
```

### Get Order
```
GET /orders/:id
Authorization: Bearer {token}
```

### Create Order
```
POST /orders
Authorization: Bearer {token}
```

### Update Order Status (Admin)
```
PUT /orders/:id
Authorization: Bearer {token}
```

## Payment

### Process Payment
```
POST /payment/process
Authorization: Bearer {token}
```

### Khalti Payment
```
POST /payment/khalti
```

### eSewa Payment
```
POST /payment/esewa
```

---

For more details, see the backend source code in `backend/src/`