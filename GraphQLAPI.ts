/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookingInput = {
  id?: string | null,
  room: string,
  bookedByUser: string,
  title: string,
  attendees?: Array< string | null > | null,
  start: string,
  end: string,
};

export type ModelBookingConditionInput = {
  room?: ModelStringInput | null,
  bookedByUser?: ModelStringInput | null,
  title?: ModelStringInput | null,
  attendees?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateBookingInput = {
  id: string,
  room?: string | null,
  bookedByUser?: string | null,
  title?: string | null,
  attendees?: Array< string | null > | null,
  start?: string | null,
  end?: string | null,
};

export type DeleteBookingInput = {
  id?: string | null,
};

export type CreateRoomInput = {
  id?: string | null,
  name: string,
  hasScreen: boolean,
  numberOfPeople: string,
  disabledAccess?: boolean | null,
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null,
  hasScreen?: ModelBooleanInput | null,
  numberOfPeople?: ModelStringInput | null,
  disabledAccess?: ModelBooleanInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  hasScreen?: boolean | null,
  numberOfPeople?: string | null,
  disabledAccess?: boolean | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  password: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  password?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  room?: ModelStringInput | null,
  bookedByUser?: ModelStringInput | null,
  title?: ModelStringInput | null,
  attendees?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  hasScreen?: ModelBooleanInput | null,
  numberOfPeople?: ModelStringInput | null,
  disabledAccess?: ModelBooleanInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking:  {
    __typename: "Booking",
    id: string,
    room: string,
    bookedByUser: string,
    title: string,
    attendees: Array< string | null > | null,
    start: string,
    end: string,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking:  {
    __typename: "Booking",
    id: string,
    room: string,
    bookedByUser: string,
    title: string,
    attendees: Array< string | null > | null,
    start: string,
    end: string,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking:  {
    __typename: "Booking",
    id: string,
    room: string,
    bookedByUser: string,
    title: string,
    attendees: Array< string | null > | null,
    start: string,
    end: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    hasScreen: boolean,
    numberOfPeople: string,
    disabledAccess: boolean | null,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    hasScreen: boolean,
    numberOfPeople: string,
    disabledAccess: boolean | null,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    hasScreen: boolean,
    numberOfPeople: string,
    disabledAccess: boolean | null,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking:  {
    __typename: "Booking",
    id: string,
    room: string,
    bookedByUser: string,
    title: string,
    attendees: Array< string | null > | null,
    start: string,
    end: string,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    hasScreen: boolean,
    numberOfPeople: string,
    disabledAccess: boolean | null,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name: string,
      hasScreen: boolean,
      numberOfPeople: string,
      disabledAccess: boolean | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      password: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking:  {
    __typename: "Booking",
    id: string,
    room: string,
    bookedByUser: string,
    title: string,
    attendees: Array< string | null > | null,
    start: string,
    end: string,
  } | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking:  {
    __typename: "Booking",
    id: string,
    room: string,
    bookedByUser: string,
    title: string,
    attendees: Array< string | null > | null,
    start: string,
    end: string,
  } | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking:  {
    __typename: "Booking",
    id: string,
    room: string,
    bookedByUser: string,
    title: string,
    attendees: Array< string | null > | null,
    start: string,
    end: string,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    hasScreen: boolean,
    numberOfPeople: string,
    disabledAccess: boolean | null,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    hasScreen: boolean,
    numberOfPeople: string,
    disabledAccess: boolean | null,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    hasScreen: boolean,
    numberOfPeople: string,
    disabledAccess: boolean | null,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    password: string,
    bookings:  Array< {
      __typename: "Booking",
      id: string,
      room: string,
      bookedByUser: string,
      title: string,
      attendees: Array< string | null > | null,
      start: string,
      end: string,
    } | null > | null,
  } | null,
};
