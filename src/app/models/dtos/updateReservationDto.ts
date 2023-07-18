export interface UpdateReservationDto {
    id?: number;
    dateReservation?: Date;
    departureDate?: Date;
    user?: number;
    group?: number;
    localisation?: number;
}