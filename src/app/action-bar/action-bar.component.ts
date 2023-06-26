import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent{
  @Input() counter:number = 0;
  @Input() step:number = 1;
  @Output() counterChange = new EventEmitter()

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
}
