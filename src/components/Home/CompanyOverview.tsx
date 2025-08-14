import { Card, CardContent } from "@/components/ui/card";
import { Zap, Droplets, Leaf, Award } from "lucide-react";
import powerPlant from "@/assets/power-plant.jpg";
import riverLandscape from "@/assets/river-landscape.jpg";

const stats = [
  { icon: Zap, label: "MW Capacity", value: "50+", color: "text-accent" },
  { icon: Droplets, label: "Projects", value: "5", color: "text-secondary" },
  { icon: Leaf, label: "Years Experience", value: "15+", color: "text-accent-light" },
  { icon: Award, label: "Awards", value: "12", color: "text-primary-light" },
];

const CompanyOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Arun Kabeli Power Limited
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A pioneering force in Nepal's renewable energy sector, committed to sustainable hydropower development and environmental stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Leading Nepal's Energy Transformation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Since our establishment, Arun Kabeli Power Limited has been at the forefront of Nepal's hydropower development. We specialize in designing, constructing, and operating sustainable hydropower facilities that contribute to the nation's energy security while maintaining environmental harmony.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment extends beyond power generation. We actively engage with local communities, promote environmental conservation, and support sustainable development practices that benefit all stakeholders.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className="overflow-hidden group">
                <div className="relative">
                  <img 
                    src={powerPlant} 
                    alt="Modern Hydropower Plant" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <h4 className="font-semibold">Modern Infrastructure</h4>
                    <p className="text-sm opacity-90">State-of-the-art facilities</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
                <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                <p className="text-muted-foreground text-sm">
                  To provide clean, reliable, and sustainable energy solutions while fostering environmental stewardship and community development.
                </p>
              </Card>
            </div>

            <div className="space-y-6 md:mt-12">
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Our Vision</h4>
                <p className="text-muted-foreground text-sm">
                  To be Nepal's leading renewable energy company, driving sustainable development and energy independence.
                </p>
              </Card>
              
              <Card className="overflow-hidden group">
                <div className="relative">
                  <img 
                    src={riverLandscape} 
                    alt="Pristine River Landscape" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <h4 className="font-semibold">Environmental Harmony</h4>
                    <p className="text-sm opacity-90">Preserving natural beauty</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;