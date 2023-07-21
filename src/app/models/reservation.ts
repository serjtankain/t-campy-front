import { Group } from "./group";
import { localisation } from "./localisation";
import { User } from "./user";

export class Reservation {
    id!:number;
    dateReservation!:Date;
    departureDate!:Date;
    user!:User;
    group!:Group;
    localisation!:localisation;
    
}
