import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    
    this.formulario = this.formBuilder.group({
      nome: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(120)
      ]],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

  }

  onSubmit() {
    if (this.formulario.invalid) {
      console.log(this.formulario);
      return;
    }
    
    const param = this.formulario.getRawValue();

    this.http.post('http://httpbin.org/post', JSON.stringify(param))
      .pipe(map(res => res))
      .subscribe({
        next: (dados: any) => {
          if (dados && dados.json) {
            window.alert(JSON.stringify(dados.json));
            this.resetarFormulario();
          }
        },
        error: (erro: any) => {
          console.log(erro);
        },
        complete: () => {
          console.log('requisição finalizada!!!');
        }
      });
  }

  resetarFormulario() {
    this.formulario.reset();
  }

  verificarValidTouched(campo: string, tipoErro: string = '') {

    const campoForm = this.formulario.get(campo);

    if (!this.validarIsNullUndefinedEmpty(tipoErro)) {
      return campoForm?.invalid && campoForm?.touched && campoForm?.errors?.[tipoErro];
    } else {
      return campoForm?.invalid && campoForm?.touched;
    }
  }

  validarIsNullUndefinedEmpty(valor: any) {
    
    if (typeof valor === 'string'){
      return  valor === undefined || valor === null || valor.length === 0;
    } else {
      return valor === undefined || valor === null;
    }
  }

  consultaCEP() {

  }

}
