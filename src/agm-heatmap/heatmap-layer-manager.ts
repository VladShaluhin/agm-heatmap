import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { AgmHeatmapLayer } from './heatmap-layer';

declare var google: any;

/**
 * Manages all Heatmap Layers for a Google Map instance.
 */

@Injectable()
export class HeatmapLayerManager {
  private _layers: Map<AgmHeatmapLayer, Promise<any>> =
    new Map<AgmHeatmapLayer, Promise<any>>();
  constructor(
    private _wrapper:  GoogleMapsAPIWrapper
  ) {}


  addHeatmapLayer(layer: AgmHeatmapLayer) {
    const newLayer = this._wrapper.getNativeMap().then(map => {
        return new google.maps.visualization.HeatmapLayer({
          map,
          data: []
        });
    });
    this._layers.set(layer, newLayer);

    return newLayer;
  }

  setOptions(layer: AgmHeatmapLayer, options) {
    return this._layers.get(layer)
      .then(l => l.setOptions(options))
  }

  deleteHeatmapLayer(layer: AgmHeatmapLayer) {
    return this._layers.get(layer).then(l => {
      l.setMap(null);
      this._layers.delete(layer);
    });
  }
}
