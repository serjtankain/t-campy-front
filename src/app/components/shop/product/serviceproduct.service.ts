import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {product} from "src/app/models/product";

@Injectable({
  providedIn: 'root'
})
export class ServiceproductService {

  private baseUrl = "http://localhost:8089/t-campy/produit/";

  constructor(private http: HttpClient) { }

  deleteProduct(Product:product): Observable<product[]>{
    return this.http.delete<product[]>(this.baseUrl+"/"+Product.id);
  }
  getProducts(){
    return this.http.get<product[]>(this.baseUrl+"retrieve-all-Produits")
  }
  addProduct(Product:product){
    return this.http.post(this.baseUrl,Product)
  }
  updateProduct(Product:product){
    return this.http.put<product>(this.baseUrl+"/"+Product.id,Product)
  }
  getProductById(id: number) {
    const params = new HttpParams().set('id', id);
    return this.http.get<product>(this.baseUrl+"retrieve-Produit/"+id);
  }
getProduitByCathegory(category:string){
  return this.http.get<product[]>(this.baseUrl+"retrieve-ProduitByCategory/"+category);
}


}
