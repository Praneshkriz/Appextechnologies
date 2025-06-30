import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Shreeja",
    course: "Software Testing Graduate",
    testimonial: "I joined software testing (manual + automation) course at Appex Technologies. The training was excellent with hands-on practical sessions. Thanks Appex for making my future bright in the IT industry."
  },
  {
    name: "Harish",
    course: ".NET & MVC Graduate",
    testimonial: "One of the best institutes where you get quality education and practical training. The .NET and MVC course was comprehensive and the instructors were very knowledgeable."
  },
  {
    name: "Shanma",
    course: "Digital Marketing & Web Dev Graduate",
    testimonial: "Really grateful to Appex Technologies for making me a successful digital marketer with web development skills. The combination of both courses gave me a competitive edge in the market."
  }
];

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <Card className="bg-gray-900 border border-gray-700 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-[hsl(51,100%,50%)]"></i>
                </div>
                <p className="text-xl text-gray-300 mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-[hsl(51,100%,50%)] rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-black text-xl"></i>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.course}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Testimonial Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial
                ? 'bg-[hsl(51,100%,50%)]'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
