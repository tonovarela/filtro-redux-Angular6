import * as fromTodo from './todo.action';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a thanos');
const todo2 = new Todo('Salvar al mundo');
const todo3 = new Todo('tintoreria');
todo3.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];
export function todoReducer (state = estadoInicial, accion: fromTodo.Acciones ): Todo[] {
switch (accion.type) {
    case fromTodo.AGREGAR_TODO:
    const todo = new Todo(accion.texto);
    return [...state, todo];  // Clona el arreglo y le agrega un nuevo todo
    case fromTodo.TOGGLE_TODO:
    return state.map(todoEdit => {
       if (todoEdit.id === accion.id) {
           return {
            ...todoEdit,
               completado: !todoEdit.completado
           };
       } else {
           return  todoEdit;
       }
    });

    case fromTodo.TEXTO_TODO:
    return state.map(todoEdit => {
        if (todoEdit.id === accion.id) {
            return {
             ...todoEdit,
                texto: accion.texto
            };
        } else {
            return  todoEdit;
        }
     });

     case fromTodo.ELIMINAR_TODO:
     return state.filter(todoItem => todoItem.id !== accion.id);

     case fromTodo.ACTIVARTODOS_TODO:
        return state.map(todoItem => {
            return {
                ...todoItem,
                completado: accion.completado
            };
        });
    default:
    return state;

    case fromTodo.BORRAR_COMPLETADOS:
       return state.filter(todoItem => !todoItem.completado);
}

}
