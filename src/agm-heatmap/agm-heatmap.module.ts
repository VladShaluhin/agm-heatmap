import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmHeatmapLayer, AgmMap } from './heatmap-layer';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [AgmHeatmapLayer, AgmMap],
  exports: [AgmHeatmapLayer, AgmMap]
})
export class AgmHeatmapModule { }
