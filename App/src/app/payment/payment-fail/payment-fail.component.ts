import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment-fail.component.html',
  styleUrls: ['./payment-fail.component.css']
})
export class PaymentFailComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);  //5s
  }

}
