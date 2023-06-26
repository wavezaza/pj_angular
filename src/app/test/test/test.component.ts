import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './test-request';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  value2: string = 'hello world';
  bookList: Book[] = [];

  @Output() activates2: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  sear(name: string){
    this.http.get<Book[]>('https://anapioficeandfire.com/api/books?name='+name).subscribe(response => {
      this.bookList = response;
    });
  }
  back2(){
    this.activates2.emit(false);
  }
}
