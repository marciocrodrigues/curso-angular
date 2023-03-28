import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[]; 

  constructor(
    private readonly cursoService: CursosService
  ) { 
    this.nomePortal = 'http://loaine.training';
    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit() {
  }

}
