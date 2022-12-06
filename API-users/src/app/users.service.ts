import { InterUsers } from './users';//interface importada do arquivo ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersURL =  'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

   //trazendo os valores de nossa interface com o observable que está no array por um injetavel. Com o observable estamos tornando nossa chamada assíncrona
  ObserUsers(): Observable<InterUsers[]>{
    return this.http.get<InterUsers[]>(this.usersURL);
  }
}
