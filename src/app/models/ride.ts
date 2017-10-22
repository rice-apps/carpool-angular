import {User} from "./user";

export class Ride {
  title: String;
  description: String;
  cost: Number;
  spots: Number;
  vehicle_type: String;
  departure_time: Date;
  arrival_time: Date;
  departure_address: String;
  arrival_address: String;
  departure_location: Number[];
  arrival_location: Number[];
  owner: User;
  riders: User[];
}
