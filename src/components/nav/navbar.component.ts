import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule],
    template: `
     <nav class="navbar navbar-expand-lg shadow" [class.bg-white]="!isDark" [class.bg-dark]="isDark" [class.navbar-dark]="isDark" [class.navbar-light]="!isDark">
      <div class="container d-flex justify-content-between">
        <a class="navbar-brand fw-bold" href="#">SPA Angular</a>
        <div>
          <a [routerLink]="['init/list']" class="nav-link d-inline me-3">Listado</a>
          <a [routerLink]="['init/create']" class="nav-link d-inline">Nueva Orden</a>
          
        </div>
      </div>
    </nav>
    `
  })
  
  export class NavbarComponent {
    @Input() isDark = false;
    @Output() toggleTheme = new EventEmitter<void>();
  }
  