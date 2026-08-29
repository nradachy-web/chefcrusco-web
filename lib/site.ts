/**
 * Chef Crusco site constants. Every value here is real / harvested.
 * NOTE (pre-launch gaps to confirm with client):
 *  - canonical email: live site shows carlos@chefcrusco.com; brief lists
 *    carloscrusco@hotmail.com. Using the live-site one until confirmed.
 *  - exact Google review count ("hundreds") not hardcoded anywhere.
 */
export const site = {
  name: "Chef Crusco",
  legalName: "Chef Crusco Catering",
  url: "https://chefcrusco.com",
  tagline: "The best table in town",
  subTagline: "Your home and office",
  description:
    "Austin private chef and catering. Plated dinners, tapas parties, and corporate events, cooked fresh in your space. Rated 5 stars on Google.",
  phone: "512.970.2200",
  phoneHref: "tel:+15129702200",
  email: "carlos@chefcrusco.com",
  serviceArea: "Austin and 30 miles around",
  rating: "5.0",
} as const;

export const nav = [
  { label: "Private Chef", href: "/private-chef" },
  { label: "Catering", href: "/catering" },
  { label: "Corporate", href: "/corporate" },
  { label: "Menus", href: "/menus" },
  { label: "Wine", href: "/wine" },
  { label: "The Chef", href: "/story" },
] as const;

export const footerNav = [
  { label: "Press", href: "/press" },
  { label: "FAQ", href: "/faq" },
  { label: "Book", href: "/book" },
] as const;
