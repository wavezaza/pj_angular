import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auditTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrls: ['./shopping-search.component.scss']
})
export class ShoppingSearchComponent implements OnInit {
  @Output() onInput = new EventEmitter<string>();
  // auditTime จะค้นหาหลังจากนับถอยหลังงเสร็จ   debounceTime จะทำการค้นหาก็ต่อเหมือนหยุดพิมพ์
  @Output() onSearch = this.onInput.pipe(debounceTime(1000));
  ngOnInit() { }

  inputSearch(text: string) {
    this.onInput.emit(text);
  }
}
