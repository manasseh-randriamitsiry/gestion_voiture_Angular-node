import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "../Model/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpclient:HttpClient) { }

  private url = "http://localhost:8000/location/";
  private endPoint = "";

  getLocation():Observable<any>{
    this.endPoint="get"
    return this.httpclient.get(this.url+this.endPoint);
  }

  createLocation(data:Location):Observable<any>{
    this.endPoint = "add";
    return this.httpclient.post(this.url+this.endPoint,data);
  }

  editLocation(data:any,id:any):Observable<any>{
    this.endPoint = id;
    return this.httpclient.put(this.url+this.endPoint,data);
  }

  locationGetById(data:any):Observable<any>{
    this.endPoint = data;
    return this.httpclient.get(this.url+this.endPoint);
  }

  deleteLocation(id:any):Observable<any>{
    this.endPoint = id;
    return this.httpclient.delete(this.url+this.endPoint);
  }
}
