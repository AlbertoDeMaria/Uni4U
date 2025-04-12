import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { healthCheckInitializer } from './initializers/health-check.initializer';
import { HealthService } from './services/health.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: healthCheckInitializer,
      deps: [HealthService],
      multi: true
    }
  ]
})
export class CoreModule { }
