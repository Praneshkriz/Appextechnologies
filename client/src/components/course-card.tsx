import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CourseCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  onEnrollClick: () => void;
}

export default function CourseCard({ icon, title, description, features, onEnrollClick }: CourseCardProps) {
  return (
    <Card className="bg-black border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:border-[hsl(51,100%,50%)] transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <i className={`${icon} text-4xl text-[hsl(51,100%,50%)] mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <i className="fas fa-check text-[hsl(51,100%,50%)] text-sm"></i>
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={onEnrollClick}
            className="flex-1 bg-[hsl(51,100%,50%)] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105"
          >
            <i className="fas fa-phone mr-2"></i>
            Enroll Now
          </Button>
          <Button 
            variant="outline"
            className="flex-1 border-[hsl(51,100%,50%)] text-[hsl(51,100%,50%)] hover:bg-[hsl(51,100%,50%)] hover:text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
