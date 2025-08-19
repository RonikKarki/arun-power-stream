import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Notice = {
  id: number;
  title: string;
  file: string;
  notice_type: "image" | "pdf";
};

function getFileUrl(file: string) {
  if (file.startsWith("http")) return file;
  return `http://localhost:8000${file}`;
}

const NoticePopup = () => {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [open, setOpen] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/notice/")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setNotice(data[0]);
      });
  }, []);

  if (!notice || !open) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">{notice.title}</h2>
          {notice.notice_type === "image" ? (
            <img
              src={getFileUrl(notice.file)}
              alt={notice.title}
              className="max-h-96 w-auto rounded mb-4"
            />
          ) : (
            <>
              {!iframeError ? (
                <iframe
                  src={getFileUrl(notice.file)}
                  title={notice.title}
                  className="w-full h-96 mb-4"
                  style={{ border: 0 }}
                  onError={() => setIframeError(true)}
                />
              ) : null}
              <div className="w-full flex flex-col items-center justify-center bg-gray-100 mb-4">
                <span className="mb-2 text-red-600">
                  {iframeError
                    ? "Unable to display PDF. Click below to download or view."
                    : "If the PDF does not display, click below to download or view."}
                </span>
                <a
                  href={getFileUrl(notice.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Download/View PDF
                </a>
              </div>
            </>
          )}
          <Button onClick={() => setOpen(false)} className="mt-2">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoticePopup;