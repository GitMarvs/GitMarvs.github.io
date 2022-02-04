import { Component, OnInit } from '@angular/core';
declare var myFunction:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
   
   
  }
  test(){
    new myFunction();

  }


}
