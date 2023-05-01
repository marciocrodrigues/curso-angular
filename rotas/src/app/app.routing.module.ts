import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    // lazy loading do modulo de cursos
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule) },
    // lazy loading do modulo de cursos

    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}