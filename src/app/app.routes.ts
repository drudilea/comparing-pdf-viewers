import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ng2-pdf-viewer',
    loadComponent: () =>
      import('./modules/ng2-pdf-viewer/ng2-pdf-viewer.component').then(
        (m) => m.Ng2PdfViewerComponent
      ),
  },
  {
    path: 'ng2-pdfjs-viewer',
    loadComponent: () =>
      import('./modules/ng2-pdfjs-viewer/ng2-pdfjs-viewer.component').then(
        (m) => m.Ng2PdfjsViewerComponent
      ),
  },
  {
    path: 'ngx-extended-pdf-viewer',
    loadComponent: () =>
      import('./modules/ngx-extended-pdf/ngx-extended-pdf.component').then(
        (m) => m.NgxExtendedPdfComponent
      ),
  },
  {
    path: 'syncfusion-pdfviewer',
    loadComponent: () =>
      import(
        './modules/syncfusion-pdfviewer/syncfusion-pdfviewer.component'
      ).then((m) => m.SyncfusionPdfviewerComponent),
  },
];
