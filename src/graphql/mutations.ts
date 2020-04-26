/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      room
      bookedByUser
      title
      attendees
      start
      end
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      room
      bookedByUser
      title
      attendees
      start
      end
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      room
      bookedByUser
      title
      attendees
      start
      end
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      hasScreen
      numberOfPeople
      disabledAccess
      bookings {
        id
        room
        bookedByUser
        title
        attendees
        start
        end
      }
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      hasScreen
      numberOfPeople
      disabledAccess
      bookings {
        id
        room
        bookedByUser
        title
        attendees
        start
        end
      }
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      hasScreen
      numberOfPeople
      disabledAccess
      bookings {
        id
        room
        bookedByUser
        title
        attendees
        start
        end
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      bookings {
        id
        room
        bookedByUser
        title
        attendees
        start
        end
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      bookings {
        id
        room
        bookedByUser
        title
        attendees
        start
        end
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      password
      bookings {
        id
        room
        bookedByUser
        title
        attendees
        start
        end
      }
    }
  }
`;
