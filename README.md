# PdfViewer
Repository to compare different viewer libraries for pdf files

## Start the application

Run `npx nx serve pdf-viewer` to start the development server.

## Libraries to test

- [ng2-pdf](https://www.npmjs.com/package/ng2-pdf-viewer?activeTab=readme) (downloads 120.834)
    - Does not use iframe
    - Allows you to load one page at a time and avoid scrolling through pages
    - Emits event to see the page you were/are viewing
    - Does not allow annotations
    - https://vadimdez.medium.com/render-pdf-in-angular-4-927e31da9c76
- [Syncfusion](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started)
    - Lack of implementing the option to track page views.
    - The scroll must be removed through `pointer-events: none` so the functionality to add annotations would be lost.
- [ngx-extended-pdf](https://www.npmjs.com/package/ngx-extended-pdf-viewer?activeTab=readme) (downloads 64.560)
    - I can't find a way to get the total number of pages.
    - Allows annotations
    - Docs are a bit complicated to read and search
- [ng2-pdfjs](https://www.npmjs.com/package/ng2-pdfjs-viewer) (downloads 21.725)
    - Use an iframe to display the content
    - It is a bit more difficult to edit the built-in buttons.
- [PSPDFKit](https://pspdfkit.com/guides/web/)
    - Allows to [block scrolling](https://pspdfkit.com/guides/web/customizing-the-interface/document-presentation-options/#scrolling) without blocking other events (unlike Syncfusion)