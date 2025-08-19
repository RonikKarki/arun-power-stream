import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { API_BASE_URL } from "@/lib/api";

type Document = {
  id: number;
  title: string;
  file: string;
  doc_type: "financial" | "other";
  uploaded_at: string;
};

function getFileUrl(file: string) {
  if (file.startsWith("http")) return file;
  return `${API_BASE_URL.replace(/\/api\/?$/, "")}${file}`;
}

const LatestNews = () => {
  const [latestDocs, setLatestDocs] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/latest-documents/`)
      .then(res => res.json())
      .then(data => {
        setLatestDocs(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest News & Updates</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="space-y-4">
            {latestDocs.map(doc => (
              <Card key={doc.id} className="p-4 flex items-center justify-between">
                <div>
                  <span className="font-semibold">{doc.title}</span>
                  <Badge className="ml-4">{doc.doc_type === "financial" ? "Financial" : "Other"}</Badge>
                </div>
                <a
                  href={getFileUrl(doc.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  View PDF
                </a>
              </Card>
            ))}
            {latestDocs.length === 0 && <div>No recent updates found.</div>}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;