import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

export const connectDB = async (): Promise<boolean> => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/kidrove-workshop';
    console.log(`Attempting to connect to MongoDB at: ${mongoUri}`);
    
    // Set selection timeout to 3000ms so it doesn't hang if MongoDB is not running
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    
    isConnected = true;
    console.log('MongoDB Connected successfully!');
    return true;
  } catch (error: any) {
    console.warn('--------------------------------------------------');
    console.warn('WARNING: MongoDB connection failed or service not running.');
    console.warn('Backend API will fallback to storing registrations in a local JSON file:');
    console.warn('backend/enquiries.json');
    console.warn('--------------------------------------------------');
    isConnected = false;
    return false;
  }
};

export const getDBStatus = (): boolean => isConnected;
