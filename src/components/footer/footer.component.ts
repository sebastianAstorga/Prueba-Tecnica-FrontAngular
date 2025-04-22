import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <footer class="footer mt-auto py-3 shadow w-100" [class.bg-white]="!isDark" [class.bg-dark]="isDark">
      <div class="container text-center small" [class.text-muted]="!isDark" [class.text-white]="isDark">
        &copy; 2025 Sistema SPA. Todos los derechos reservados.
      </div>
    </footer>
  `,
    inputs: ['isDark']
})

export class FooterComponent{
  isDark = false;
}