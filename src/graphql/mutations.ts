// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      room {
        id
        name
        bookings {
          id
          bookingTime
        }
      }
      bookedByUser {
        id
        name
        email
        password
        bookings {
          id
          bookingTime
        }
      }
      bookingTime
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
      room {
        id
        name
        bookings {
          id
          bookingTime
        }
      }
      bookedByUser {
        id
        name
        email
        password
        bookings {
          id
          bookingTime
        }
      }
      bookingTime
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
      room {
        id
        name
        bookings {
          id
          bookingTime
        }
      }
      bookedByUser {
        id
        name
        email
        password
        bookings {
          id
          bookingTime
        }
      }
      bookingTime
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
      bookings {
        id
        room {
          id
          name
        }
        bookedByUser {
          id
          name
          email
          password
        }
        bookingTime
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
      bookings {
        id
        room {
          id
          name
        }
        bookedByUser {
          id
          name
          email
          password
        }
        bookingTime
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
      bookings {
        id
        room {
          id
          name
        }
        bookedByUser {
          id
          name
          email
          password
        }
        bookingTime
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
        room {
          id
          name
        }
        bookedByUser {
          id
          name
          email
          password
        }
        bookingTime
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
        room {
          id
          name
        }
        bookedByUser {
          id
          name
          email
          password
        }
        bookingTime
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
        room {
          id
          name
        }
        bookedByUser {
          id
          name
          email
          password
        }
        bookingTime
      }
    }
  }
`;
