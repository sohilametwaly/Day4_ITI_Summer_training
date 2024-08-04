import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  name: string = 'Katie Reed';
  description: string = 'Web Developer & Designer';
  aboutMeDescription: string = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quasi corporis delectus placeat deserunt numquam illum itaque in.
          Molestias velit aut cum alias fugit quia pariatur maxime distinctio
          temporibus reprehenderit `;
  contactUrl: string = 'www.google.com';
  resumeUrl: string = 'www.resume.com';
}
