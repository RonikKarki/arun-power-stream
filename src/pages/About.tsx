import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chairmanImage from "@/assets/chairman.jpg";

// Mock data for board members and management
const boardMembers = [
  { id: 1, name: "Mr. Rajesh Sharma", position: "Chairman", image: chairmanImage },
  { id: 2, name: "Ms. Priya Thapa", position: "Vice Chairman", image: chairmanImage },
  { id: 3, name: "Mr. Suresh Maharjan", position: "Director", image: chairmanImage },
  { id: 4, name: "Dr. Kamala Singh", position: "Independent Director", image: chairmanImage },
  { id: 5, name: "Mr. Bikash Shrestha", position: "Director", image: chairmanImage },
];

const managementTeam = [
  { id: 1, name: "Mr. Anil Kumar Joshi", position: "Chief Executive Officer", department: "Executive" },
  { id: 2, name: "Ms. Sunita Pradhan", position: "Chief Financial Officer", department: "Finance" },
  { id: 3, name: "Mr. Deepak Bhattarai", position: "Chief Technical Officer", department: "Engineering" },
  { id: 4, name: "Ms. Gita Adhikari", position: "Head of Operations", department: "Operations" },
  { id: 5, name: "Mr. Ramesh Karki", position: "Head of Business Development", department: "Business" },
  { id: 6, name: "Ms. Sita Tamang", position: "Head of Human Resources", department: "HR" },
];

const About = () => {
  return (
    <Layout>
      {/* Chairman's Message */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our leadership team and learn about our commitment to sustainable energy development.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={chairmanImage} 
                  alt="Chairman" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    Chairman's Message
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Mr. Rajesh Sharma
                  </h2>
                  <p className="text-muted-foreground">Chairman & Founder</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    "Welcome to Arun Kabeli Power Limited. Since our inception, we have been driven by a singular vision: to harness Nepal's abundant water resources for sustainable energy generation that benefits our nation and our people."
                  </p>
                  <p>
                    "Our journey in the hydropower sector has been marked by unwavering commitment to excellence, environmental stewardship, and community development. We believe that sustainable energy development is not just about generating electricity, but about creating lasting positive impact for all stakeholders."
                  </p>
                  <p>
                    "As we look toward the future, we remain dedicated to expanding our capacity, adopting cutting-edge technologies, and maintaining the highest standards of corporate governance. Together, we are building a brighter, more sustainable future for Nepal."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Board of Directors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced board provides strategic guidance and oversight to ensure sustainable growth and governance excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                    {member.position}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Management Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated management team brings together decades of experience in engineering, finance, and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {managementTeam.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{member.position}</p>
                      <Badge variant="outline" className="text-xs">
                        {member.department}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;