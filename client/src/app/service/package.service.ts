import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/Constants";
import {Package} from "../model/Package";
import {ResponseData} from "../model/ResponseData";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private  http: HttpClient) {}

  getAll(){
    return this.http.get<Package[]>(Constants.PACKAGES_API+'all')
  }

  getById(id: number){
    return this.http.get<Package>(Constants.PACKAGES_API+id);
  }

  add(id: number){
    return this.http.post<ResponseData>(Constants.PACKAGES_API+id, null);
  }

  delete(id: number){
    return this.http.post(Constants.PACKAGES_API+id+'/delete', null)
  }


}
