// All content below is sourced directly from the existing enelelectrical.com website.
// Do not add claims that are not supported by the source site.

export const site = {
  name: "E.N.E.L. Electrical Corp.",
  shortName: "E.N.E.L. Electrical",
  president: "John Dituri",
  tagline: "Lighting specialists & electricians serving the five boroughs of New York.",
  phone: "718-252-7036",
  phoneHref: "tel:+17182527036",
  fax: "718-252-3469",
  email: "info@enelelectrical.com",
  emailHref: "mailto:info@enelelectrical.com",
  careersEmail: "enelelectrical@aol.com",
  address: {
    street: "1107 McDonald Avenue",
    city: "Brooklyn",
    state: "NY",
    zip: "11230",
  },
  // From the source site: "For 30 years now, our President, John Dituri..."
  yearsInBusinessNote: "Three decades of electrical and lighting experience",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 5:00 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],
  emergencyNote: "Emergency service available 7 days a week, 24 hours a day.",
  holidaysNote: "Closed all major holidays.",
  serviceAreaHeadline: "Lighting up the five boroughs",
  boroughs: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
  // Licenses exactly as listed on the source site
  licenses: [
    { authority: "New York City Dept. of Buildings", number: "License #12069" },
    { authority: "New Jersey Business Permit", number: "#16992" },
    { authority: "Westchester County", number: "License #1577" },
    { authority: "Suffolk County", number: "License #35605-ME" },
    { authority: "Nassau County", number: "License #2170E" },
  ],
  credentials: "Fully licensed, bonded and insured.",
}

// The full capabilities list, verbatim from the "What We Do" page.
export const capabilities = [
  "220 Wiring Conversions",
  "Area Lighting",
  "Banking Facilities",
  "Commercial Warehouses",
  "Computer & Internet Wiring",
  "Exit & Emergency Lighting",
  "Fluorescent Ballast Replacement",
  "Horse Arena Lighting",
  "Retro-Fitting",
  "Motor Controls",
  "PA Systems",
  "Parking Lot Lighting Install",
  "Printing Press Facilities",
  "Residential Wiring",
  "Restaurant Facilities",
  "Retail Facilities",
  "Security Lighting",
  "Tenant Improvements",
  "Title 24 Compliance",
  "Violation Removal",
]

// Grouped service categories built strictly from the capabilities above.
export const serviceGroups = [
  {
    id: "lighting",
    title: "Lighting Systems",
    summary:
      "Repairing, installing and refurbishing lighting equipment — our core specialty for over three decades.",
    items: [
      "Area Lighting",
      "Exit & Emergency Lighting",
      "Security Lighting",
      "Parking Lot Lighting Install",
      "Fluorescent Ballast Replacement",
      "Retro-Fitting",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Electrical",
    summary:
      "Electrical work for chain stores, factories and facilities of every kind across the five boroughs.",
    items: [
      "Commercial Warehouses",
      "Retail Facilities",
      "Restaurant Facilities",
      "Banking Facilities",
      "Printing Press Facilities",
      "Tenant Improvements",
    ],
  },
  {
    id: "residential",
    title: "Residential Electrical",
    summary:
      "Wiring and electrical work for homes, from new circuits to full residential installations.",
    items: [
      "Residential Wiring",
      "220 Wiring Conversions",
      "Computer & Internet Wiring",
      "Motor Controls",
      "PA Systems",
    ],
  },
  {
    id: "compliance",
    title: "Code & Compliance",
    summary:
      "Bringing systems up to code and keeping facilities compliant and inspection-ready.",
    items: ["Violation Removal", "Title 24 Compliance", "Horse Arena Lighting"],
  },
]
