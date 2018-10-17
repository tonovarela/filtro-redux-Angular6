import { SetFiltroAction } from './../../filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { BorrarCompletadosAction } from '../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  pendientes: number;
   filtrosValidos: fromFiltro.filtroValidos[] = ['todos', 'completados', 'pendientes'];
   filtroActual: fromFiltro.filtroValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    } );
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtroValidos) {
    console.log('Filtros validos');
    this.store.dispatch(new SetFiltroAction(nuevoFiltro));
  }

  contarPendientes (todos: Todo[]) {
   this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  borrarCompletados() {
    this.store.dispatch(new BorrarCompletadosAction());
    console.log('borrar completados');
  }

}
