import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroCarousel from "@/components/hero-carousel";
import CourseCard from "@/components/course-card";
import TestimonialCarousel from "@/components/testimonial-carousel";
import ContactForm from "@/components/contact-form";
import FloatingSocialButtons from "@/components/floating-social-buttons";
import EnrollmentPopup from "@/components/enrollment-popup";
import AnimatedCounter from "@/components/animated-counter";
import FloatingParticles from "@/components/floating-particles";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  {
    icon: "fas fa-code",
    title: "C & C++",
    description: "Foundation programming languages",
    features: ["Programming Fundamentals", "Data Structures", "Algorithm Design"]
  },
  {
    icon: "fab fa-java",
    title: "Java",
    description: "Enterprise Java development",
    features: ["Core Java", "Spring Framework", "Hibernate ORM"]
  },
  {
    icon: "fab fa-python",
    title: "Python",
    description: "Python programming with Django",
    features: ["Python Fundamentals", "Django Framework", "Web Development"]
  },
  {
    icon: "fab fa-microsoft",
    title: "Dotnet",
    description: "C#, ASP.NET, MVC, Web API",
    features: ["C# Programming", "ASP.NET MVC", "Web API Development"]
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX",
    description: "User Interface & Experience Design",
    features: ["Design Principles", "Prototyping", "User Research"]
  },
  {
    icon: "fab fa-html5",
    title: "Frontend Developer",
    description: "HTML, CSS, JavaScript, React, Angular",
    features: ["Modern JavaScript", "React/Angular", "Responsive Design"]
  },
  {
    icon: "fas fa-layer-group",
    title: "Fullstack",
    description: "Complete web development stack",
    features: ["Frontend & Backend", "Database Design", "API Development"]
  },
  {
    icon: "fas fa-brain",
    title: "AI",
    description: "Artificial Intelligence",
    features: ["Machine Learning", "Deep Learning", "AI Applications"]
  },
  {
    icon: "fas fa-chart-line",
    title: "Data Science",
    description: "Data analysis and visualization",
    features: ["Python/R", "Statistical Analysis", "Data Visualization"]
  },
  {
    icon: "fas fa-database",
    title: "Data Analytics",
    description: "Business intelligence and analytics",
    features: ["Data Mining", "Business Intelligence", "Reporting Tools"]
  },
  {
    icon: "fas fa-building",
    title: "SAP (FICO)",
    description: "SAP Financial Accounting",
    features: ["Financial Accounting", "Controlling", "SAP Navigation"]
  },
  {
    icon: "fas fa-bullhorn",
    title: "Digital Marketing",
    description: "SEO, SEM, SMM, Content Marketing",
    features: ["Search Engine Optimization", "Social Media Marketing", "Content Strategy"]
  },
  {
    icon: "fas fa-bug",
    title: "Testing",
    description: "Manual and Automation Testing",
    features: ["Selenium", "Test Automation", "Quality Assurance"]
  }
];

const services = [
  {
    icon: "fas fa-laptop",
    title: "Online Courses",
    description: "Anytime & Anywhere - Learn at your own pace with our flexible online training programs"
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Classroom Training",
    description: "\"A student of life considers the world the classroom\" - Interactive face-to-face learning"
  },
  {
    icon: "fas fa-clock",
    title: "Real-Time Training",
    description: "100% student satisfaction with hands-on practical sessions using real-world projects"
  },
  {
    icon: "fas fa-user-tie",
    title: "Experienced Staff",
    description: "Learn from trainers currently working in the IT sector with real industry experience"
  },
  {
    icon: "fas fa-handshake",
    title: "Free Placement Assistance",
    description: "Get connected with top IT companies through our extensive placement support network"
  },
  {
    icon: "fas fa-comments",
    title: "Interview Preparation",
    description: "Comprehensive interview preparation including mock interviews and technical assessments"
  }
];

const currentBatches = [
  { course: "Python with Django", schedule: "Weekdays 6:30 PM" },
  { course: "Core Java", schedule: "Weekends 10:00 AM" },
  { course: ".NET & MVC", schedule: "Weekdays 7:00 PM" },
  { course: "Software Testing", schedule: "Weekends 2:00 PM" }
];

const internshipFeatures = [
  {
    icon: "fas fa-briefcase",
    title: "Internship Opportunities",
    description: "Get hands-on experience with real company projects"
  },
  {
    icon: "fas fa-project-diagram",
    title: "Live Projects",
    description: "Work on actual client projects during your training"
  },
  {
    icon: "fas fa-certificate",
    title: "Industry Certification",
    description: "Receive recognized certifications upon completion"
  }
];

