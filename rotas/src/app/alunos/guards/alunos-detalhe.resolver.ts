import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunosService } from "../alunos.service";
import { AlunoModel } from "../models/aluno.model";

@Injectable({
    providedIn: 'root'
})
export class AlunosDetalheResolver implements Resolve<AlunoModel> {

    constructor(
        private alunosService: AlunosService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<AlunoModel> | Promise<AlunoModel> | any {
        let id = route.params['id'];

        return this.alunosService.getAluno(id);
    }
}