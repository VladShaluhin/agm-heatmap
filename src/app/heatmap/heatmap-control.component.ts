import { Component } from '@angular/core';


@Component({
  selector: 'heatmap-control',
  templateUrl: './heatmap-control.component.html',
  host: {
    'class': 'widget-pane widget-pane-visible',
    '[class.widget-pane-collapsed]': 'collapsed'
  }
})
export class HeatmapControlComponent {
  collapsed: boolean = false;

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
