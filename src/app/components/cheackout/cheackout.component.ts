import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-cheackout',
  templateUrl: './cheackout.component.html',
  styleUrls: ['./cheackout.component.css']
})
export class CheackoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onPay(){
    this.router.navigate([''])
  }
}
