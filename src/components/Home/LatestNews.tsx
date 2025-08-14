import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - will be replaced with dynamic data from admin panel
const newsItems = [
  {
    id: 1,
    title: "Arun Kabeli Power Announces 15 MW Expansion Project",
    excerpt: "New hydropower facility to increase total capacity by 30%, contributing significantly to Nepal's renewable energy goals.",
    date: "2024-01-15",
    category: "Project Update",
    type: "announcement",
    featured: true
  },
  {
    id: 2,
    title: "Q3 2024 Financial Results Released",
    excerpt: "Strong performance with 25% increase in revenue and successful completion of environmental compliance certifications.",
    date: "2024-01-10",
    category: "Financial Report",
    type: "report",
    featured: false
  },
  {
    id: 3,
    title: "Environmental Conservation Initiative Launched",
    excerpt: "Partnership with local communities for watershed management and biodiversity conservation around project sites.",
    date: "2024-01-08",
    category: "Sustainability",
    type: "initiative",
    featured: false
  },
  {
    id: 4,
    title: "Annual Shareholders Meeting - 2024",
    excerpt: "Invitation to all shareholders for the annual general meeting scheduled for February 2024.",
    date: "2024-01-05",
    category: "Corporate",
    type: "meeting",
    featured: false
  }
];

const categoryColors = {
  "Project Update": "bg-accent/10 text-accent border-accent/20",
  "Financial Report": "bg-secondary/10 text-secondary border-secondary/20",
  "Sustainability": "bg-accent-light/10 text-accent-light border-accent-light/20",
  "Corporate": "bg-primary/10 text-primary border-primary/20"
};

const typeIcons = {
  announcement: FileText,
  report: FileText,
  initiative: FileText,
  meeting: Calendar
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const LatestNews = () => {
  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured).slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our latest developments, achievements, and industry insights.
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            {featuredNews.map((news) => {
              const IconComponent = typeIcons[news.type as keyof typeof typeIcons];
              return (
                <Card key={news.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
                  <div className="md:flex">
                    <div className="md:flex-1 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className={categoryColors[news.category as keyof typeof categoryColors]}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {news.category}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(news.date)}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {news.excerpt}
                      </p>
                      <Button variant="outline" className="group">
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularNews.map((news) => {
            const IconComponent = typeIcons[news.type as keyof typeof typeIcons];
            return (
              <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={categoryColors[news.category as keyof typeof categoryColors]}>
                      <IconComponent className="w-3 h-3 mr-1" />
                      {news.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(news.date)}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/investors" className="group">
              View All News & Documents
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;