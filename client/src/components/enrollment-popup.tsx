import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface EnrollmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const courses = [
  "C & C++",
  "Java",
  "Python",
  ".NET",
  "UI/UX Design",
  "Frontend Development",
  "Fullstack Development",
  "Artificial Intelligence",
  "Data Science",
  "Data Analytics",
  "SAP FICO",
  "Digital Marketing",
  "Software Testing"
];

export default function EnrollmentPopup({ isOpen, onClose }: EnrollmentPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello Appex Technologies!
    
I'm interested in enrolling for a course. Here are my details:

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Course Interested: ${formData.course}

Please contact me for further information.`;

    const whatsappUrl = `https://wa.me/919361163851?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    onClose();
    setFormData({ name: '', mobile: '', email: '', course: '' });
  };

  const handleCall = () => {
    window.open('tel:+919361163851', '_self');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-2 border-[hsl(51,100%,50%)] text-white max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[hsl(51,100%,50%)]">
            Enroll Now
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white focus:border-[hsl(51,100%,50%)]"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="mobile" className="text-white">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white focus:border-[hsl(51,100%,50%)]"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white focus:border-[hsl(51,100%,50%)]"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <Label htmlFor="course" className="text-white">Course Interested</Label>
            <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-[hsl(51,100%,50%)]">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {courses.map((course) => (
                  <SelectItem key={course} value={course} className="text-white hover:bg-gray-700">
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              onClick={handleCall}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[hsl(51,100%,50%)] hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Enroll via WhatsApp
            </Button>
          </div>
        </form>

        <div className="text-center mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            Call us directly: 
            <a href="tel:+919361163851" className="text-[hsl(51,100%,50%)] hover:underline ml-1">
              +91 93611 63851
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}