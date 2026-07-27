// Single source of truth for NAP (Name, Address, Phone) data. Confirmed
// directly with Ina 2026-07-27 — do not edit the address/phone without
// re-confirming, since this feeds both the public site and LocalBusiness
// schema used for the Google Business Profile listing.
export const BUSINESS = {
  name: "Ina Slein",
  telephone: "+15616328055",
  telephoneDisplay: "(561) 632-8055",
  email: "info@inaslein.com",
  // Full street address is real (confirmed with Ina) but intentionally not
  // rendered as visible page text — this is a home studio, so the address
  // is used for LocalBusiness schema / GBP verification only. GBP itself
  // should be configured as a service-area business with the address
  // hidden from public view. See LOCAL-SEO-ANALYSIS-inaslein.com.md.
  streetAddress: "10327 N Andover Coach Ln",
  city: "Lake Worth",
  state: "FL",
  postalCode: "33449",
  country: "US",
  cityDisplay: "Lake Worth, Florida",
  areaServed: ["Lake Worth", "West Palm Beach", "Palm Beach County"],
} as const;
