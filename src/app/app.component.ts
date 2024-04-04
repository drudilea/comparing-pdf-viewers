import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PdfService } from './services/pdf/pdf.service';
import { PdfSource } from './models/pdf';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pdf-viewer';
  pdfOptions: PdfSource[];

  constructor(public pdfService: PdfService) {
    this.pdfOptions = pdfService.pdfSources;
  }

  get pdfSelected() {
    return this.pdfService.getPdfSource();
  }

  set pdfSelected(pdf: PdfSource) {
    this.pdfService.setPdfSource(pdf);
  }
}
