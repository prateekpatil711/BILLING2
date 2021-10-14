import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.component.html',
  styleUrls: ['./invoicedetail.component.css']
})
export class InvoicedetailComponent implements OnInit {


  invoice: {id : number , dist : number , pincode : number,gstno : string, doo : string, dod : string , buyer: string , citysupply : string , vehicleno : string};
  invoiceList : {id : number , dist : number , pincode : number,gstno : string, doo : string, dod : string , buyer: string , citysupply : string , vehicleno : string}[];
  

  constructor(private service : InvoiceService) {
    this.invoice = {id : 0 , dist : 0 , pincode : 0,gstno : "", doo : "", dod : "" , buyer: "" , citysupply : "" , vehicleno : ""};
     this.service.getAllInvoice((value)=>{
      this.invoiceList = value;
      console.log(this.invoiceList);
    });
  }

  ngOnInit() : void {

  }

  onPreview(id : number) {
  }


  onGetData() {
    this.service.getAllInvoice((value)=>{
      this.invoiceList = value;
    });
  }

  onSubmit(data) {
    this.service.postInvoice(data.value,(value)=>{
      this.invoiceList = value;
    });
  }

  onModify(data) {
    this.invoice = data;
  }

  onModifySave() {
    this.service.updateInvoice(this.invoice,(value)=>{
      this.invoice = value;
      console.log(this.invoice);
    });
  }

  onDelete(invno : number) {
    this.service.deleteInvoice(invno,(value)=>{
      this.invoiceList = value;
    });
  }

}
