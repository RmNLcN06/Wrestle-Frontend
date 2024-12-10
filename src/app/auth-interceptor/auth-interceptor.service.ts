import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const username = 'admin'; // Remplacez par votre nom d'utilisateur
  const password = 'admin123'; // Remplacez par votre mot de passe
  const authHeader = 'Basic ' + btoa(`${username}:${password}`);

  const authReq = req.clone({
    setHeaders: {
      Authorization: authHeader,
    },
  });

  return next(authReq);
}
