import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

    getData() {
      return this.http.get<any>('assets/data.json');//http:localhost:/api/get-data
  }
}
