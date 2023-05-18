import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form)
    console.log(this.usuario)
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

}
