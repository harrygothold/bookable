export interface IRoom {
  name: string;
  id: string;
  numberOfPeople: string;
  disabledAccess: boolean;
  hasScreen: boolean;
  bookings?: string;
}
