import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Calendar, CheckCircle, Clock, Users } from "lucide-react";
import heroDam from "@/assets/hero-dam.jpg";
import powerPlant from "@/assets/power-plant.jpg";
import riverLandscape from "@/assets/river-landscape.jpg";

// Company project data
const projects = [
  {
    id: 1,
    name: "KabeliB-1 Hydropower Project",
    location: "Panchthar and Taplejung District",
    capacity: "25.0 MW",
    status: "Operational",
    completionDate: "2017-04-23",
    image: "/lovable-uploads/27b741df-c255-4090-a87c-36e0ab0a8bad.png",
    description: "Our flagship hydropower project on Kabeli River, featuring run-of-river technology and sustainable energy generation.",
    features: [
      "Run-of-river hydropower technology",
      "Environmental friendly design with minimal impact", 
      "Power Purchase Agreement with Nepal Electricity Authority",
      "24/7 automated monitoring and control systems",
      "Community participation in equity capital"
    ]
  },
  {
    id: 2,
    name: "Kabeli-A Hydropower Project",
    location: "Kabeli River Basin",
    capacity: "37.6 MW",
    status: "Under Construction", 
    completionDate: "2025-12-30",
    image: "/lovable-uploads/d97e2b3f-2b03-412e-a574-41d41fa66f85.png",
    description: "Larger capacity project under construction through SPV Company Kabeli Energy Limited, expanding our renewable energy portfolio.",
    features: [
      "Developed through SPV Company Kabeli Energy Limited",
      "Advanced turbine and generation technology",
      "Enhanced environmental protection measures",
      "Modern transmission and evacuation systems",
      "Expanded community development programs"
    ]
  }
];

const statusColors = {
  "Operational": "bg-accent/10 text-accent border-accent/20",
  "Under Construction": "bg-secondary/10 text-secondary border-secondary/20",
  "Planning": "bg-primary/10 text-primary border-primary/20"
};

const statusIcons = {
  "Operational": CheckCircle,
  "Under Construction": Clock,
  "Planning": Calendar
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(16,23,42,0.65),rgba(16,23,42,0.65)), url('/lovable-uploads/27b741df-c255-4090-a87c-36e0ab0a8bad.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Our Projects
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Discover our portfolio of hydropower projects that are transforming Nepal's energy landscape while preserving environmental integrity.
          </p>
          <div className="inline-flex items-center gap-4 bg-white/10 rounded-xl px-8 py-4 mx-auto shadow-lg backdrop-blur-md">
            <Zap className="w-8 h-8 text-accent" />
            <span className="text-3xl md:text-4xl font-bold text-white">63 MW</span>
            <span className="text-lg text-white/80 font-medium">Total Capacity</span>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => {
              const StatusIcon = statusIcons[project.status as keyof typeof statusIcons];
              const isEven = index % 2 === 0;
              
              return (
                <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <Card className="overflow-hidden group">
                      <div className="relative">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {project.status}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                            <div className="text-sm font-semibold text-foreground">{project.capacity}</div>
                            <div className="text-xs text-muted-foreground">Capacity</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Project Details */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <Card className="p-8 h-full">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl md:text-3xl text-foreground mb-4">
                          {project.name}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {project.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(project.completionDate)}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Salient Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Our Projects?
            </h2>
            <p className="text-lg opacity-95 mb-8">
              Learn more about investment opportunities and partnership possibilities in our upcoming projects.
            </p>
            <div className="flex justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;