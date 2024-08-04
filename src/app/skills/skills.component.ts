import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillsDescription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, numquam ut
    iusto neque in quas cum accusamus iure. Illum ad maxime dolore! Vel itaque
    neque nam, aliquam veniam eum corporis.`;
  focus: string[] = [
    'UI/UX Design',
    'Responsive Design',
    'Web Design',
    'Mobile App Design',
  ];
}
