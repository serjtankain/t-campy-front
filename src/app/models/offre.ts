import { Group } from "./group"

export class Offre {
  id!:number
  titre!:string
  description!:string
  nombreManquant!:number
  group!:Group
}
