import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

}
