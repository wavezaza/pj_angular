import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss']
})
export class MaxMinMeterComponent {
   @Input() minLabel = 'minLabel';
   @Input() maxLabel = 'maxLabel';

   @Output() minChage = new EventEmitter();
   @Output() maxChage = new EventEmitter();

   doMinChange(value: number){
    this.minChage.emit(value);
   }
   doMaxChange(value: number){
    this.maxChage.emit(value);
   }
}
