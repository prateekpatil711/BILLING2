import { Component, OnInit } from '@angular/core';
import { InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-detailentry',
  templateUrl: './detailentry.component.html',
  styleUrls: ['./detailentry.component.css']
})
export class DetailentryComponent implements OnInit {

  invoiceNum : number;
  productNum : number;

  value : {id : number, slno : number, prod : string, hsn : string , gst : string , nosset : string , quantity : number, rate : number , amount  : number };
  
  billing: {id : number , dist : number , pincode : number,gstno : string, doo : string, dod : string , buyer: string , citysupply : string , vehicleno : string};
  billingList : {id : number , dist : number , pincode : number,gstno : string, doo : string, dod : string , buyer: string , citysupply : string , vehicleno : string}[];
  
  product : {id : number, slno : number, prod : string, hsn : string , gst : string , nosset : string , quantity : number, rate : number , amount  : number };
  productList : {id : number, slno : number, prod : string, hsn : string, gst : string , nosset : string , quantity : number, rate : number , amount  : number }[];
 
  constructor(private service : InvoiceService) {
    this.billing = {id : 0 , dist : 0 , pincode : 0,gstno : "", doo : "", dod : "" , buyer: "" , citysupply : "" , vehicleno : ""};
    this.product = {id : 0 ,slno : 0, prod : "", hsn : "" , gst : "" , nosset : "",quantity : 0, rate : 0 , amount  : 0};
    this.onGetData();
  }

  ngOnInit(): void {


  }

  onSubmit(data) {
    this.service.postInvoice(data.value,(value)=>{
      this.billingList = value;
      this.invoiceNum = value.id;
      console.log(this.invoiceNum);
    });
  }

  onModify(data) {
    this.billing = data;
  }

  onModifySave() {
    this.service.updateInvoice(this.billing,(value)=>{
      this.billing = value;
      console.log(this.billing);
    });
  }





  onGetData() {
    this.service.getAllProduct(this.invoiceNum,(value)=>{
      console.log("entry");
      this.productList = value;
      console.log(this.productList);
    });
  }

  onSubmitProd(data) {
    this.service.postProduct(this.invoiceNum,data.value,(value)=>{
      this.productList = value;
    });
  }
  
  onModifyProd(data) {
    this.product = data;
    this.productNum = this.product.id;
  }

  onModifySaveProd() {
    this.service.updateProduct(this.invoiceNum,this.productNum,this.product,()=>{ 
      this.product=this.product;
    });
  }

  onDeleteProd(x : number) {
    this.service.deleteProduct(this.invoiceNum,x,(value)=>{
      this.productList = value;
    });
  }


  
}
