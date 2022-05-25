export class  Reserva {
    idLocalizador: string | undefined;
    huesped: string | undefined;
    fechaEntrada: Date | undefined;
    fechaSalida: Date | undefined;
    hotel: string | undefined;
    precio: number | undefined;
    acciones: string | undefined;

    Reserva() {}
    
    constructor(idLocalizador:string, huesped:string, fechaEntrada: Date, 
        fechaSalida: Date, hotel: string, precio: number, acciones: string) {
        this.idLocalizador=idLocalizador;
        this.huesped=huesped;
        this.fechaEntrada=fechaEntrada;
        this.fechaSalida=fechaSalida;
        this.hotel=hotel;
        this.precio=precio;
        this.acciones=acciones;
     }
}
