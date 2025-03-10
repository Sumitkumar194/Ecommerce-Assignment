import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-single-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './single-card.component.html',
  styleUrl: './single-card.component.css',
})
export class SingleCardComponent {
  @Input() cardData!: {
    title: string;
    image: { imageUrl: string; decription: string }[];
  };
}
