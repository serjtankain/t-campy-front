export class Reservation {
    id!:number;
    dateReservation!:Date;
    departureDate!:Date;
    user!:User;
    group!:Group;
    localisation!:localisation;
}
