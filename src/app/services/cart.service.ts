import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItem:any=[]
public prudectList=new BehaviorSubject<any>([]);
public search = new BehaviorSubject<string>("");

  constructor() { }

  getProducts(){
    return this.prudectList.asObservable();
  }
  setPrudect(product:any){
     this.cartItem.push(...product);
     this.prudectList.next(product);
  }
  addToCart(product:any){
    this.cartItem.push(product);
    this.prudectList.next(this.cartItem);
    this.getTotalPrice()
    console.log(this.cartItem)
  }
  getTotalPrice():number{
    let finalTotal=0;
    this.cartItem.map((a:any)=>{
      finalTotal +=a.total
    })
    return finalTotal;
  }
  removeCartItem(product:any){
    this.cartItem.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItem.splice(index,1)
      }
    })
    this.prudectList.next(this.cartItem)
  }
  ClearCart(){
    this.cartItem=[]
    this.prudectList.next(this.cartItem)
  }
}
