import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const usuario = auth.obtenerUsuario();

  if (!auth.estaLogueado()) {
    router.navigate(['/login']);
    return false;
  }
  if (usuario?.rol !== 'admin') {
    router.navigate(['/']);
    return false;
  }
  return true;
};