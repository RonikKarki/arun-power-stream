import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon, Calendar } from "lucide-react";
import heroDam from "@/assets/hero-dam.jpg";
import powerPlant from "@/assets/power-plant.jpg";
import riverLandscape from "@/assets/river-landscape.jpg";

const Gallery = () => {
  const galleryItems = [
    { id: 1, type: "image", src: heroDam, title: "Main Dam Structure", category: "Infrastructure", date: "2024-01-15" },
    { id: 2, type: "image", src: powerPlant, title: "Power Generation Unit", category: "Technology", date: "2024-01-10" },
    { id: 3, type: "image", src: riverLandscape, title: "Environmental Harmony", category: "Environment", date: "2024-01-08" },
    { id: 4, type: "video", src: heroDam, title: "Project Construction Timelapse", category: "Construction", date: "2024-01-05" },
    { id: 5, type: "image", src: powerPlant, title: "Control Room Operations", category: "Technology", date: "2023-12-20" },
    { id: 6, type: "image", src: riverLandscape, title: "Community Engagement", category: "Community", date: "2023-12-15" },
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our projects through photos and videos showcasing our commitment to sustainable energy development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img src={item.src} alt={item.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-4 h-4 mr-2" />Play Video
                      </Button>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 text-foreground">
                      {item.type === "video" ? <Play className="w-3 h-3 mr-1" /> : <ImageIcon className="w-3 h-3 mr-1" />}
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(item.date).toLocaleDateString()}
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

export default Gallery;