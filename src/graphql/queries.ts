// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bookings {
          id
          bookingTime
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        bookings {
          id
          bookingTime
        }
      }
      nextToken
    }
  }
`;
