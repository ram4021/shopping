# Shopping - E-Commerce Platform

A modern, full-stack e-commerce platform similar to Daraz.com.np built for Sahani Digital Cable.

## 🚀 Features

- 🛍️ Product catalog with search and filters
- 🛒 Shopping cart and checkout
- 👤 User authentication and profiles
- 💳 Payment integration (Khalti, eSewa, Stripe)
- 📦 Order management and tracking
- ⭐ Product reviews and ratings
- 📱 Responsive mobile design
- 🎯 Admin dashboard
- 📊 Inventory management
- 💌 Wishlist functionality

## 📁 Project Structure

```
shopping/
├── frontend/              # React/Next.js frontend
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── public/
│   └── package.json
├── backend/               # Node.js/Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── index.js
│   └── package.json
├── database/              # Database schemas and migrations
│   ├── mongodb/
│   └── seed/
├── docs/                  # Documentation
├── docker-compose.yml     # Docker setup
└── .env.example
```

## 🛠️ Tech Stack

- **Frontend**: React/Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment**: Khalti, eSewa, Stripe
- **Hosting**: AWS/Vercel
- **Authentication**: JWT
- **Containerization**: Docker & Docker Compose

## 📋 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB (or MongoDB Atlas)
- Docker & Docker Compose (optional)
- Git

### Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/ram4021/shopping.git
cd shopping

# Create .env file
cp .env.example .env

# Start all services
docker-compose up -d

# Frontend will be available at http://localhost:3000
# Backend will be available at http://localhost:5000
```

### Manual Installation

1. **Clone the repository**
```bash
git clone https://github.com/ram4021/shopping.git
cd shopping
```

2. **Setup Backend**
```bash
cd backend
npm install
cp ../.env.example ../.env
npm run dev
```

3. **Setup Frontend** (in new terminal)
```bash
cd frontend
npm install
npm run dev
```

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- API Health Check: http://localhost:5000/api/health

## 🔧 Configuration

### Environment Variables

Edit `.env` file with your configuration:

```env
# Database
MONGO_URI=mongodb://localhost:27017/shopping

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Payment Gateways
KHALTI_PUBLIC_KEY=your_khalti_public_key
KHALTI_SECRET_KEY=your_khalti_secret_key

ESEWA_MERCHANT_CODE=your_esewa_merchant_code
ESEWA_SECRET_KEY=your_esewa_secret_key

STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 📚 API Documentation

### Health Check
```bash
GET /api/health
```

### API Endpoints
- `GET /api` - API welcome message
- `GET /api/health` - Server health status
- `GET/POST /api/products` - Product management
- `GET/POST /api/users` - User management
- `GET/POST /api/orders` - Order management
- `POST /api/payment` - Payment processing

Detailed API documentation coming soon in `docs/API.md`

## 📦 Project Setup Steps

- [x] Initialize Git repository
- [x] Create project structure
- [x] Setup Express backend
- [x] Setup Next.js frontend
- [x] Configure Docker
- [x] Add environment variables
- [ ] Setup MongoDB connection
- [ ] Create database models
- [ ] Implement authentication (JWT)
- [ ] Build product catalog features
- [ ] Implement shopping cart
- [ ] Add payment integration
- [ ] Create admin dashboard
- [ ] Setup email notifications
- [ ] Add product reviews & ratings
- [ ] Implement order management
- [ ] Setup CI/CD pipeline
- [ ] Deploy to production

## 🚀 Deployment

### Frontend Deployment
- Deploy to **Vercel** (recommended for Next.js)
- Or deploy to **AWS S3 + CloudFront**

### Backend Deployment
- Deploy to **AWS EC2** or **AWS ECS**
- Or deploy to **Heroku** or **Railway**

### Database
- Use **MongoDB Atlas** for cloud database
- Or **AWS RDS** for PostgreSQL

## 📝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📧 Support

For support and inquiries:
- Email: support@sahanidigitalcable.com.np
- Website: https://sahanidigitalcable.com.np
- Location: Kathmandu, Nepal

## 📄 License

MIT License - feel free to use this project commercially

## 👨‍💻 Authors

- **Ram** - Initial setup and architecture
- Sahani Digital Cable Team

---

**Status**: 🚧 Under Active Development

**Last Updated**: August 2024

**Next Phase**: Database models and authentication implementation