import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
isopen:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  OpenForm(){
    this.isopen=!this.isopen;
  }
}
