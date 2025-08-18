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
    { id: 1, type: "image", src: "/lovable-uploads/27b741df-c255-4090-a87c-36e0ab0a8bad.png", title: "Arun Kabeli Dam Aerial View", category: "Infrastructure", date: "2021-07-23" },
    { id: 2, type: "image", src: "/lovable-uploads/8d153f94-15b5-4371-af37-321e83d6f076.png", title: "Concrete Dam Wall Construction", category: "Construction", date: "2021-06-15" },
    { id: 3, type: "image", src: "/lovable-uploads/2a455b33-0392-4bb9-b989-aa31645d7830.png", title: "Water Conveyance Channel", category: "Infrastructure", date: "2021-05-10" },
    { id: 4, type: "image", src: "/lovable-uploads/d97e2b3f-2b03-412e-a574-41d41fa66f85.png", title: "Powerhouse Construction Site", category: "Construction", date: "2024-01-15" },
    { id: 5, type: "image", src: "/lovable-uploads/0e2a4784-fb2a-4edc-96d1-5e2aac24f970.png", title: "Powerhouse Facility", category: "Technology", date: "2024-01-10" },
    { id: 6, type: "image", src: "/lovable-uploads/50626f6c-f515-4e48-a492-13a811394df4.png", title: "Water Management System", category: "Operations", date: "2023-12-20" },
    { id: 7, type: "image", src: "/lovable-uploads/8a59dc46-886f-4e0a-b4e8-9eabac76f622.png", title: "Dam Structure Downstream", category: "Infrastructure", date: "2021-07-23" },
    { id: 8, type: "image", src: "/lovable-uploads/087c3bb9-c5e1-40f3-85a2-0ce076a3f3fa.png", title: "Spillway Operations", category: "Operations", date: "2023-12-15" },
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
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;