import {
  Component,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
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
import { ArrowsComponent } from '../../components/arrows/arrows.component';
import { CommonModule } from '@angular/common';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Subscription } from 'rxjs';
import { PdfSource } from 'src/app/models/pdf';

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
export class SyncfusionPdfviewerComponent implements OnDestroy {
  @ViewChild('pdfViewer') public pdfviewerControl!: PdfViewerComponent;

  resource = 'https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib';
  disableScroll = false;
  pdfSrc = '';
  pdfSourceSubscription: Subscription;

  constructor(private pdfService: PdfService) {
    this.pdfSourceSubscription = this.pdfService
      .pdfSource$()
      .subscribe((pdfSource: PdfSource) => {
        this.pdfSrc = pdfSource.src;
      });
  }

  public toggleScrollMode(): void {
    this.disableScroll = !this.disableScroll;
  }

  public prevPage(): void {
    this.pdfviewerControl.navigation.goToPreviousPage();
  }

  public nextPage(): void {
    this.pdfviewerControl.navigation.goToNextPage();
  }

  ngOnDestroy() {
    this.pdfSourceSubscription.unsubscribe();
  }
}
