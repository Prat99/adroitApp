
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseApi } from '../config/config';
import { Users, Posts, Comments } from '../../shared/models/models';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class HttpService {
    baseApi: { url: string };
    token: string;
    constructor(private readonly http: HttpClient) {
        this.baseApi = baseApi;
    }

    getUsers(): Observable<Users[]> {
        return this.http
            .get<Users[]>(`${this.baseApi.url}users`, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    getPosts(): Observable<Posts[]> {
        return this.http
            .get<Posts[]>(`${this.baseApi.url}posts`, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    getComments(): Observable<Comments[]> {
        return this.http
            .get<Comments[]>(`${this.baseApi.url}comments`, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}
