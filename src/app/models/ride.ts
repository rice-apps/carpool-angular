import {User} from "./user";

export class Ride {
  _id: string;
  departing_from: String;
  departing_datetime: Date;
  arriving_at: String;
  meeting_location: String;
  number_riders: String;

  // number_of_riders: Number;

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
  title: String;
  description: String;
  riders: User[];
}
