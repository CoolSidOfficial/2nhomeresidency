// All business details live here. Replace the placeholder values with real ones.
export const site = {
  name: "2nd Home Residency",
  tagline: "A PG that feels like home",
  city: "Gurugram",
  address: "H. No. 104, Street No. 11, near Shiv Mandir, Gurugram, Haryana 122016",
  phone: "+91 8827321270",
  whatsapp: "918827321270", // country code + number, digits only
  email: "shivamdubey17606@gmail.com",
  // Optional: paste the src URL from Google Maps → Share → "Embed a map" for an exact pin.
  // If left empty, the map searches for `address` above.
  mapEmbedUrl: "",
};

export const rooms = [
  {
    name: "Single ",
    price: 16000,
    features: ["Private room", "Attached washroom", "Study table & wardrobe", "AC"],
    popular: false,
  },
  {
    name: "Double Sharing",
    price: 9000,
    features: ["Spacious twin room", "Attached washroom", "Individual wardrobes", "AC"],
    popular: true,
  },
  {
    name: "Triple Sharing",
    price: 7000,
    features: ["Large shared room", "Common washroom", "Individual lockers", "Non-AC"],
    popular: false,
  },
];

export const amenities = [
  { title: "Home-style meals", text: "Breakfast and dinner daily, lunch on weekends." },
  { title: "High-speed Wi-Fi", text: "Fast internet throughout the building." },
  { title: "Housekeeping", text: "Daily room cleaning and fresh linen weekly." },
  { title: "Laundry", text: "Washing machines available for residents." },
  { title: "24×7 security", text: "CCTV, biometric entry and on-site warden." },
  { title: "Power backup", text: "Uninterrupted power for rooms and Wi-Fi." },
  { title: "Hot water", text: "Geysers in every washroom, all day." },
  { title: "Common lounge", text: "TV, seating and a place to unwind." },
];

export const rules = [
  "Gate closes at 11:00 PM (late entry with prior notice)",
  "One month's rent as refundable security deposit",
  "One month's notice before vacating",
  "No smoking or alcohol on the premises",
  "Visitors allowed in the lounge until 8:00 PM",
];

export const faqs = [
  {
    q: "Is food included in the rent?",
    a: "Yes. Breakfast and dinner are included on all days, with lunch on weekends.",
  },
  {
    q: "Is there a minimum stay?",
    a: "The minimum stay is three months. Shorter stays can be arranged on request.",
  },
  {
    q: "Can I visit before booking?",
    a: "Of course. Send an enquiry or call us to schedule a visit any day between 10 AM and 7 PM.",
  },
  {
    q: "What documents are needed?",
    a: "A government photo ID, a recent photograph, and a college or office ID.",
  },
];

// ---------- Facilities page (/facilities) ----------
// Each group shows one photo from public/photos next to its list.
export const facilityGroups = [
  {
    title: "Inside your room",
    text: "Every room comes furnished, so you can move in with just your bags.",
    photo: "/photos/02-double-room.jpg",
    items: [
      "Bed with mattress, pillows and bedsheet",
      "Wardrobe with mirror and lock",
      "Study / work table",
      "Ceiling fan and LED lighting",
      "Air conditioning (in AC rooms)",
      "Curtains and window with grill",
      "Plug points near the bed and table",
      "Easy-to-clean vitrified tile flooring",
    ],
  },
  {
    title: "Private kitchenette",
    text: "Many rooms have their own kitchenette for tea, snacks or cooking your own meals.",
    photo: "/photos/11-kitchenette.jpg",
    items: [
      "Granite platform with steel sink",
      "Running water tap",
      "Tiled backsplash, easy to clean",
      "Dedicated power socket for appliances",
      "Ventilation window",
    ],
  },
  {
    title: "Bathroom",
    text: "Clean bathrooms with hot water whenever you need it.",
    photo: "/photos/13-bathroom-with-geyser.jpg",
    items: [
      "Electric geyser for hot water",
      "Wash basin",
      "Hot and cold water taps",
      "Fully tiled walls",
      "Exhaust / ventilation window",
    ],
  },
  {
    title: "Common areas",
    text: "Space outside your room to eat, relax and meet other residents.",
    photo: "/photos/01-dining-area.jpg",
    items: [
      "Covered dining area with table and chairs",
      "Open terrace with plants",
      "RO drinking water dispenser",
      "Gated entry",
    ],
  },
];

// ---------- Nearby page (/nearby) ----------
// Distances are approximate (road distance from the PG). Edit freely.
// `time` is optional.
export const area = "Udyog Vihar, Dundahera";

export const nearbyHighlights = [
  { value: "Walking", label: "to hospitals & Vishal Mega Mart" },
  { value: "Next to", label: "Udyog Vihar Phase 1" },
  { value: "~4 km", label: "to DLF Cyber City" },
  { value: "~8 km", label: "to IGI Airport" },
];

export const nearby: {
  category: string;
  places: { name: string; distance: string; time?: string }[];
}[] = [
  {
    category: "Offices & work hubs",
    places: [
      { name: "Udyog Vihar Phase 1", distance: "Walking distance" },
      { name: "Udyog Vihar Phase 2–5", distance: "2–4 km", time: "By auto / cab" },
      { name: "DLF Cyber City & CyberHub", distance: "~4 km", time: "By auto / cab" },
      { name: "Global Business Park, MG Road", distance: "~6 km", time: "By cab" },
    ],
  },
  {
    category: "Hospitals & medical",
    places: [
      { name: "Vijay Hospital, Dundahera", distance: "Walking distance" },
      { name: "Arya Hospital, Dundahera", distance: "Walking distance" },
      { name: "Bhardwaj Hospital, Dundahera", distance: "Walking distance" },
      { name: "Park Hospital, Palam Gurgaon Road", distance: "Close by", time: "By auto" },
    ],
  },
  {
    category: "Shopping & daily needs",
    places: [
      { name: "Vishal Mega Mart", distance: "Walking distance" },
      { name: "Dundahera local market", distance: "Walking distance" },
      { name: "Punjab National Bank & ATM", distance: "Walking distance" },
      { name: "DLF CyberHub (food & cafés)", distance: "~4 km", time: "By auto / cab" },
    ],
  },
  {
    category: "Transport",
    places: [
      { name: "Dundahera bus stand", distance: "Walking distance" },
      { name: "Delhi–Gurugram border (NH-48)", distance: "Close by", time: "Easy Delhi access" },
      { name: "Cyber City Rapid Metro", distance: "~4 km", time: "By auto / cab" },
      { name: "IFFCO Chowk Metro (Yellow Line)", distance: "~8 km", time: "By cab" },
      { name: "IGI Airport", distance: "~8 km", time: "By cab" },
      { name: "Gurugram Railway Station", distance: "~10 km", time: "By cab" },
    ],
  },
  {
    category: "Around the PG",
    places: [
      { name: "Shiv Mandir", distance: "Right next door" },
      { name: "Sector 21 Park", distance: "Walking distance" },
    ],
  },
];

// Quick "search on the map" buttons on the nearby page.
export const nearbySearches = [
  "Vishal Mega Mart",
  "Hospital",
  "Pharmacy",
  "ATM",
  "Metro station",
  "Gym",
  "Restaurant",
];
