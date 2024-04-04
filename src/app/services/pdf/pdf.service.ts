import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PdfSource } from 'src/app/models/pdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  readonly pdfSources: PdfSource[] = [
    {
      id: 1,
      label: 'Form to complete',
      src: 'assets/pdf/form.pdf',
    },
    {
      id: 2,
      label: 'Long PDF',
      src: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    },
    {
      id: 3,
      label: 'PDF with annotations',
      src: 'assets/pdf/annotations.pdf',
    },
    {
      id: 4,
      label: 'Short PDF',
      src: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
    },
  ];

  private _pdfSelected: PdfSource;
  private pdfSourceSubject: BehaviorSubject<PdfSource>;

  constructor() {
    this._pdfSelected = this.pdfSources[0];
    this.pdfSourceSubject = new BehaviorSubject(this._pdfSelected);
  }

  pdfSource$(): Observable<PdfSource> {
    return this.pdfSourceSubject.asObservable();
  }

  getPdfSource(): PdfSource {
    return this.pdfSourceSubject.value;
  }

  setPdfSource(pdfSource: PdfSource): void {
    this.pdfSourceSubject.next(pdfSource);
  }
}
