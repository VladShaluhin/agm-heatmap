import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmHeatmapModule } from '../../agm-heatmap/agm-heatmap.module';
import { GreenArrowModule } from 'green-arrow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeatmapComponent } from './heatmap.component';
import { HeatmapControlComponent } from './heatmap-control.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmHeatmapModule,
    GreenArrowModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule
  ],
  declarations: [HeatmapComponent, HeatmapControlComponent],
  exports: [HeatmapComponent]
})
export class HeatmapModule { }
