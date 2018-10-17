export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;
  constructor(cadena: string) {
    this.texto = cadena.charAt(0).toUpperCase() + cadena.slice(1);
    this.completado = false;
    this.id = Math.random();
  }
}
