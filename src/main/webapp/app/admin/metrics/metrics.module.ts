import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GestiondeNoteFsegsSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [GestiondeNoteFsegsSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent]
})
export class MetricsModule {}
