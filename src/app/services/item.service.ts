import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {Item} from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3000/items';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  items:Item[] =[
    {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'pera',
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'mora',
      price: 7.5,
      quantity: 1,
      completed: true
    }
  ];
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
    // return this.items;

  }
  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleCompleted(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id,item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }
}
