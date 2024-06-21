import React from 'react';
import MyApp from './pdfViewer'; // Adjust the import path as necessary
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function App() {
  return (
    <div className="App">
      <MyApp />
    </div>
  );
}

export default App;

