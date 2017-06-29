import { Directive, ElementRef, OnInit, Input, Attribute} from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
declare var google: any;

@Directive({
  selector: 'agm-control, [agmControl]',
})
export class AgmControl implements OnInit{

  @Input() position: string;

  constructor(
    private _wrapper: GoogleMapsAPIWrapper,
    private _elementRef: ElementRef,
    @Attribute('position') position = 'BOTTOM_LEFT'
  ) {


    this._wrapper.getNativeMap()
      .then((map:any) => {
        map.controls[google.maps.ControlPosition[position]].push(this._elementRef.nativeElement);
      });

    console.log(this, position)
  }

  ngOnInit() {

  }
}
