import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

class EstadosBr {
  
  id: number;
  sigla: string;
  nome: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(
    private http: HttpClient
  ) { }


  getEstadosBr() {
    return this.http.get<EstadosBr>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  }
}
