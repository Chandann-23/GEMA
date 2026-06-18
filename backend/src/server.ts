import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { createEnquiry, getEnquiries } from './controllers/enquiryController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow frontend requests
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.post('/api/enquiry', createEnquiry);
app.get('/api/enquiry', getEnquiries);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', time: new Date() });
});

// Start server and connect to database
const startServer = async () => {
  // Connect to DB (will fallback gracefully to JSON file if MongoDB is offline)
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📍 Health Check: http://localhost:${PORT}/health`);
    console.log(`📍 POST Enquiry: http://localhost:${PORT}/api/enquiry`);
    console.log(`===================================================`);
  });
};

startServer().catch(err => {
  console.error('Failed to start backend server:', err);
});
