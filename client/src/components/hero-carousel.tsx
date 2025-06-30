import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface HeroCarouselProps {
  onEnrollClick: () => void;
}

const slides = [
  {
    title: "Build Your Future with Appex Technologies",
    subtitle: "Best Software Training Institute in Coimbatore",
    description: "Master cutting-edge technologies with industry experts and get 100% placement assistance",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  },
  {
    title: "Launch Your Tech Career Today",
    subtitle: "13+ Expert Trainers • 500+ Students Trained",
    description: "Join India's premier software training institute with proven placement success",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  },
  {
    title: "Transform Your Skills, Transform Your Life",
    subtitle: "From Beginner to Industry Professional",
    description: "Comprehensive training programs designed to meet industry demands",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  }
];

export default function HeroCarousel({ onEnrollClick }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,10%)]/70 to-[hsl(0,0%,10%)]/30 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <h2 className="text-2xl md:text-3xl text-[hsl(51,100%,50%)] font-semibold mb-4">{slide.subtitle}</h2>
              <p className="text-xl mb-8">{slide.description}</p>
              <div className="space-x-4">
                <Button 
                  onClick={() => window.open('tel:+919361163851', '_self')}
                  className="bg-[hsl(51,100%,50%)] hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </Button>
                <Button 
                  onClick={onEnrollClick}
                  variant="outline"
                  className="border-2 border-[hsl(51,100%,50%)] hover:bg-[hsl(51,100%,50%)] hover:text-black text-[hsl(51,100%,50%)] font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[hsl(51,100%,50%)]'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
