import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { AlunoModel } from '../models/aluno.model';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno?: AlunoModel;
  subsscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }
  
  ngOnInit(): void {
    this.subsscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    )
  }

  ngOnDestroy(): void {
    this.subsscription.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }

}
