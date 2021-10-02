import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1000
    },
    {
      nombre: 'Vegueta',
      poder: 500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { }

  agregarPersonajes( data: Personaje): void {
    this._personajes.push( data );
  }
}
