import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Reserva } from '../interfaces/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private HTTPOptions: Object | undefined;

  constructor(private http: HttpClient) { 
    this.HTTPOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'
    }
  }

  getReservas(): Observable<any> {
    return this.http.get<Reserva[]>(`${environment.url}/reservas`, this.HTTPOptions);
  }

  buscarPorCriteria(criteria: String): Observable<any> {
    return this.http.get<Reserva>(`${environment.url}/reserva/${criteria}`);
  }

  getCsvReservas() { console.log(`${environment.url}/export-reservas-json`)
    window.open(`${environment.url}/export-reservas-json`);
  }
}
