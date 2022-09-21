import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Locataire} from "../Model/locataire";

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  constructor(private httpClient:HttpClient) { }
  private url="http://localhost:8000/locataire/";
  private endPoint = "";

  getLocataire():Observable<any>{
    return this.httpClient.get(this.url);
  }
  getNlocataire():Observable<any>{
    this.endPoint = "getNlocataire"
    return this.httpClient.get(this.url+this.endPoint);
  }
  addLocataire(data:Locataire):Observable<any>{
    this.endPoint="add"
    return this.httpClient.post(this.url+this.endPoint,data);
  }

  deleteLocataire(id:any):Observable<any>{
    return this.httpClient.delete(this.url+id)
  }

  locataireGetById(id:any):Observable<any>{
    this.endPoint = id;
    return this.httpClient.get(this.url+this.endPoint);
  }

  EditLocataire(data:any, id:any):Observable<any>{
    return this.httpClient.put(this.url+id,data);
  }
}
