import { GoogleMapsAPIWrapper } from '@agm/core';
import { ElementRef } from '@angular/core';
declare var google: any;
export  class BaseCustomControl {
  constructor(
    protected _wrapper: GoogleMapsAPIWrapper,
    protected _elementRef: ElementRef
  ) {
    this._wrapper.getNativeMap()
      .then((map:any) => {
        map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(this._elementRef.nativeElement);
      })
  }
}
