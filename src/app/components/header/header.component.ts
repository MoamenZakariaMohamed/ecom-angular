import { CartService } from './../../services/cart.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() public darkTheme=false
  public totalPrudect:number=0;
public searchTerm !: string;

  constructor(private cartService:CartService) { }
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalPrudect=res.length
    })
  }
  toggleDarkTheme():void{
    
    document.body.classList.toggle('dark-theme');
    this.darkTheme=!this.darkTheme;

  }
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
