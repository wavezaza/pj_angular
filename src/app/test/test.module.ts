import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    TableModule
  ],
  exports: [
      TestComponent
  ]
})
export class TestModule { }
