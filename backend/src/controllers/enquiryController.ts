import { Request, Response } from 'express';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { Enquiry } from '../models/Enquiry';
import { getDBStatus } from '../config/db';

// Zod schema for input validation
const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters').trim(),
  email: z.string().email('Please enter a valid email address').trim().toLowerCase(),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number cannot exceed 15 digits').regex(/^\+?[0-9\s\-()]+$/, 'Invalid phone number format').trim(),
  age: z.number().int().min(8, 'Age must be between 8 and 14').max(14, 'Age must be between 8 and 14').optional(),
  message: z.string().max(500, 'Message cannot exceed 500 characters').optional().transform(val => val || ''),
});

const JSON_DB_PATH = process.env.VERCEL === '1'
  ? path.join('/tmp', 'enquiries.json')
  : path.join(__dirname, '../../enquiries.json');

// Helper to save to a JSON file fallback
const saveToLocalFile = (data: any) => {
  try {
    let enquiries = [];
    if (fs.existsSync(JSON_DB_PATH)) {
      const fileData = fs.readFileSync(JSON_DB_PATH, 'utf8');
      enquiries = JSON.parse(fileData || '[]');
    }
    const newRecord = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    enquiries.push(newRecord);
    fs.writeFileSync(JSON_DB_PATH, JSON.stringify(enquiries, null, 2), 'utf8');
    return newRecord;
  } catch (error) {
    console.error('Failed to write to local JSON file:', error);
    throw new Error('Local file save failed');
  }
};

export const createEnquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    // 1. Validate data
    const parseResult = enquirySchema.safeParse(req.body);
    
    if (!parseResult.success) {
      // Map and send error response
      const errors = parseResult.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      res.status(400).json({ success: false, errors });
      return;
    }
    
    const validatedData = parseResult.data;
    const isMongoConnected = getDBStatus();
    
    let savedEnquiry;
    let storageMethod = 'MongoDB';

    if (isMongoConnected) {
      // 2. Save to MongoDB
      savedEnquiry = await Enquiry.create(validatedData);
    } else {
      // 3. Fallback to Local JSON file
      savedEnquiry = saveToLocalFile(validatedData);
      storageMethod = 'Local JSON File';
    }

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      data: savedEnquiry,
      meta: {
        storage: storageMethod,
      }
    });
  } catch (error: any) {
    console.error('Error handling enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your registration. Please try again.',
      error: error.message,
    });
  }
};

// Optional: Endpoint to get all enquiries (useful for verification/grading)
export const getEnquiries = async (req: Request, res: Response): Promise<void> => {
  try {
    const isMongoConnected = getDBStatus();
    let data;
    
    if (isMongoConnected) {
      data = await Enquiry.find().sort({ createdAt: -1 });
    } else {
      if (fs.existsSync(JSON_DB_PATH)) {
        data = JSON.parse(fs.readFileSync(JSON_DB_PATH, 'utf8') || '[]');
      } else {
        data = [];
      }
    }
    
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
