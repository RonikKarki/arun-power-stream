import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chairmanImage from "@/assets/chairman.jpg";

// Mock data for board members and management
const boardMembers = [
  { id: 1, name: "Ramesh Prasad Neupane", position: "Chairman", image: null },
  { id: 2, name: "Jeevan Raj Shakya", position: "Director", image: null },
  { id: 3, name: "Salina Nepal", position: "Director", image: null },
  { id: 4, name: "Sushil Timilsina", position: "Director", image: null },
  { id: 5, name: "Shashwat Chalisey", position: "Independent Director", image: null },
  { id: 6, name: "Thaneshwar Bhattrai", position: "Company Secretary", image: null },
];

const managementTeam = [
  { id: 1, name: "Thaneshwar Bhattrai", position: "Company Secretary", department: "Administration" },
  { id: 2, name: "Dibya Koirala", position: "Finance Manager", department: "Finance" },
  { id: 3, name: "Maneesh Lawar", position: "Electrical Engineer", department: "Engineering" },
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
                    Ramesh Prasad Neupane
                  </h2>
                  <p className="text-muted-foreground">Executive Chairman</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dear Readers,
                  </p>
                  <p>
                    Arun Valley Hydropower Development Company Limited has developed a (SPV) Special Purpose Vehicle Company "Arun Kabeli Power Limited" to built and operate a 25 MW Kabeli B1 hydropower project in East Nepal. Kabeli B-1 (25 MW) is run-of-river hydropower project located in Kabeli river in Panchthar and Taplejung district. The project was identified and developed by a group of experts from Arun Valley Hydropower Development Company Limited and built by Arun Kabeli Power Limited.
                  </p>
                  <p>
                    The project is generating power since 3rd October, 2019 (B.S 2076.06.16).The power from the project is transmitted through 132 KV single circuit transmission line up to Amarpur substation of NEA. The power is consumed in Eastern Nepal. I am happy to inform that Kabeli B-1 hydropower project is running satisfactorily.
                  </p>
                  <p>
                    We have a plan to install solar power projects surrounding the powerhouse area. We also have a plan to start various agricultural activities in the project area. Goat farming, livestock, coffee cultivation, fishery development, medicinal herbs are some of the products which we are planning to develop.
                  </p>
                  <p>
                    I invite the shareholders of the company and hydropower developers to make a site visit to our 25 MW Kabeli B-1 hydropower project site and develop co-operation for hydro and agricultural development.
                  </p>
                  <p>
                    Clean energy has a big contribution on economic development of the nation. I request for your active involvement in this sector
                  </p>
                  <p className="mt-6 font-semibold">
                    Ramesh Prasad Neupane<br />
                    Executive Chairman
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
                <div className="relative flex justify-center items-center bg-muted/30 h-64">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
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