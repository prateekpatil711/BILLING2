import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl :string = "http://localhost:8080";

  constructor(private httpclient :HttpClient) { }

  getAllInvoice(callback) {
    this.httpclient.get(this.baseUrl+"/billing/")
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  postInvoice(billing,callback) {
    this.httpclient.post(this.baseUrl+"/billing/",billing)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  updateInvoice(billing,callback) {
    this.httpclient.put(this.baseUrl + "/billing/" + billing.invno, billing)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  deleteInvoice(invno : number,callback){
    let url : string = this.baseUrl+"/billing/"+invno;
    console.log(url);
    this.httpclient.delete(url)
      .subscribe((retval)=>{
        callback(retval);
      });
  }











  getAllProduct(invoiceNum,callback) {
    this.httpclient.get(this.baseUrl+"/billing/"+ invoiceNum +"/product" )
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  postProduct(invoiceNum,product,callback) {
    this.httpclient.post(this.baseUrl+"/billing/"+invoiceNum+"/product",product)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  updateProduct(invoiceNum,productNum,product,callback) {
    this.httpclient.put(this.baseUrl + "/billing/" + invoiceNum +"/product/" + productNum, product)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  deleteProduct(invoiceNum,slno : number,callback){
    let url : string = this.baseUrl+"/billing/"+ invoiceNum +"/product/" +slno;
    console.log(url);
    this.httpclient.delete(url)
      .subscribe((retval)=>{
        callback(retval);
      });
  }
  
}
