import { BooksInterface } from './../interfaces/books.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) { }

  public get({page = 1, search = ''}): Observable<BooksInterface> {
    return this.http.get<BooksInterface>(`https://gutendex.com/books/?page=${page}&search=${search}`);
  }
}
