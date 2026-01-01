# VillageConnect

VillageConnect is a full-stack e-commerce platform that enables online selling of products while connecting villages with nearby rural and urban markets to support local sellers and improve rural accessibility.

---

## 🚀 Features

- **User Authentication** - Secure registration and login for customers and admin
- **Product Management** - Full CRUD operations for products (Admin)
- **Shopping Cart** - Add, update, and remove items from cart
- **Order Management** - Place orders, track status, and view order history
- **Address Management** - Save and manage multiple shipping addresses
- **Product Reviews** - Rate and review purchased products
- **Payment Integration** - PayPal payment gateway integration
- **Image Upload** - Cloudinary integration for product images
- **Search & Filter** - Advanced product search and filtering options
- **Admin Dashboard** - Manage products, orders, and view analytics
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS

---

## 📁 Project Structure

```
VillageConnect/
│
├── client/                    # Frontend Application (React + Vite)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── admin-view/  # Admin-specific components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── shopping-view/ # Customer-facing components
│   │   │   └── ui/          # Shadcn UI components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Redux store and slices
│   │   ├── config/          # Configuration files
│   │   └── lib/             # Utility functions
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
│
├── server/                   # Backend Application (Node.js + Express)
│   ├── controllers/         # Request handlers
│   │   ├── admin/          # Admin controllers
│   │   ├── auth/           # Authentication controllers
│   │   └── shop/           # Shopping controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── helpers/            # Helper functions (Cloudinary, PayPal)
│   └── server.js           # Express server entry point
│
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Component library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Cloudinary** - Image storage
- **PayPal SDK** - Payment processing
- **bcrypt** - Password hashing
- **JWT** - Authentication tokens

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- PayPal developer account

### Clone Repository
```bash
git clone https://github.com/NileshCss/VillageConnect.git
cd VillageConnect
```

### Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox
```

Start the backend server:
```bash
npm start
```

### Frontend Setup
```bash
cd client
npm install
```

Create a `.env` file in the `client` folder:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check-auth` - Verify authentication

### Products (Admin)
- `POST /api/admin/products/add` - Add new product
- `PUT /api/admin/products/edit/:id` - Update product
- `DELETE /api/admin/products/delete/:id` - Delete product
- `GET /api/admin/products/get` - Get all products

### Products (Shop)
- `GET /api/shop/products/get` - Get filtered products
- `GET /api/shop/products/get/:id` - Get product details

### Cart
- `POST /api/shop/cart/add` - Add item to cart
- `GET /api/shop/cart/get/:userId` - Get user cart
- `PUT /api/shop/cart/update-cart` - Update cart item
- `DELETE /api/shop/cart/:userId/:productId` - Remove cart item

### Orders
- `POST /api/shop/order/create` - Create new order
- `GET /api/shop/order/list/:userId` - Get user orders
- `GET /api/shop/order/details/:id` - Get order details
- `POST /api/shop/order/capture` - Capture PayPal payment

### Reviews
- `POST /api/shop/review/add` - Add product review
- `GET /api/shop/review/:productId` - Get product reviews

### Address
- `POST /api/shop/address/add` - Add new address
- `GET /api/shop/address/get/:userId` - Get user addresses
- `PUT /api/shop/address/update/:userId/:addressId` - Update address
- `DELETE /api/shop/address/delete/:userId/:addressId` - Delete address

---

## 👤 Default Admin Credentials

After seeding the database, you can use:
- **Email**: admin@example.com
- **Password**: admin123

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Nilesh** - [GitHub](https://github.com/NileshCss)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
