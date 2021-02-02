import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import {TransferService} from "../ethcontract.service";
const Web3 = require('web3');

declare let require: any;



declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {


  location: any;
  routerSubscription: any;

  public balance: number;

  constructor(cs: TransferService) {
  //  cs.getUserBalance().then(balance => this.balance = balance);
    //cs.addannconce().then(balance => this.balance = balance);
   cs.addAPropertyy("test", "test", 22, "test", "test", true);}


  ngOnInit(){}



}
