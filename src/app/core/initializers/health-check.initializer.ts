import { HealthService } from '../services/health.service';

export function healthCheckInitializer(healthService: HealthService) {
  return () => healthService.checkHealth();
}
