// All business details live here. Replace the placeholder values with real ones.
export const site = {
  name: "2nd Home Residency",
  tagline: "A PG that feels like home",
  city: "Gurugram",
  address: "H. No. 104, Street No. 11, near Shiv Mandir, Gurugram, Haryana 122016",
  phone: "+91 8827321270",
  whatsapp: "918827321270", // country code + number, digits only
  email: "shivamdubey17606@gmail.com",
  
  mapEmbedUrl: "",
};

// Welcome popup. Put the owner's photo at public/photos/owner.jpg
export const owner = {
  name: "Shivam Dubey", // PLACEHOLDER: replace with the owner's name
  role: "Owner, 2nd Home Residency",
  message:
    "Namaste! I personally look after every resident here. Call or WhatsApp me any time to ask questions or book a visit.",
  delaySeconds: 5, // how long after the page opens the popup appears
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
  "24x7 entry allowed,Fully independent",
  "Half  month's rent as refundable security deposit",
  "One month's notice before vacating",
  "Everything allowed according to atmosphere",
  "Visitors allowed 24x7 with valid id proof and free stay for parents with food",
  "No restrictions of other activites under following Notice restriction",

];

export const faqs = [
  {
    q: "Is food included in the rent?",
    a: "Yes. Breakfast and dinner are included on all days, with lunch on weekends.",
  },
  {
    q: "Is there a minimum stay?",
    a: "The minimum stay is three months",
  },
  {
    q: "Can I visit before booking?",
    a: "Of course. Send an enquiry or call us to schedule a visit any day between 10 AM and 7 PM.",
  },
  {
    q: "What documents are needed?",
    a: "A government photo ID, a recent photograph, adhar card , pancard  or office ID.",
  },
   {
    q: "Can I get a rent agreement and police verification ",
    a: "Yes,you can, but you have to pay the servioe charge of 1k ruppes",
  },
   {
    q: "Can I bring my friends(male/female)",
    a: "Yes, you can after giving the valid id proofs",
  },
  {
    q: "Can I try free trial food",
    a: "Yes, you can try the food ",
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

// ---------- Reviews (home page) ----------
// Visitors submit reviews through the form; they arrive on your WhatsApp.
// To publish one, copy it here. Only add REAL reviews from real residents.
//
// Example:
//   { name: "Rahul S.", rating: 5, text: "Clean rooms and very helpful owner.", stayedAs: "Resident", date: "Nov 2026" },
export const reviews: {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  stayedAs?: string;
  date?: string;
}[] = [];

// Optional: your Google Business "Write a review" link. Shows a button when filled in.
export const googleReviewUrl = "";
