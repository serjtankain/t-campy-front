import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  produrl=environment.baseUrl+"Produit"
  getProducts():Observable<any>{
    return this.http.get(this.produrl+'/retrieve-all-Products')
  }  
  addProductToCart(product:product):Observable<any>{    
      const url = `${this.produrl}/add-product-to-cart`;
      return this.http.post(url, product);
  }
  }

