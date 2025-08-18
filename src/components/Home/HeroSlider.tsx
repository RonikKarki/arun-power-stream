import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDam from "@/assets/hero-dam.jpg";
import powerPlant from "@/assets/power-plant.jpg";
import riverLandscape from "@/assets/river-landscape.jpg";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/27b741df-c255-4090-a87c-36e0ab0a8bad.png",
    title: "Arun Kabeli Hydropower Project",
    subtitle: "Advanced dam infrastructure with modern powerhouse facilities for sustainable energy generation",
    cta: "Learn More About Our Projects"
  },
  {
    id: 2,
    image: "/lovable-uploads/087c3bb9-c5e1-40f3-85a2-0ce076a3f3fa.png",
    title: "Water Management Excellence",
    subtitle: "State-of-the-art spillway systems ensuring optimal water flow control and flood management",
    cta: "Explore Our Technology"
  },
  {
    id: 3,
    image: "/lovable-uploads/8a59dc46-886f-4e0a-b4e8-9eabac76f622.png",
    title: "Sustainable Development",
    subtitle: "Robust concrete infrastructure designed for environmental harmony and long-term sustainability",
    cta: "View Our Environmental Impact"
  },
  {
    id: 4,
    image: "/lovable-uploads/d97e2b3f-2b03-412e-a574-41d41fa66f85.png",
    title: "Construction Excellence",
    subtitle: "Modern construction practices with community engagement and local development focus",
    cta: "See Our Progress"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 to-primary/30" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary-light transition-all duration-300 transform hover:scale-105"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/20 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/20 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary scale-110"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-accent animate-pulse' : 'bg-primary-foreground/50'}`} />
          <span className="ml-2 text-xs">{isAutoPlaying ? 'Auto' : 'Manual'}</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroSlider;