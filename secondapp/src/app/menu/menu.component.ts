import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  click1()
  {
    this.router.navigateByUrl("")
  }
  click2()
  {
    this.router.navigateByUrl("about")
  }
  click3()
  {
    this.router.navigateByUrl("contact")
  }
 click4()
 {
   this.router.navigateByUrl("feedback")
 }

  ngOnInit() {
  }

}
