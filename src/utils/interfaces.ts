export interface IRoom {
  name: string;
  id: string;
  numberOfPeople: string;
  disabledAccess: boolean;
  hasScreen: boolean;
  bookings?: object;
}

export interface IBooking {
  room: string;
  bookedByUser: string;
  title: string;
  attendees?: string[];
  start: string;
  end: string;
}
