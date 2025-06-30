import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  course: z.string().optional(),
  message: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notifications
      // 3. Integrate with CRM systems
      
      console.log('Contact form submission:', validatedData);
      
      // Simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        message: 'Contact form submitted successfully',
        success: true 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: 'Validation error',
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: 'Internal server error' 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
