import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { FormsModule } from "@angular/forms";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunosDetalheResolver } from "./guards/alunos-detalhe.resolver";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [
        AlunosRoutingModule
    ],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [
        AlunosService,
        AlunosDeactivateGuard,
        AlunosDetalheResolver
    ]
})

export class AlunosModule {}