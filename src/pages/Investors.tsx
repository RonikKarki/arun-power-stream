import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
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

const Investors = () => {
  const [financialDocs, setFinancialDocs] = useState<Document[]>([]);
  const [otherDocs, setOtherDocs] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE_URL}/documents/?type=financial`).then(res => res.json()),
      fetch(`${API_BASE_URL}/documents/?type=other`).then(res => res.json()),
    ]).then(([financial, other]) => {
      setFinancialDocs(financial);
      setOtherDocs(other);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Investor Relations</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4">Financial Documents</h3>
                <div className="space-y-4">
                  {financialDocs.map(doc => (
                    <Card key={doc.id} className="p-4 flex items-center justify-between">
                      <span>{doc.title}</span>
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        Download PDF
                      </a>
                    </Card>
                  ))}
                  {financialDocs.length === 0 && <div>No financial documents found.</div>}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Other Documents</h3>
                <div className="space-y-4">
                  {otherDocs.map(doc => (
                    <Card key={doc.id} className="p-4 flex items-center justify-between">
                      <span>{doc.title}</span>
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        Download PDF
                      </a>
                    </Card>
                  ))}
                  {otherDocs.length === 0 && <div>No other documents found.</div>}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Investors;