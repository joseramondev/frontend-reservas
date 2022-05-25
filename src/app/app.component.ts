import { Component } from '@angular/core';
import { Reserva } from './interfaces/Reserva';

import { ReservaService } from './services/reserva.service';
import { faDownload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-front';
  download = faDownload;
  search = faMagnifyingGlass;
  alert: string = '';
  reservas: Reserva[] = [];
  reserva: Reserva | undefined;
  isAlertVisible: boolean = false;
  isModalVisible: boolean = false;

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.getReservas().subscribe(
      data => {
        const res = JSON.parse(data).reservas;
        for (let index = 0; index < res.length; index++) {
          const row = res[index].toString().split(',');
          this.reservas.push(new Reserva(row[0], row[1], row[2], row[3], row[4], row[5], row[6]));
        }
      }, error => {
        console.log(error);
      }
    );
  }

  getReservaCriteria(criteria: string) {
    if (criteria != "") {
      criteria = criteria.trim().toLowerCase();
      criteria = criteria.charAt(0).toUpperCase()+criteria.slice(1);
      this.reservaService.buscarPorCriteria(criteria).subscribe(
        data => {
            const row = data['reserva'].toString().split(',');
            this.reserva = new Reserva(row[0], row[1], row[2], row[3], row[4], row[5], row[6]);
            this.isModalVisible = true;
        }, error => {
            console.log(error);
        }
      );
    } else {
      alert('Error, has de insertar un texto');
    }
  }

  getCsvReservas() {
    this.reservaService.getCsvReservas();
    this.isAlertVisible = true;
          this.alert = `El fichero CSV ha sido descargado correctamente en la 
          ubicación: C:\\xampp2\\htdocs\\prueba\\storage\\app\\public\\json`;
  }
}