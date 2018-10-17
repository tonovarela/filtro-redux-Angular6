import { Pipe, PipeTransform } from '@angular/core';
 import * as fromFiltro from './filter.actions';
import { Todo } from '../todo/model/todo.model';
@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtroValidos): Todo[] {
    switch (filtro) {
    case 'completados':
    return todos.filter(todo =>  todo.completado );
    case 'pendientes':
    return todos.filter(todo =>  !todo.completado );
    case 'todos':
    return todos;
    default:
    return todos;
    }
  }

}
