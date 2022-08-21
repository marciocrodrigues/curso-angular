import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {
  // Dentro do input pode ser colocado o nome da propriedade assim podendo colocar outro nome para a variavel usada internamente
  // dentro do componente, não precisando alterar a propriedade onde o componente está sendo utilizado
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
