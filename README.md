# LinkTrim - URL Shortener

A modern, full-stack URL shortener application built with React and Node.js. LinkTrim allows you to convert long URLs into short, shareable links with a clean and intuitive interface.

## 🚀 Live Demo

- **Frontend**: [https://link-trim-iota.vercel.app](https://link-trim-iota.vercel.app)
- **Backend API**: [https://link-trim-backend.vercel.app](https://link-trim-backend.vercel.app)

## ✨ Features

- **URL Shortening**: Convert long URLs into short, memorable links
- **Instant Redirect**: Shortened URLs redirect users to original destinations
- **Copy to Clipboard**: One-click copy functionality for generated short URLs
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean, dark-themed interface built with Tailwind CSS
- **Fast Performance**: Built with Vite for optimal frontend performance
- **MongoDB Storage**: Reliable data persistence with MongoDB
- **API-First Design**: RESTful API architecture

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nanoid** - URL-safe unique ID generator
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Deployment
- **Vercel** - Hosting platform for both frontend and backend

## 📁 Project Structure

```
LinkTrim/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   └── ShortenerCard.jsx   # Main URL shortener component
│   │   ├── App.jsx          # Main App component
│   │   ├── main.jsx         # Application entry point
│   │   ├── App.css          # App-specific styles
│   │   └── index.css        # Global styles
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── backend/                 # Node.js backend API
│   ├── controllers/
│   │   └── urlController.js # URL shortening logic
│   ├── models/
│   │   └── Url.js          # MongoDB URL schema
│   ├── routes/
│   │   └── urlRoutes.js    # API route definitions
│   ├── index.js            # Server entry point
│   ├── package.json        # Backend dependencies
│   └── vercel.json         # Vercel deployment config
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB database (local or cloud)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd LinkTrim/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:3000
   PORT=3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to see the application

## 📡 API Endpoints

### Base URL: `https://link-trim-backend.vercel.app`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| POST | `/shorten` | Create a shortened URL |
| GET | `/:shortId` | Redirect to original URL |

### API Usage Examples

**Shorten a URL:**
```bash
curl -X POST https://link-trim-backend.vercel.app/shorten \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "https://example.com/very-long-url"}'
```

**Response:**
```json
{
  "shortUrl": "https://link-trim-backend.vercel.app/abc123"
}
```

## 🎯 How It Works

1. **User Input**: Enter a long URL in the frontend interface
2. **API Request**: Frontend sends POST request to `/shorten` endpoint
3. **ID Generation**: Backend generates a unique 6-character ID using nanoid
4. **Database Storage**: URL mapping is stored in MongoDB
5. **Response**: Shortened URL is returned and displayed
6. **Redirection**: When accessing the short URL, backend redirects to original URL

## 🎨 UI Features

- **Dark Theme**: Modern dark gray background with clean white card design
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Feedback**: Visual feedback for copy operations
- **Form Validation**: Client-side URL validation
- **Error Handling**: User-friendly error messages

## 🔧 Development

### Available Scripts

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not implemented)

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

**Backend (.env):**
- `MONGO_URI` - MongoDB connection string
- `BASE_URL` - Base URL for shortened links
- `PORT` - Server port (default: 3000)

## 📦 Deployment

The application is configured for deployment on Vercel:

1. **Backend**: Uses `vercel.json` for serverless function deployment
2. **Frontend**: Automatic deployment with Vite build configuration
3. **CORS**: Configured to allow frontend domain access

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Dulal Shikdar**

## 🛣️ Future Enhancements

- [ ] User authentication and personal URL management
- [ ] Click analytics and statistics
- [ ] Custom short URL aliases
- [ ] QR code generation
- [ ] Bulk URL shortening
- [ ] API rate limiting
- [ ] URL expiration dates
- [ ] Admin dashboard

## ⚠️ Important Notes

- The current CORS configuration only allows the production frontend domain
- For local development, update the CORS configuration in `backend/index.js`
- Short IDs are generated using nanoid with 6 characters for optimal uniqueness
- MongoDB connection requires proper authentication and network access

## 🔗 Links

- [Live Application](https://link-trim-iota.vercel.app)
- [API Documentation](https://link-trim-backend.vercel.app)
- [React Documentation](https://react.dev)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
