import { Component, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfJsViewerComponent, PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Subscription } from 'rxjs';
import { PdfSource } from 'src/app/models/pdf';

@Component({
  selector: 'app-ng2-pdfjs-viewer',
  standalone: true,
  imports: [CommonModule, PdfJsViewerModule],
  templateUrl: './ng2-pdfjs-viewer.component.html',
})
export class Ng2PdfjsViewerComponent implements OnDestroy {
  @ViewChild('pdfViewer', { static: false })
  private pdfComponent!: PdfJsViewerComponent;

  pdfSrc = '';
  pdfSourceSubscription: Subscription;

  constructor(private pdfService: PdfService) {
    this.pdfSourceSubscription = this.pdfService
      .pdfSource$()
      .subscribe((pdfSource: PdfSource) => {
        this.pdfSrc = pdfSource.src;
      });
  }

  ngOnDestroy() {
    this.pdfSourceSubscription.unsubscribe();
  }
}
