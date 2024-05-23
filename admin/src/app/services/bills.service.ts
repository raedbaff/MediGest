import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http:HttpClient) { }
  public getallbills(){
    return this.http.get(`http://127.0.0.1:8088/Bill/all`)
  }
}
