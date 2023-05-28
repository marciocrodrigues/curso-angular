import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Endereco } from '../models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  viacep = '//viacep.com.br/ws/@cep/json/';

  constructor(
    private http: HttpClient
  ) { }

  consultarCep(cep: string): Observable<Endereco> | undefined {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http.get<Endereco>(this.viacep.replace('@cep', cep));
      }
    }

    return undefined;
  }
}
