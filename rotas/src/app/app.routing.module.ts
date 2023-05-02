import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";

const appRoutes: Routes = [
    // lazy loading do modulo de cursos
    { path: 'cursos', 
      loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
    },
    { path: 'alunos', 
      loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard]
      // canActivateChild: [AlunosGuard]
    },
    // lazy loading do modulo de cursos

    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}