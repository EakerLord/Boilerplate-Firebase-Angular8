import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente que se muestra en caso de introducir
 * una URL no valida, con posibilidad de redirección
 * a la pantalla principal de login.
 */

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor(private router: Router) { }

  /**
   * Una vez clicado la imagen para redirigir,
   * esta redirección se efectua a los 1,5 segundos.
   */
  returnLogin() {
    setTimeout( () => {
      this.router.navigate(['/']);
    }, 1500);
  }
}
