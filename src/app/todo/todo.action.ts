
import { Action } from '@ngrx/store';



 export const AGREGAR_TODO = '[TODO] Agregar todo';
 export const TOGGLE_TODO = '[TODO] cambio el check ';
 export const TEXTO_TODO = '[TODO] cambiar el texto Todo ';
 export const ELIMINAR_TODO = '[TODO] eliminar todo ';
 export const ACTIVARTODOS_TODO = '[TODO] activar todos';

 export const BORRAR_COMPLETADOS = '[TODO] Borrar completados' ;




 export class AgregarTodoAction  implements Action {
    readonly type = AGREGAR_TODO;
    constructor (public texto: string) {
    }
 }

 export class ToogleTodoAction  implements Action {
    readonly type = TOGGLE_TODO;
    constructor (public id: number) {
    }
 }

 export class EditarTextoTodoAction  implements Action {
    readonly type = TEXTO_TODO;
    constructor (public id: number, public texto: string) {
    }
 }

 export class EliminarTodoAction  implements Action {
    readonly type = ELIMINAR_TODO;
    constructor (public id: number) {
    }
 }

 export class ActivarTodosTodoAction  implements Action {
    readonly type = ACTIVARTODOS_TODO;
    constructor (public completado: boolean) {
    }
 }

 export class BorrarCompletadosAction implements Action {
     readonly  type = BORRAR_COMPLETADOS;
     constructor() {}
 }


 export type Acciones = AgregarTodoAction
                          | ToogleTodoAction
                          | EditarTextoTodoAction
                          | EliminarTodoAction
                          | ActivarTodosTodoAction
                          | BorrarCompletadosAction ;

