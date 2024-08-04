import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  details: string[] = [
    'Web Design',
    'Mobile Design',
    'Logo Design',
    'Web Application Development',
    'Mobile Application Development',
    'PWA Development',
  ];
  bgColor: any = '';
}
