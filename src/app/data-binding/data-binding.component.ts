import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/id/237/200/300';
  article: string = 'input-output-properties';
  valorAtual: string = '';
  valorSalvo: string = '';
  valorFocus: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  };

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onBlur(value: string) {
    this.valorFocus = value;
  }

  salvarValor(value: string) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
