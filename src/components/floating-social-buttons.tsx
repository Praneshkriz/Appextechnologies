import { Button } from "@/components/ui/button";

export default function FloatingSocialButtons() {
  const handleCall = () => {
    window.open('tel:+919361163851', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919361163851', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:appextechnologies28@gmail.com', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/appextechnologies/', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/appextechnologies/?next=%2F', '_blank');
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
      <Button
        onClick={handleCall}
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        title="Call Now"
      >
        <i className="fas fa-phone text-lg"></i>
      </Button>
      
      <Button
        onClick={handleWhatsApp}
        className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        title="WhatsApp"
      >
        <i className="fab fa-whatsapp text-lg"></i>
      </Button>
      
      <Button
        onClick={handleEmail}
        className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        title="Email"
      >
        <i className="fas fa-envelope text-lg"></i>
      </Button>
      
      <Button
        onClick={handleFacebook}
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        title="Facebook"
      >
        <i className="fab fa-facebook-f text-lg"></i>
      </Button>
      
      <Button
        onClick={handleInstagram}
        className="w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        title="Instagram"
      >
        <i className="fab fa-instagram text-lg"></i>
      </Button>
    </div>
  );
}