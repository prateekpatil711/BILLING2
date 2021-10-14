import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }


  view : string ='invoice'

  onClick(val : string) : void {
    this.view = val;
  }
}
