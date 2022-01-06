import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public prudect:any =[]
public finalTotal !:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.prudect=res;
      this.finalTotal=this.cartService.getTotalPrice()
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }
  clearCrt(){
    this.cartService.ClearCart()
  }

}
