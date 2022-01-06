import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productsList:any;
public filterCategory : any
  searchKey:string =""

  constructor(private api:ApiService, private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProudects().subscribe(
      res=>{
        this.productsList=res ;
        this.filterCategory=res
        this.productsList.forEach((a:any) => {
          if(a.category ==="women's clothing" || a.category ==="men's clothing"){
            a.category ="fashion"
          }
          Object.assign(a,{quantity:1,total:a.price})
        });
        // console.log(this.productsList)
      });
  
      this.cartService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
  }

  addtoCart(item:any){
    this.cartService.addToCart(item)
  }
  
  filter(category:string){
    this.filterCategory = this.productsList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
