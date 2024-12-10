import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/auth-interceptor/auth-interceptor.service';

bootstrapApplication(AppComponent, /*appConfig*/{
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]) // Ajout de l'intercepteur
    ),
  ],
}).catch((err) => console.error(err));
