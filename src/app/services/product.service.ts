import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {productsUrl} from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    // TODO:  Populate products from an API and return an Observable
    return this.http.get<Product[]>(productsUrl);
  }
}
