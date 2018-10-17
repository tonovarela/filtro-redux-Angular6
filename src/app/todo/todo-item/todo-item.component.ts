import { ToogleTodoAction, EditarTextoTodoAction, EliminarTodoAction } from './../todo.action';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
 @Input() todo: Todo;
 chkfield: FormControl;
 txtInput: FormControl;
 editando: boolean;
 @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    this.chkfield = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkfield.valueChanges.subscribe( () => this.store.dispatch(new ToogleTodoAction(this.todo.id)));
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion() {
    this.editando = false;
    if (this.todo.texto.length === 0) {
      return;
    }
    console.log(this.txtInput.value);
    this.store.dispatch(new EditarTextoTodoAction(this.todo.id, this.txtInput.value));
  }
  terminar() {
    this.terminarEdicion();
  }
  eliminar() {
    console.log('Eliminar tarea');
    this.store.dispatch(new EliminarTodoAction(this.todo.id));
  }


}
