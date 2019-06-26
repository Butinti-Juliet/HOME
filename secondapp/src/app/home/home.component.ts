import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Name:string;
  Surname:String;
  Age:Number;

  constructor(private page:Router) {}

  submit()
  {
    this.page.navigateByUrl("about")
  }
  ngOnInit() {
  }

}
