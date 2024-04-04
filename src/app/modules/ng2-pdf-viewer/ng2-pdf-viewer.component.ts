import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { PDFDocumentProxy, PdfViewerModule } from 'ng2-pdf-viewer';
import { ArrowsComponent } from '../../components/arrows/arrows.component';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Subscription } from 'rxjs';
import { PdfSource } from 'src/app/models/pdf';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng2-pdf-viewer',
  standalone: true,
  templateUrl: 'ng2-pdf-viewer.component.html',
  imports: [PdfViewerModule, ArrowsComponent, CommonModule],
  encapsulation: ViewEncapsulation.None,
  styles: `
    .ng2-pdf-viewer-container {
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }`,
})
export class Ng2PdfViewerComponent implements OnDestroy {
  currentPage = 1;
  totalPages = 0;
  pdfSrc = '';
  pdfSourceSubscription: Subscription;

  constructor(private pdfService: PdfService) {
    this.pdfSourceSubscription = this.pdfService
      .pdfSource$()
      .subscribe((pdfSource: PdfSource) => {
        this.currentPage = 1;
        this.pdfSrc = pdfSource.src;
      });
  }

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

  ngOnDestroy() {
    this.pdfSourceSubscription.unsubscribe();
  }
}
