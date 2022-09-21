import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voiture} from "../Model/voiture"; // ato no nasiako anle classe

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private httpclient:HttpClient) { }

  private url = "http://localhost:8000/voiture/";
  private endPoint = "";

  getVoiture():Observable<any>{
    this.endPoint="get"
    return this.httpclient.get(this.url+this.endPoint);
  }
  getNvoiture():Observable<any>{
    this.endPoint="getNvoiture"
    return this.httpclient.get(this.url+this.endPoint);
  }

  CreateVoiture(data:Voiture):Observable<any>{
    this.endPoint = "add";
    return this.httpclient.post(this.url+this.endPoint,data);
  }

  EditVoiture(data:any,id:any):Observable<any>{
    this.endPoint = id;
    return this.httpclient.put(this.url+this.endPoint,data);
  }

  VoitureGetById(data:any):Observable<any>{
    this.endPoint = data;
    return this.httpclient.get(this.url+this.endPoint);
  }

  deleteVoiture(id:any):Observable<any>{
    this.endPoint = id;
    return this.httpclient.delete(this.url+this.endPoint);
  }
}
