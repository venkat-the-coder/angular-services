import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Reader } from '../model/reader';
import { allReaders } from '../data/data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, observable, throwError } from 'rxjs';
import { Error } from '../model/error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAuthorRecommendations(readerId: number): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (readerId > 0) {
          resolve('super Book');
        } else {
          reject('Invlaid User Id');
        }
      }, 3000);
    });
  }

  constructor(private loggerService: LoggerService, private http: HttpClient) {}

  getAllReaders(): Observable<Reader[] | Error> {
    return this.http
      .get<Reader[]>('/api/readers')
      .pipe(catchError((err: HttpErrorResponse) => this.handleResponse(err)));
  }

  getReaderByID(id: number): Observable<Reader> {
    return this.http.get<Reader>(`api/reader/${id}`);
  }

  handleResponse(err: HttpErrorResponse): Observable<Error> {
    let respone = new Error();
    respone.ErrorNumber = err.status;
    respone.Message = err.message;
    return throwError(respone);
  }
}
