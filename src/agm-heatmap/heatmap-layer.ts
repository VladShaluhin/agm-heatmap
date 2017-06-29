import { Directive, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HeatmapLayerManager } from './heatmap-layer-manager';


const INPUTS = [ 'data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options' ];
const OUTPUTS = [];

@Directive({
  selector: 'agm-heatmap-layer',
  inputs: INPUTS,
  outputs: OUTPUTS,
})
export class AgmHeatmapLayer implements OnInit, OnChanges, OnDestroy{
  private _addedToManager: boolean = false;
  private static _heatmapLayerOptions: string[] = [...INPUTS];

  data: any = null;
  dissipating: boolean = false;
  gradient: string[]|null = null;
  maxIntensity: number|null = null;
  radius: number|null = null;
  opacity: number = 1;

  constructor(
    private _manager: HeatmapLayerManager
  ) {
    console.log(this)
  }

  ngOnInit() {
    if (this._addedToManager) {
      return;
    }
    this._manager.addHeatmapLayer(this);
    this._addedToManager = true;
  }

  ngOnChanges(changes) {
    if (!this._addedToManager) {
      return;
    }

    this._updatePolygonOptions(changes);
  }


  private _updatePolygonOptions(changes: SimpleChanges) {
    const options = Object.keys(changes)
      .filter(k => AgmHeatmapLayer._heatmapLayerOptions.indexOf(k) !== -1)
      .reduce((obj: any, k: string) => {
        obj[k] = changes[k].currentValue;
        return obj;
      }, {});
    if (Object.keys(options).length > 0) {
      this._manager.setOptions(this, options);
    }
  }

  ngOnDestroy() {
    this._manager.deleteHeatmapLayer(this);
  }

}
