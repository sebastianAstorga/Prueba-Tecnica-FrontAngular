import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/nav/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-ordenes';

  isDark = false;
  toggleTheme() {
    this.isDark = !this.isDark;
  }
}
