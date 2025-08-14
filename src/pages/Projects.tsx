import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Calendar, CheckCircle, Clock, Users } from "lucide-react";
import heroDam from "@/assets/hero-dam.jpg";
import powerPlant from "@/assets/power-plant.jpg";
import riverLandscape from "@/assets/river-landscape.jpg";

// Mock project data - will be managed from admin panel
const projects = [
  {
    id: 1,
    name: "Arun Kabeli Hydropower Project",
    location: "Sankhuwasabha District",
    capacity: "25 MW",
    status: "Operational",
    completionDate: "2020-03-15",
    image: heroDam,
    description: "Our flagship project featuring state-of-the-art run-of-river technology with minimal environmental impact.",
    features: [
      "Run-of-river design with minimal environmental footprint",
      "Advanced turbine technology for maximum efficiency",
      "Local community employment and development programs",
      "24/7 automated monitoring and control systems",
      "Fish ladder and environmental protection measures"
    ],
    beneficiaries: "15,000+ households",
    investment: "USD 35 Million"
  },
  {
    id: 2,
    name: "Upper Arun Hydropower Facility",
    location: "Bhojpur District",
    capacity: "15 MW",
    status: "Under Construction",
    completionDate: "2024-12-30",
    image: powerPlant,
    description: "An innovative project utilizing cutting-edge sustainable technology for clean energy generation.",
    features: [
      "Smart grid integration capabilities",
      "Remote monitoring and predictive maintenance",
      "Zero-waste construction methodology",
      "Community skills development programs",
      "Biodiversity conservation initiatives"
    ],
    beneficiaries: "10,000+ households",
    investment: "USD 22 Million"
  },
  {
    id: 3,
    name: "Kabeli River Mini Hydro",
    location: "Panchthar District",
    capacity: "8 MW",
    status: "Planning",
    completionDate: "2025-08-15",
    image: riverLandscape,
    description: "A community-focused mini hydropower project designed to serve rural electrification needs.",
    features: [
      "Community ownership model",
      "Micro-grid technology for rural areas",
      "Local capacity building programs",
      "Sustainable watershed management",
      "Women's participation in project management"
    ],
    beneficiaries: "5,000+ households",
    investment: "USD 12 Million"
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
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our portfolio of hydropower projects that are transforming Nepal's energy landscape while preserving environmental integrity.
            </p>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Zap className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold text-foreground mb-1">48 MW</div>
                <div className="text-sm text-muted-foreground">Total Capacity</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Users className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <div className="text-2xl font-bold text-foreground mb-1">30,000+</div>
                <div className="text-sm text-muted-foreground">Households Served</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground mb-1">3</div>
                <div className="text-sm text-muted-foreground">Districts Covered</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-accent-light" />
                <div className="text-2xl font-bold text-foreground mb-1">USD 69M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </CardContent>
            </Card>
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

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Beneficiaries</div>
                            <div className="font-semibold text-foreground">{project.beneficiaries}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Investment</div>
                            <div className="font-semibold text-foreground">{project.investment}</div>
                          </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Download Project Portfolio
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;