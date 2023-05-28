import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Endereco } from '../shared/models/endereco.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdownService,
    private cepService: ConsultaCepService
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

    this.dropDownService.getEstadosBr().subscribe({
      next: (dados) => {
        console.log(dados)
      }
    });

  }

  onSubmit() {

    if (this.formulario.valid) {
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
    } else {
      this.verificarValidacoesform(this.formulario);
    }
  }

  verificarValidacoesform(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();

      if (controle instanceof FormGroup) {
        this.verificarValidacoesform(controle);
      }
    });
  }

  resetarFormulario() {
    this.formulario.reset();
  }

  verificarValidTouched(campo: string, tipoErro: string = '') {

    const campoForm = this.formulario.get(campo);

    if (!this.validarIsNullUndefinedEmpty(tipoErro)) {
      return campoForm?.invalid && (campoForm?.touched || campoForm?.dirty) && campoForm?.errors?.[tipoErro];
    } else {
      return campoForm?.invalid && (campoForm?.touched || campoForm?.dirty);
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
    const cep = this.formulario.get('endereco.cep')?.value;

    if (cep !== '' && cep !== undefined && cep !== null) {
      this.cepService.consultarCep(cep)?.subscribe({
        next: (data) => {
          this.populaDadosForm(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Consulta de cep finalizada');
        }
      })
    }
    
  }

  populaDadosForm(dados: Endereco) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetarFormularioEndereco() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
