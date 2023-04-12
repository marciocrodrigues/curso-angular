import { Injectable } from '@angular/core';
import { AlunoModel } from './models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: AlunoModel[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
  ];

  getAlunos(): AlunoModel[] {
    return this.alunos;
  }

  getAluno(id: number): AlunoModel | undefined {
    if (id) {
      const index = this.alunos.findIndex(x => x.id === Number(id));
      if (index >= 0) {
        return this.alunos[index];
      }
    }
  
    return undefined;
  }

  constructor() { }
}
