import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //singleton
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private _snackBar: MatSnackBar,
    private _http: HttpClient) { }

  showMessage(msg: string): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: Product) : Observable<Product> {
    var result = this._http.post<Product> (this.baseUrl, product)
    return result;
  }
 
  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this._http.get<Product>(url)
  }
  
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this._http.put<Product>(url, product)
  }
  
  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this._http.delete<Product>(url)
  }
  
}
