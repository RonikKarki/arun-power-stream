import { Card, CardContent } from "@/components/ui/card";
import { Zap, Droplets, Leaf, Award } from "lucide-react";
import powerPlant from "@/assets/power-plant.jpg";
import riverLandscape from "@/assets/river-landscape.jpg";

const stats = [
  { icon: Zap, label: "MW Capacity", value: "63", color: "text-accent" },
  { icon: Droplets, label: "Projects", value: "2", color: "text-secondary" },
  { icon: Leaf, label: "Years Experience", value: "15+", color: "text-accent-light" },
  { icon: Award, label: "Listed Company", value: "NEPSE", color: "text-primary-light" },
];

const CompanyOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Arun Kabeli Power Limited
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-justify">
            Arun Valley Hydropower Development Company Limited has developed a (SPV) Special Purpose Vehicle Company "Arun Kabeli Power Limited" to built and operate a 25 MW Kabeli B1 hydropower project in East Nepal. Kabeli B-1 (25 MW) is run-of-river hydropower project located in Kabeli river in Panchthar and Taplejung district. The project was identified and developed by a group of experts from Arun Valley Hydropower Development Company Limited and built by Arun Kabeli Power Limited.
            <br /><br />
            The project is generating power since 3rd October, 2019 (B.S 2076.06.16). The power from the project is transmitted through 132 KV single circuit transmission line up to Amarpur substation of NEA. The power is consumed in Eastern Nepal. I am happy to inform that Kabeli B-1 hydropower project is running satisfactorily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Leading Nepal's Energy Transformation
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <h4 className="text-lg font-semibold text-foreground">Overview of Hydro Project</h4>
              <p>
                After the completion of Piluwakhola Hydropower Project in 2001, Arun Valley Hydropower Development Company Limited started feasibility study of Ridi Hydropower project (2400 kW) in Gulmi district and established a company named Ridi Hydropower Development Company Limited to develop the project. After that Arun Valley Hydropower Development Company Limited started feasibility study of Kabeli B1 project on Kabeli River.
              </p>
              <p>
                It is located in between Panchthar and Taplejung district of Mechi Zone in Eastern Development Region of Nepal. To develop this project, Arun Valley Hydropower Development Company Limited established one company named Arun Kabeli Power Limited on 7th January, 2011 as a subsidiary company.
              </p>
              <p>
                The company has signed a connection agreement with Nepal Electricity Authority (NEA), Grid Department on 29th May, 2012 for the power evacuation from this project and signed Power Purchase Agreement (PPA) with NEA on 13th July, 2012. According to PPA, power purchase rate per kW is Rs.4.80 for wet months and Rs.8.40 for dry months.
              </p>
              <p>
                The company has its policy of wider people participation in the equity capital and makes profit from the investment. In this model, small capital collection can help to build mega project. Now people are highly interested to invest in promoter equity capital in hydropower projects.
              </p>
            </div>
            
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
                    src="/lovable-uploads/0e2a4784-fb2a-4edc-96d1-5e2aac24f970.png" 
                    alt="Arun Kabeli Powerhouse Facility"
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
                    src="/lovable-uploads/2a455b33-0392-4bb9-b989-aa31645d7830.png" 
                    alt="Water Conveyance Infrastructure"
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