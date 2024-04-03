import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  PdfViewerModule,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormDesignerService,
  FormFieldsService,
  PdfViewerComponent,
} from '@syncfusion/ej2-angular-pdfviewer';
import { ArrowsComponent } from '../components/arrows/arrows.component';
import { CommonModule } from '@angular/common';

const syncfusionPdfViewerServices = [
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  FormDesignerService,
  FormFieldsService,
];

@Component({
  selector: 'app-syncfusion-pdfviewer',
  standalone: true,
  templateUrl: 'syncfusion-pdfviewer.component.html',
  imports: [PdfViewerModule, ArrowsComponent, CommonModule],
  providers: [...syncfusionPdfViewerServices],
  styleUrl: 'syncfusion-pdfviewer.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SyncfusionPdfviewerComponent {
  @ViewChild('pdfViewer') public pdfviewerControl!: PdfViewerComponent;

  disableScroll = false;
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource =
    'https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib';

  // const pdfConfig: PdfViewerModel = {
  //   document: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  //   resource: 'https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib',
  //   zoomMode: 'FitToPage',
  // };

  public toggleScrollMode(): void {
    this.disableScroll = !this.disableScroll;
  }

  public prevPage(): void {
    this.pdfviewerControl.navigation.goToPreviousPage();
  }

  public nextPage(): void {
    this.pdfviewerControl.navigation.goToNextPage();
  }
}
