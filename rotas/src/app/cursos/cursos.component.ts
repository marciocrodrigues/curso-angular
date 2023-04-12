import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  subscrition: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.subscrition = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: { 'pagina': this.pagina }
    });
  }

}
