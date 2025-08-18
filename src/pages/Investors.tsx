import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Download, FileText, Calendar, Search, TrendingUp, DollarSign, Users, Award } from "lucide-react";

// Mock data for financial documents and reports
const documents = [
  {
    id: 1,
    title: "Annual Report 2023",
    category: "Annual Reports",
    date: "2024-01-15",
    type: "PDF",
    size: "2.5 MB",
    featured: true,
    documentType: "financial",
    description: "Comprehensive overview of our financial performance, operational achievements, and strategic initiatives for 2023."
  },
  {
    id: 2,
    title: "Q3 2024 Financial Results",
    category: "Quarterly Reports",
    date: "2024-01-10",
    type: "PDF",
    size: "1.8 MB",
    featured: true,
    documentType: "financial",
    description: "Third quarter financial highlights showing strong revenue growth and operational efficiency improvements."
  },
  {
    id: 3,
    title: "Environmental Impact Assessment - Upper Arun Project",
    category: "Environmental Reports",
    date: "2024-01-08",
    type: "PDF",
    size: "4.2 MB",
    featured: false,
    documentType: "other",
    description: "Detailed environmental impact assessment for our upcoming Upper Arun Hydropower Facility."
  },
  {
    id: 4,
    title: "Share Allotment Notice - IPO 2024",
    category: "Share Information",
    date: "2024-01-05",
    type: "PDF",
    size: "0.8 MB",
    featured: false,
    documentType: "financial",
    description: "Official notice regarding share allotment for our Initial Public Offering scheduled for 2024."
  },
  {
    id: 5,
    title: "Sustainability Report 2023",
    category: "Sustainability",
    date: "2023-12-20",
    type: "PDF",
    size: "3.1 MB",
    featured: false,
    documentType: "other",
    description: "Our commitment to environmental stewardship and community development initiatives."
  },
  {
    id: 6,
    title: "Board Meeting Minutes - December 2023",
    category: "Corporate Governance",
    date: "2023-12-15",
    type: "PDF",
    size: "0.5 MB",
    featured: false,
    documentType: "other",
    description: "Minutes from the December 2023 board meeting covering strategic decisions and governance matters."
  },
  {
    id: 7,
    title: "Audited Financial Statement 2023",
    category: "Financial Statements",
    date: "2024-01-20",
    type: "PDF",
    size: "1.9 MB",
    featured: false,
    documentType: "financial",
    description: "Comprehensive audited financial statements prepared by certified public accountants."
  },
  {
    id: 8,
    title: "Cash Flow Statement Q4 2023",
    category: "Financial Statements",
    date: "2024-01-18",
    type: "PDF",
    size: "1.2 MB",
    featured: false,
    documentType: "financial",
    description: "Detailed cash flow analysis for the fourth quarter of 2023."
  }
];

// Mock financial highlights
const financialHighlights = [
  { label: "Revenue Growth", value: "25%", icon: TrendingUp, color: "text-accent" },
  { label: "Total Assets", value: "NPR 8.2B", icon: DollarSign, color: "text-secondary" },
  { label: "Shareholders", value: "2,500+", icon: Users, color: "text-primary" },
  { label: "Credit Rating", value: "BBB+", icon: Award, color: "text-accent-light" }
];

const categoryColors = {
  "Annual Reports": "bg-primary/10 text-primary border-primary/20",
  "Quarterly Reports": "bg-secondary/10 text-secondary border-secondary/20",
  "Environmental Reports": "bg-accent/10 text-accent border-accent/20",
  "Share Information": "bg-accent-light/10 text-accent-light border-accent-light/20",
  "Sustainability": "bg-accent/10 text-accent border-accent/20",
  "Corporate Governance": "bg-primary/10 text-primary border-primary/20",
  "Financial Statements": "bg-secondary/10 text-secondary border-secondary/20"
};

// Capital information
const capitalInfo = [
  { label: "Paid Up Capital", value: "Rs 5,00,00,00,000" },
  { label: "Authorized Capital", value: "Rs 3,895,942,100" },
  { label: "Issued Capital", value: "Rs 3,895,942,100" }
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const Investors = () => {
  const featuredDocs = documents.filter(doc => doc.featured);
  const financialDocs = documents.filter(doc => doc.documentType === 'financial').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const otherDocs = documents.filter(doc => doc.documentType === 'other').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Investor Relations
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive financial information, reports, and governance documents to make informed investment decisions.
            </p>
          </div>

          {/* Capital Information */}
          <Card className="bg-background border-2 mb-12 p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-foreground">Capital Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {capitalInfo.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-semibold text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Financial Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {financialHighlights.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                  <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Documents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Reports
            </h2>
            <p className="text-lg text-muted-foreground">
              Our latest and most important financial documents and reports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredDocs.map((doc) => (
              <Card key={doc.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={categoryColors[doc.category as keyof typeof categoryColors]}>
                      <FileText className="w-3 h-3 mr-1" />
                      {doc.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(doc.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">
                    {doc.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm" className="group">
                        <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Documents */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Financial Documents
            </h2>
            <p className="text-lg text-muted-foreground">
              Financial reports, statements, and related investment documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {financialDocs.map((doc) => (
              <Card key={doc.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={categoryColors[doc.category as keyof typeof categoryColors]}>
                      {doc.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{formatDate(doc.date)}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {doc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <FileText className="w-3 h-3" />
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        👁️
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 group">
                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other Documents
            </h2>
            <p className="text-lg text-muted-foreground">
              Corporate governance, environmental reports, and other important documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDocs.map((doc) => (
              <Card key={doc.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={categoryColors[doc.category as keyof typeof categoryColors]}>
                      {doc.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{formatDate(doc.date)}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {doc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <FileText className="w-3 h-3" />
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        👁️
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 group">
                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Contact */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need More Information?
            </h2>
            <p className="text-lg opacity-95 mb-8">
              Our investor relations team is here to help with any questions about our financial performance or investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Investor Relations
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;