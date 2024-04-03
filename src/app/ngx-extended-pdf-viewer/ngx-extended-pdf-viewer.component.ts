import { Component, ViewChild } from '@angular/core';
import {
  NgxExtendedPdfViewerModule,
  NgxExtendedPdfViewerService,
} from 'ngx-extended-pdf-viewer';
import { ArrowsComponent } from '../components/arrows/arrows.component';

@Component({
  selector: 'app-ngx-extended-pdf-viewer',
  templateUrl: 'ngx-extended-pdf-viewer.component.html',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, ArrowsComponent],
  providers: [NgxExtendedPdfViewerService],
})
export class NgxExtendedPdfViewerComponent {
  readonly pdfSrc = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  @ViewChild('pdfViewer', { static: false })
  private pdfComponent!: NgxExtendedPdfViewerService;

  currentPage = 1;
  totalPages = 0;

  nextPage() {
    console.log(this.pdfComponent);
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
}
