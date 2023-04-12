import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { AlunoModel } from '../models/aluno.model';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  aluno: any;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {
            id: 0,
            nome: '',
            email: ''
          };
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