export default function Home() {
  const [isEnrollmentPopupOpen, setIsEnrollmentPopupOpen] = useState(false);

  // Show enrollment popup on page load after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnrollmentPopupOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnrollNow = () => {
    setIsEnrollmentPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-black relative">
      <FloatingParticles />
      <div className="relative z-10">
        <Navbar />
        <FloatingSocialButtons />
        <EnrollmentPopup 
          isOpen={isEnrollmentPopupOpen} 
          onClose={() => setIsEnrollmentPopupOpen(false)} 
        />
        
        {/* Hero Section */}
      <section id="home">
        <HeroCarousel onEnrollClick={handleEnrollNow} />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300 group">
              <div className="mb-2 group-hover:animate-pulse">
                <AnimatedCounter end={500} suffix="+" duration={2500} />
              </div>
              <div className="text-white text-lg group-hover:text-[hsl(51,100%,50%)] transition-colors duration-300">
                Students Trained
              </div>
              <div className="mt-2 text-gray-400 text-sm">
                <i className="fas fa-graduation-cap mr-2"></i>
                Successful Graduates
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300 group">
              <div className="mb-2 group-hover:animate-pulse">
                <AnimatedCounter end={100} suffix="%" duration={2000} />
              </div>
              <div className="text-white text-lg group-hover:text-[hsl(51,100%,50%)] transition-colors duration-300">
                Placement Assistance
              </div>
              <div className="mt-2 text-gray-400 text-sm">
                <i className="fas fa-briefcase mr-2"></i>
                Career Support
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300 group">
              <div className="mb-2 group-hover:animate-pulse">
                <AnimatedCounter end={13} suffix="+" duration={1800} />
              </div>
              <div className="text-white text-lg group-hover:text-[hsl(51,100%,50%)] transition-colors duration-300">
                Expert Trainers
              </div>
              <div className="mt-2 text-gray-400 text-sm">
                <i className="fas fa-users mr-2"></i>
                Industry Professionals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Tiles */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[hsl(51,100%,50%)] to-yellow-400 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <i className="fas fa-bullhorn text-4xl text-black mb-4"></i>
                <h3 className="text-2xl font-bold text-black mb-2">Digital Marketing</h3>
                <p className="text-gray-800">SEO, SEM, SMM, Content Marketing</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[hsl(51,100%,50%)] to-yellow-400 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <i className="fas fa-code text-4xl text-black mb-4"></i>
                <h3 className="text-2xl font-bold text-black mb-2">Web Development</h3>
                <p className="text-gray-800">Full-Stack, Frontend, Backend</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[hsl(51,100%,50%)] to-yellow-400 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <i className="fas fa-graduation-cap text-4xl text-black mb-4"></i>
                <h3 className="text-2xl font-bold text-black mb-2">Training Institute</h3>
                <p className="text-gray-800">Professional IT Training</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-[hsl(51,100%,50%)]">Appex Technologies</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Appex Technologies is the best software training company in Coimbatore, started by an experienced expert to act as a bridge between students and the IT companies. Technically trained by Appex Technologies to meet bright ideas, active brains, aimed skills, and corporate needs.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                The fear of students may back them off and they don't get the right platform to show their technical knowledge to place in the company. Appex Technologies offers a unique path to your career in software development and digital marketing.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-[hsl(51,100%,50%)]"></i>
                  <span className="text-gray-300">Industry Expert Trainers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-[hsl(51,100%,50%)]"></i>
                  <span className="text-gray-300">100% Placement Assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-[hsl(51,100%,50%)]"></i>
                  <span className="text-gray-300">Hands-on Training</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office workspace" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Students learning programming" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section id="courses" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Course Offerings</h2>
            <p className="text-xl text-gray-300">Choose from our comprehensive range of industry-relevant courses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} onEnrollClick={handleEnrollNow} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-[hsl(51,100%,50%)] hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={handleEnrollNow}
            >
              <i className="fas fa-phone mr-2"></i>
              Enroll Now - Call +91 93611 63851
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(20,14.3%,4.1%)] mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">We provide comprehensive training solutions for your career growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8 text-center">
                  <i className={`${service.icon} text-4xl text-[hsl(51,100%,50%)] mb-4`}></i>
                  <h3 className="text-xl font-bold text-[hsl(20,14.3%,4.1%)] mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-300">Success stories from our alumni</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Current Batches Section */}
      <section className="py-16 bg-[hsl(51,100%,50%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Current Batches & Opportunities</h2>
            <p className="text-xl text-gray-800">Join our ongoing programs and internship opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black border border-gray-700 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ongoing Batches</h3>
                <div className="space-y-3">
                  {currentBatches.map((batch, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                      <span className="font-medium text-white">{batch.course}</span>
                      <span className="text-sm text-gray-300">{batch.schedule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-700 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Internship & Live Projects</h3>
                <div className="space-y-4">
                  {internshipFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <i className={`${feature.icon} text-[hsl(51,100%,50%)] mt-1`}></i>
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to start your career in IT? Contact us today!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[hsl(51,100%,50%)] p-3 rounded-lg">
                  <i className="fas fa-phone text-black"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
                  <a href="tel:+919361163851" className="text-[hsl(51,100%,50%)] hover:text-yellow-300 transition-colors duration-300 block">
                    +91 93611 63851
                  </a>
                  <a href="tel:04224978026" className="text-gray-300 hover:text-white transition-colors duration-300">
                    0422 497 8026
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[hsl(51,100%,50%)] p-3 rounded-lg">
                  <i className="fas fa-envelope text-black"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a 
                    href="mailto:appextechnologies28@gmail.com" 
                    className="text-[hsl(51,100%,50%)] hover:text-yellow-300 transition-colors duration-300"
                  >
                    appextechnologies28@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[hsl(51,100%,50%)] p-3 rounded-lg">
                  <i className="fas fa-map-marker-alt text-black"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-300">No 15-18, R R Layout, New Siddhapudur,<br />Gandhipuram, Coimbatore - 44</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[hsl(51,100%,50%)] p-3 rounded-lg">
                  <i className="fas fa-globe text-black"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://www.facebook.com/appextechnologies/" 
                      className="text-[hsl(51,100%,50%)] hover:text-yellow-300 transition-colors duration-300 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook mr-2"></i>Facebook
                    </a>
                    <a 
                      href="https://www.instagram.com/appextechnologies/?next=%2F" 
                      className="text-[hsl(51,100%,50%)] hover:text-yellow-300 transition-colors duration-300 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram mr-2"></i>Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2684925991895!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzA2LjQiTiA3NsKwNTInMzMuNyJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Appex Technologies Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(0,0%,20%)] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[hsl(51,100%,50%)]">Appex</span> Technologies
            </div>
            <p className="text-gray-300 mb-4">Best Software Training Institute in Coimbatore</p>
            <p className="text-gray-400 text-sm">&copy; 2024 Appex Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
