import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry! We will contact you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="bg-black border border-gray-700 rounded-xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </Label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[hsl(51,100%,50%)] focus:border-[hsl(51,100%,50%)]"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[hsl(51,100%,50%)] focus:border-[hsl(51,100%,50%)]"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number *
            </Label>
            <Input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[hsl(51,100%,50%)] focus:border-[hsl(51,100%,50%)]"
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div>
            <Label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-2">
              Interested Course
            </Label>
            <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
              <SelectTrigger className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[hsl(51,100%,50%)] focus:border-[hsl(51,100%,50%)]">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border border-gray-600">
                <SelectItem value="c-cpp">C & C++</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="dotnet">Dotnet</SelectItem>
                <SelectItem value="ui-ux">UI/UX</SelectItem>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="fullstack">Fullstack</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="data-analytics">Data Analytics</SelectItem>
                <SelectItem value="sap-fico">SAP (FICO)</SelectItem>
                <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[hsl(51,100%,50%)] focus:border-[hsl(51,100%,50%)]"
              placeholder="Your message..."
            />
          </div>

          <Button
            type="submit"
            disabled={contactMutation.isPending}
            className="w-full bg-[hsl(51,100%,50%)] hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {contactMutation.isPending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
