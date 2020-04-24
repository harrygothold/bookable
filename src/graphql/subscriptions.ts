/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking {
    onCreateBooking {
      id
      room {
        id
        name
        hasScreen
        numberOfPeople
        disabledAccess
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
`;
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking {
    onUpdateBooking {
      id
      room {
        id
        name
        hasScreen
        numberOfPeople
        disabledAccess
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
`;
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking {
    onDeleteBooking {
      id
      room {
        id
        name
        hasScreen
        numberOfPeople
        disabledAccess
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
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      name
      hasScreen
      numberOfPeople
      disabledAccess
      bookings {
        id
        bookingTime
      }
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      name
      hasScreen
      numberOfPeople
      disabledAccess
      bookings {
        id
        bookingTime
      }
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      name
      hasScreen
      numberOfPeople
      disabledAccess
      bookings {
        id
        bookingTime
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      password
      bookings {
        id
        bookingTime
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      password
      bookings {
        id
        bookingTime
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      password
      bookings {
        id
        bookingTime
      }
    }
  }
`;
