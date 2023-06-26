import { Component } from '@angular/core';
import { Product } from './shopping/model/Product';
import { HttpClient } from '@angular/common/http';
import { Product2 } from './shopping/model/Product2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customerList:string[] = ['customer1', 'customer2', 'customer3', 'customer4', 'customer5'];
  MinLabel = 'myMinLabel'
  MaxLabel = 'myMaxLabel'
  apidivWidth = 200;
  apidivHeight = 200;

  activates = false;
  inputDisplays = false;

  activates2 = false;

  title = 'angular-ep1';
  value = 0;


  calBuffetInput(value: string){
    this.value = (Number(value)*3)/4;
  }

  testClick(){
    console.log('testClick');

  }
  testClickNumber(value: number){
    console.log('testClickNumber',value);
    this.apidivWidth = value;

  }

  doAppMinChange(value: number){
    console.log('doAppMinChange',value);
  }
  doAppMaxChange(value: number){
    console.log('doAppMaxChange',value);
  }
  clickApiDivWidth1(){
    this.apidivWidth = 50;
  }
  clickApiDivWidth2(){
    this.apidivWidth = 100;
  }
  clickApiDivWidth3(){
    this.apidivWidth = 300;
  }
  clickApiDivHeight1(){
    this.apidivHeight = 50;
  }
  clickApiDivHeight2(){
    this.apidivHeight = 100;
  }
  clickApiDivHeight3(){
    this.apidivHeight = 300;
  }
  activate(){
    this.activates = true;
    this.inputDisplays = true;
  }
  activate2(){
    this.activates2 = true;
  }
  back(activates: boolean) {
    this.activates = activates;
    this.inputDisplays = activates;
  }

  back2(activates2: boolean) {
    this.activates2 = activates2;
  }

  put(){
    this.customerList.push('customer'+(this.customerList.length + 1));
  }
  del(index:number){
    this.customerList.splice(index,1);
  }
  // Shopping search
  product: Product[] = [
    {name: 'Product 1',description: 'Product description ',price: 100,},
    {name: 'Product 2',description: 'Product description 2',price: 200,},
    {name: 'Product 3',description: 'Product description 3',price: 300,},
    {name: 'test',description: 'test',price: 40000,},
    {name: 'car',description: 'car',price: 500000000,}
  ]
filteredProducts: Product[] =this.product;

  searchProduct(text:string){
    this.filteredProducts = this.product.filter(products =>{
      const productName = products.name.toLocaleLowerCase()
      const searchName = text.toLocaleLowerCase();
      return productName.indexOf(searchName) !== -1;
    })
  }
// ---------------

// Shopping search + API
  product2: Product2[] = [];
  filteredProducts2: Product2[] = this.product2;

  constructor(private http:HttpClient){
    this.http.get<Product2[]>('/api/product').subscribe((response) =>{
      this.product2 = response;
      this.filteredProducts2 = this.product2;
    });
  }
  searchProduct2(text:string){
    this.filteredProducts2 = this.product2.filter(products2 =>{
      const productName2 = products2.name.toLocaleLowerCase()
      const searchName2 = text.toLocaleLowerCase();
      return productName2.indexOf(searchName2) !== -1;
    })
  }
// ---------------
}

