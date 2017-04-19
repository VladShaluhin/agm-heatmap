import { Directive, ElementRef } from '@angular/core';
import { BaseCustomControl } from './base-custom-control';
import { GoogleMapsAPIWrapper } from '@agm/core';


@Directive({
  selector: '[test]',
})
export class TestControl extends BaseCustomControl{
  constructor(
    wrapper: GoogleMapsAPIWrapper,
    elementRef: ElementRef
  ) {
    super(wrapper, elementRef);
    console.log(111)
  }
}
