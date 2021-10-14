import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceserviceService {

  private baseUrl :string = "http://localhost:8080";

  constructor(private httpclient :HttpClient) { }

  getAllInvoice(callback) {
    this.httpclient.get(this.baseUrl+"/invoice/")
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  postInvoice(invoice,callback) {
    this.httpclient.post(this.baseUrl+"/invoice/",invoice)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  updateInvoice(invoice,callback) {
    this.httpclient.put(this.baseUrl + "/invoice/" + invoice.invno, invoice)
      .subscribe((retvalue)=>{
        callback(retvalue);
      });
  }

  deleteInvoice(invno : number,callback){
    let url : string = this.baseUrl+"/invoice/"+invno;
    console.log(url);
    this.httpclient.delete(url)
      .subscribe((retval)=>{
        callback(retval);
      });
  }
  

}
