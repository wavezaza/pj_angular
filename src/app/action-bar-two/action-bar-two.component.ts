import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-action-bar-two',
  templateUrl: './action-bar-two.component.html',
  styleUrls: ['./action-bar-two.component.scss']
})
export class ActionBarTwoComponent {
  @Input() counter:number = 0;
  @Input() step:number = 1;
  @Output() counterChange = new EventEmitter();

  @Input() inputDisplay = true;

  @Output() activates: EventEmitter<boolean> = new EventEmitter<boolean>();

  decrease(){
    if(this.counter > 0){
      this.counter -= this.step;
      this.counterChange.emit( this.counter);
    }
  }
  increase(){
    if(this.counter < 500){
          this.counter += this.step;
          this.counterChange.emit( this.counter);
        }
  }
  back(){
    this.activates.emit(false);
  }

}
