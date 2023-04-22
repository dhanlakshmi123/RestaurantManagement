import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  inserturl = "http://localhost:9001/insertrecord";
  updateurl = "http://localhost:9001/updaterecord";
  deleteurl = "http://localhost:9001/deleterecord";
  viewurl = "http://localhost:9001/viewrecord";

 constructor(private h1 : HttpClient) { }

  insertservice(data:any)
  {
    return this.h1.post(this.inserturl,data);
  }

  updateservice(data:any)
  {
    return this.h1.post(this.updateurl,data);
  }

  deleteservice(data:any)
  {
    return this.h1.post(this.deleteurl,data);
  }

  viewservice()
  {
    return this.h1.get(this.viewurl);
  }
}