import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {product} from "src/app/models/product";

@Injectable({
  providedIn: 'root'
})
export class ServiceproductService {

  private baseUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  deleteProduct(Product:product): Observable<product[]>{
    return this.http.delete<product[]>(this.baseUrl+"/"+Product.id);
  }
  getProducts(){
    return this.http.get<product[]>(this.baseUrl)
  }
  addProduct(Product:product){
    return this.http.post(this.baseUrl,Product)
  }
  updateProduct(Product:product){
    return this.http.put<product>(this.baseUrl+"/"+Product.id,Product)
  }
  getProductById(id: number) {
    const params = new HttpParams().set('id', id);
    return this.http.get<product>(this.baseUrl, { params });
  }

}
