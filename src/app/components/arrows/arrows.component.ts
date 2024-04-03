import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrows.component.html',
  styleUrl: './arrows.component.css',
})
export class ArrowsComponent {
  @Output() prevClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();
}
