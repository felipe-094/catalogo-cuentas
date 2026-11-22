export type Naturaleza = 'DEBITO' | 'CREDITO';
export type Nivel = 'CLASE' | 'GRUPO' | 'CUENTA' | 'SUBCUENTA';

export const LONGITUDES = [1, 2, 4, 6];
const NIVELES: Record<number, Nivel> = { 1: 'CLASE', 2: 'GRUPO', 4: 'CUENTA', 6: 'SUBCUENTA' };

export function codigoPadreDe(codigo: string): string | null {
  const i = LONGITUDES.indexOf(codigo.length);
  return i <= 0 ? null : codigo.slice(0, LONGITUDES[i - 1]);
}

export class Cuenta {
  constructor(
    readonly codigo: string,
    readonly nombre: string,
    readonly naturaleza: Naturaleza,
  ) {}

  get nivel(): Nivel {
    return NIVELES[this.codigo.length];
  }

  get codigoPadre(): string | null {
    return codigoPadreDe(this.codigo);
  }
}