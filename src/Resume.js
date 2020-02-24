import React, { Component } from "react";
import resumePDF from "./resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class Resume extends Component {
  render() {
    return (
      <Document file={resumePDF}>
        <Page pageNumber={1} />
      </Document>
    );
  }
}

export default Resume;
