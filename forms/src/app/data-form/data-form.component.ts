import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nome: [null],
      email: [null]
    });

  }

  onSubmit() {
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

}
