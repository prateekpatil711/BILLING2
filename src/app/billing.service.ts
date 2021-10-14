import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl : string = "http://localhost:8080";

  constructor(private httpclient: HttpClient) { }

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




  getAllProduct(callback) {
    this.httpclient.get(this.baseUrl+"/product/")
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }


  postProduct(product,callback) {
    this.httpclient.post(this.baseUrl+"/product/",product)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  updateProduct(product,callback) {
    this.httpclient.put(this.baseUrl + "/product/" + product.slno, product)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  deleteProduct(slno : number,callback){
    let url : string = this.baseUrl+"/product/"+slno;
    console.log(url);
    this.httpclient.delete(url)
      .subscribe((retval)=>{
        callback(retval);
      });
  }
}
