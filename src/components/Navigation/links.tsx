export interface Link {
  href: string;
  title: string;
}

const links: Link[] = [
  {
    title: "Book A Room",
    href: "booking/new",
  },
  {
    title: "My Bookings",
    href: "/bookings",
  },
  {
    title: "Admin",
    href: "/admin",
  },
];

export default links;
