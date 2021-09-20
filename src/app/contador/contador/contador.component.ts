import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>{{ base }}</strong></h3>

    <button (click)="calcular(-base)">- {{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="calcular(base)">+ {{ base }}</button>
  `
})

export class ContadorComponent {
  titulo: string = 'Contador';
  numero: number = 10;
  base: number = 5;

  calcular( valor: number ) {
    this.numero += valor;
  }
}
