import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CursosService {
    cursos: string[] = ['Angular 2', 'Java', 'C#', 'Javascript', '.NET 6'];
    
    constructor() {
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    setCursos(curso: string) {
        this.cursos.push(curso);
    }
}