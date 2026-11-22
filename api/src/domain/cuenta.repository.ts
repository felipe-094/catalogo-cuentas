import { Cuenta } from './cuenta.js';

export interface CuentaRepository {
  guardar(cuenta: Cuenta): Promise<void>;
  buscarPorCodigo(codigo: string): Promise<Cuenta | null>;
  listar(): Promise<Cuenta[]>;
  tieneHijas(codigo: string): Promise<boolean>;
  eliminar(codigo: string): Promise<void>;
}

export const CUENTA_REPOSITORY = Symbol('CUENTA_REPOSITORY');