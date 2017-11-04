import {User} from "./user";

export class Ride {
  _id: String;
  title: String;
  description: String;

  departing_from: String;
  arriving_at: String;
  meeting_location: String;

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
