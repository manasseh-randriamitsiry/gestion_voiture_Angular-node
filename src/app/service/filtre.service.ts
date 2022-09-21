import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fil} from "../Model/filtre";

@Injectable({
  providedIn: 'root'
})
export class FiltreService {

  constructor(private httpclient:HttpClient) { }

  private url = "http://localhost:8000/filter/";
  private endPoint = "";

  filtreData(data:Fil):Observable<any>{
    this.endPoint="recherche";
    return this.httpclient.post(this.url+this.endPoint,data);
  }
  filtreDataGet():Observable<any>{
    this.endPoint="get";
    return this.httpclient.get(this.url+this.endPoint);
  }
  filtreEffectifDate(data:Fil):Observable<any>{
    this.endPoint="effectif";
    return this.httpclient.post(this.url+this.endPoint,data);
  }
  filtreEffectif():Observable<any>{
    this.endPoint="effectif";
    return this.httpclient.get(this.url+this.endPoint);
  }
  getTotalLocation(data:Fil):Observable<any>{
    this.endPoint="total";
    return this.httpclient.post(this.url+this.endPoint,data);
  }
  getTotalLocationGet():Observable<any>{
    this.endPoint="get_total";
    return this.httpclient.get(this.url+this.endPoint);
  }

  getCountLocation():Observable<any>{
    this.endPoint="totalLocation";
    return this.httpclient.get(this.url+this.endPoint);
  }

  getCountVoiture():Observable<any>{
    this.endPoint="totalVoiture";
    return this.httpclient.get(this.url+this.endPoint);
  }

  getCountLocataire():Observable<any>{
    this.endPoint="totalLocataire";
    return this.httpclient.get(this.url+this.endPoint);
  }
}
