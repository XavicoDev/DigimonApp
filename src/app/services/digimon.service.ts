import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  private apiUrl = 'https://digi-api.com/api/v1/digimon';
  private apiUrlSearch = 'https://digi-api.com/api/v1/digimon';

  constructor(private http: HttpClient) { }

  // async getDigimons(pageSize: number): Promise<any[]> {
  //   const url = `${this.apiUrl}?pageSize=${pageSize}`;
  //   try {
  //     const response = await this.http.get<any[]>(url).toPromise();
  //     // Verificar si la respuesta es undefined o null y devolver un array vacío en ese caso
  //     return response || [];
  //   } catch (error) {
  //     console.error('Error al obtener los Digimons:', error);
  //     throw error; // Propagar el error para manejarlo en el componente que llama a este método
  //   }
  // }

  getDigimons(pageSize: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?pageSize=${pageSize}`);
  }

  getDigimon(idDigimon: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrlSearch}/${idDigimon}`);
  }
}
