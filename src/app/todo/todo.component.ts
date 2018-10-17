import { ACTIVARTODOS_TODO, ActivarTodosTodoAction } from './todo.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  activarTodos() {
  this.completado = !this.completado;
   this.store.dispatch(new ActivarTodosTodoAction(this.completado));

  }

}
