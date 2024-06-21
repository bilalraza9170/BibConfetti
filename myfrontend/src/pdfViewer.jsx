import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "./Sample Conference Paper copy.pdf"

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
     <Document
        file={pdf}
  onLoadSuccess={onDocumentLoadSuccess}
>
  {Array.from(Array(numPages), (_, i) => i + 1).map((page) => (
    <Page pageNumber={page} onRenderTextLayer={false} renderAnnotationLayer={false} />
  ))}
</Document>

      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default MyApp;
