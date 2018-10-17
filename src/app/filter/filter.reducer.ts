import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtroValidos = 'todos';

export function filtroReducer (state = estadoInicial, action: fromFiltro.acciones) {
  switch (action.type) {
      case fromFiltro.SET_FILTRO:
        return action.filtro;
        default:
        return state;
  }
}
