import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfJsViewerComponent, PdfJsViewerModule } from 'ng2-pdfjs-viewer';

@Component({
  selector: 'app-ng2-pdfjs-viewer',
  standalone: true,
  imports: [CommonModule, PdfJsViewerModule],
  templateUrl: './ng2-pdfjs-viewer.component.html',
  styleUrl: './ng2-pdfjs-viewer.component.css',
})
export class Ng2PdfjsViewerComponent {
  readonly pdfSrc =
    'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  @ViewChild('pdfViewer', { static: false })
  private pdfComponent!: PdfJsViewerComponent;
}
