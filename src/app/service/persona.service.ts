import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_JEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://pintegradorarc.herokuapp.com/persona/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');

  }
}
