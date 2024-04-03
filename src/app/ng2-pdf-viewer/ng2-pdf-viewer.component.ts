import { Component } from '@angular/core';
import { PDFDocumentProxy, PdfViewerModule } from 'ng2-pdf-viewer';
import { ArrowsComponent } from '../components/arrows/arrows.component';

@Component({
  selector: 'app-ng2-pdf-viewer',
  standalone: true,
  templateUrl: 'ng2-pdf-viewer.component.html',
  imports: [PdfViewerModule, ArrowsComponent],
})
export class Ng2PdfViewerComponent {
  readonly pdfSrc = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

  currentPage = 1;
  totalPages = 0;

  afterLoadComplete(pdfData: PDFDocumentProxy) {
    console.log(pdfData);
    this.totalPages = pdfData.numPages;
  }

  nextPage() {
    if (this.currentPage === this.totalPages) {
      return;
    }
    this.currentPage++;
  }

  prevPage() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
  }

  pageChange(pageNumber: number) {
    console.log(pageNumber);
  }
}
