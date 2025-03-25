import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import Aura from '@primeng/themes/aura';


import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { MessageService } from 'primeng/api';
import { graphqlProvider } from './apollo.confg';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  }), provideAnimationsAsync(), provideHttpClient(), MessageService
  ]
};
