import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

class Endereco {
  logradouro?: string;
  bairro?: string;
  cep: string;
  localidade: string;
  uf: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    cep: null,
    numero: null,
    complemento: null,
    rua: null,
    bairro: null,
    cidade: null,
    estado: null
  }

  viacep = '//viacep.com.br/ws/@cep/json/';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm) {
    const campos = formulario.form.getRawValue();
    console.log(campos);
  }

  verificarValidTouched(campo: NgModel, tipoErro: string = '') {

    if (!this.validarIsNullUndefinedEmpty(tipoErro)) {
      return !campo.valid && campo.touched && campo.errors?.[tipoErro];
    } else {
      return !campo.valid && campo.touched;
    }
  }

  validarIsNullUndefinedEmpty(valor: any) {
    
    if (typeof valor === 'string'){
      return  valor === undefined || valor === null || valor.length === 0;
    } else {
      return valor === undefined || valor === null;
    }
  }

  consultaCEP(cep: string, formulario: NgForm) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http.get<Endereco>(this.viacep.replace('@cep', cep))
        .subscribe({
          next: (data) => {
            this.resetarFormulario(formulario);
            this.populaDadosForm(data, formulario);
          },
          error: (data) => {
            console.log(data);
          },
          complete: () => console.log('consulta finalizada!')
        });
      }
    }
  }

  populaDadosForm(dados: Endereco, formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetarFormulario(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
