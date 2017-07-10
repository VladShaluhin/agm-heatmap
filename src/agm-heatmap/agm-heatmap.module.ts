import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { GoogleMapsAPIWrapper } from '@agm/core';

import { HeatmapLayerManager } from './heatmap-layer-manager';

import { AgmControl } from './control';
import { AgmHeatmapLayer } from './heatmap-layer';


@Directive({
  selector: 'agm-map',
  providers: [HeatmapLayerManager]
})
export class AgmMap {
  constructor(
    private _wrapper: GoogleMapsAPIWrapper
  ) {}
}


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [AgmHeatmapLayer, AgmMap, AgmControl],
  exports: [AgmHeatmapLayer, AgmMap, AgmControl, AgmCoreModule]
})
export class AgmHeatmapModule { }
