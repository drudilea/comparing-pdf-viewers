import { Component, OnDestroy, ViewChild } from '@angular/core';
import {
  EditorAnnotation,
  FormDataType,
  FreeTextEditorAnnotation,
  NgxExtendedPdfViewerComponent,
  NgxExtendedPdfViewerModule,
  NgxExtendedPdfViewerService,
  PdfLoadedEvent,
} from 'ngx-extended-pdf-viewer';
import { ArrowsComponent } from '../../components/arrows/arrows.component';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Subscription } from 'rxjs';
import { PdfSource } from 'src/app/models/pdf';
import { AsyncPipe, CommonModule } from '@angular/common';
import { annotations } from 'src/app/mocks/annotations';

@Component({
  selector: 'app-ngx-extended-pdf',
  templateUrl: 'ngx-extended-pdf.component.html',
  standalone: true,
  imports: [
    NgxExtendedPdfViewerModule,
    ArrowsComponent,
    AsyncPipe,
    CommonModule,
  ],
  providers: [NgxExtendedPdfViewerService],
})
export class NgxExtendedPdfComponent implements OnDestroy {
  @ViewChild('pdfViewer', { static: false })
  private pdfComponent!: NgxExtendedPdfViewerComponent;

  currentPage = 1;
  totalPages = 0;
  pdfSrc = '';
  pdfSourceSubscription: Subscription;
  pdfBlob: Blob | null = null;

  constructor(
    private pdfService: PdfService,
    private pdfViewerService: NgxExtendedPdfViewerService
  ) {
    this.pdfSourceSubscription = this.pdfService
      .pdfSource$()
      .subscribe((pdfSource: PdfSource) => {
        this.currentPage = 1;
        this.pdfSrc = pdfSource.src;
      });
  }

  async onDownload(filename = 'download.pdf') {
    this.pdfBlob = await this.pdfViewerService.getCurrentDocumentAsBlob();

    const a = document.createElement('a');

    if (!a.click) {
      throw new Error('DownloadManager: "a.click()" is not supported.');
    }

    a.href = URL.createObjectURL(this.pdfBlob);
    a.target = '_parent';

    if ('download' in a) {
      a.download = filename;
    }

    (document.body || document.documentElement).appendChild(a);
    a.click();
    a.remove();
  }

  onDownloadAnnotations() {
    try {
      const annotations = this.pdfViewerService.getSerializedAnnotations();
      console.log('Annotations: ', annotations);
    } catch (error) {
      console.error('Annotations error: ', error);
      this.pdfViewerService.getFormData(true).then((formData) => {
        console.log('Form data: ', formData);
      });
    }
  }

  onDeleteAnnotations() {
    this.pdfViewerService.removeEditorAnnotations();
  }

  addTextEditor(): void {
    const textEditorAnnotation: FreeTextEditorAnnotation = {
      annotationType: 3,
      color: [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ],
      fontSize: Math.random() * 10 + 20,
      value: 'Hello world!',
      pageIndex: this.currentPage - 1,
      rect: [
        50, // height?
        Math.random() * 500 + 350, // y
        Math.random() * 400, // x
        100, // width?
      ],
      rotation: 0,
    };
    this.pdfViewerService.addEditorAnnotation(textEditorAnnotation);
  }

  onLoadAnnotations() {
    annotations.forEach((annotation: EditorAnnotation) => {
      this.pdfViewerService.addEditorAnnotation(annotation);
    });
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

  onPageChange(page: number) {
    console.log('Page changed to: ', page);
  }

  onFormDataChange(data: FormDataType) {
    console.log('Form data: ', data);
  }

  onPdfLoaded(pdf: PdfLoadedEvent) {
    this.totalPages = pdf.pagesCount;
  }

  ngOnDestroy() {
    this.pdfSourceSubscription.unsubscribe();
  }
}
