import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Convocatoria {
  id: number;
  nombre: string;
  deporte: string;
  descripcion: string;
  fecha: string;
  lugar: string;
  favorito: number;
}

export class Usuario{
  id: number;
  nombre: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  correo: string;
  rol: string;
  usuario: string;
  contrasena: string;
}

@Injectable({
  providedIn: 'root'
})

export class ConvocatoriasService {
  endpoint = 'http://127.0.0.1:8080/proyecto-portal-deportivo_server/ConvocatoriaAction';
  endpoint2 = 'http://127.0.0.1:8080/proyecto-portal-deportivo_server/ConvEliminar';
  endpoint3= 'http://127.0.0.1:8080/proyecto-portal-deportivo_server/UsuarioCreate';
  endpoint4= 'http://127.0.0.1:8080/proyecto-portal-deportivo_server/UserEliminar';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getConvs(): Observable<Convocatoria[]> {
    return this.httpClient.get<Convocatoria[]>(this.endpoint)
      .pipe(
        tap(Convocatorias => console.log('Users retrieved!')),
        catchError(this.handleError<Convocatoria[]>('Get user', []))
      );
  }

 getUsers(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.endpoint3)
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<Usuario[]>('Get user', []))
      );
  }

  updateConv(id, fav): Observable<any> {
    console.log("idd es "+id);
    const data = {
      id: id,
      favorito: fav
    };

    return this.httpClient.post(this.endpoint, data, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Conv updated: ${id}`)),
        catchError(this.handleError<Convocatoria[]>('Update Conv'))
      );
  }

  deleteConv(id): Observable<Convocatoria[]> {
    return this.httpClient.get<Convocatoria[]>(this.endpoint2 + '?id=' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Convocatoria deleted: ${id}`)),
        catchError(this.handleError<Convocatoria[]>('Delete Convocatoria'))
      );
  }

  deleteUser(id): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.endpoint4 + '?id=' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`user deleted: ${id}`)),
        catchError(this.handleError<Usuario[]>('Delete Convocatoria'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
