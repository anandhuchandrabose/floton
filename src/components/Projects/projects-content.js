const buildGallery = (folder, prefix, count, ext) =>
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    return `/images/${folder}/${prefix} ${number}.${ext}`;
  });

const projectsContent = [
  {
    id: "emerald-paje",
    slug: "the-emerald-paje",
    title: "The Emerald, Paje",
    location: "Zanzibar, Paje",
    status: "Completed",
    type: "20 tropical residential villas",
    unitSize: "70 to 190 sqm",
    propertySize: "7,500 sq.ft.",
    heroImage: "/featured-projects/featured-work-5.jpg",
    coverImage: "/featured-projects/hero1.jpg",
    summary:
      "A refined coastal residence designed for those who value privacy, space, and architectural calm.",
    overview:
      "The Emerald sits within a quiet stretch of Paje, balancing open-air living with purposeful privacy. Each villa is arranged to maximize breeze flow, soften solar gain, and preserve daylight without sacrificing intimacy.",
    highlights: [
      "Low-density masterplan with private courtyards",
      "Salt-resistant materials and shaded circulation",
      "Generous terraces designed for indoor-outdoor living",
      "Quiet landscaping plan that buffers each residence",
    ],
    details: [
      { label: "Site Area", value: "7,500 sq.ft." },
      { label: "Units", value: "20 villas" },
      { label: "Unit Size", value: "70 to 190 sqm" },
      { label: "Status", value: "Completed" },
      { label: "Ownership", value: "Freehold" },
      { label: "Rental Use", value: "Short-stay and long-stay ready" },
    ],
    amenities: [
      "Private plunge pools",
      "Concierge and maintenance",
      "Landscaped walkways",
      "Covered parking",
      "Backup power",
      "On-site security",
    ],
    gallery: buildGallery("The Emerald Paje", "emerald 3b3b", 17, "jpg"),
  },
  {
    id: "emerald-square",
    slug: "the-emerald-square-paje",
    title: "The Emerald Square, Paje",
    location: "Zanzibar, Paje",
    status: "In Progress, handover Feb '26",
    type: "19 tropical residential villas",
    unitSize: "70 to 190 sqm",
    propertySize: "8,000 sq.ft.",
    heroImage: "/featured-projects/featured-work-2.png",
    coverImage: "/featured-projects/hero2.jpg",
    summary:
      "A modern tropical community with clean geometry, layered shade, and a vibrant sense of arrival.",
    overview:
      "Emerald Square is organized around shared green pockets and shaded pedestrian lanes. The layout encourages soft movement between residences while preserving long views and a calm visual rhythm.",
    highlights: [
      "Central green courtyard with communal lounge",
      "Deep overhangs for natural cooling",
      "Material palette of coral stone and timber",
      "Flexible layouts for owner-occupiers and rentals",
    ],
    details: [
      { label: "Site Area", value: "8,000 sq.ft." },
      { label: "Units", value: "19 villas" },
      { label: "Unit Size", value: "70 to 190 sqm" },
      { label: "Status", value: "In Progress" },
      { label: "Handover", value: "February 2026" },
      { label: "Structure", value: "Reinforced concrete + timber" },
    ],
    amenities: [
      "Shared pool court",
      "Resident lounge",
      "Storage lockers",
      "Ground-level retail kiosks",
      "CCTV and access control",
      "High-speed fiber",
    ],
    gallery: buildGallery(
      "The Emerald Square Paje",
      "emerald square RT3",
      16,
      "png"
    ),
  },
  {
    id: "yolo-residence",
    slug: "yolo-residence",
    title: "YOLO Residence",
    location: "Zanzibar, Coastal Lifestyle",
    status: "Scheduled commencement Mar '26",
    type: "52 residential apartments",
    unitSize: "70 to 250 sqm",
    propertySize: "8,000 sq.ft.",
    heroImage: "/featured-projects/featured-work-3.png",
    coverImage: "/featured-projects/featured-work-4.jpg",
    summary:
      "A contemporary residential development designed for modern coastal living and strong rental performance.",
    overview:
      "YOLO Residence blends compact planning with generous terraces, producing flexible layouts that suit both owner-occupiers and long-term rental strategies. The tower massing captures light while protecting interior comfort.",
    highlights: [
      "Apartment mix from 1 to 3 bedrooms",
      "Dedicated co-working lounge",
      "Integrated fitness and wellness wing",
      "High-efficiency glazing and shading",
    ],
    details: [
      { label: "Site Area", value: "8,000 sq.ft." },
      { label: "Units", value: "52 apartments" },
      { label: "Unit Size", value: "70 to 250 sqm" },
      { label: "Status", value: "Planned" },
      { label: "Construction", value: "Commencement March 2026" },
      { label: "Parking", value: "Underground + visitor" },
    ],
    amenities: [
      "Rooftop lounge",
      "Pool deck",
      "Fitness studio",
      "Co-working space",
      "Ground-floor cafe",
      "24/7 security",
    ],
    gallery: buildGallery("YOLO residences", "yolo residence", 1, "png"),
  },
  {
    id: "hola-paje",
    slug: "hola-paje",
    title: "Hola, Paje",
    location: "Zanzibar, Paje",
    status: "Scheduled commencement Mar '26",
    type: "50 villas + commercial",
    unitSize: "130 to 450 sqm",
    propertySize: "20,000 sq.ft.",
    heroImage: "/featured-projects/featured-work-1.jpg",
    coverImage: "/featured-projects/featured-work-5.jpg",
    summary:
      "A vibrant mixed-use destination crafted around movement, community, and contemporary design.",
    overview:
      "Hola, Paje brings together residences, retail, and curated social spaces to form a lively urban hub in the heart of Zanzibar. The masterplan prioritizes walkability, layered public zones, and shaded plazas.",
    highlights: [
      "Mixed-use core with retail and cafes",
      "Event-ready central plaza",
      "Flexible villa footprints for long-stay living",
      "Dedicated service and delivery corridors",
    ],
    details: [
      { label: "Site Area", value: "20,000 sq.ft." },
      { label: "Units", value: "50 villas + retail" },
      { label: "Unit Size", value: "130 to 450 sqm" },
      { label: "Status", value: "Planned" },
      { label: "Construction", value: "Commencement March 2026" },
      { label: "Public Realm", value: "Retail, food, and gallery zone" },
    ],
    amenities: [
      "Retail boulevard",
      "Community plaza",
      "Coastal shuttle",
      "Childrens play garden",
      "Wellness studio",
      "Smart access controls",
    ],
    gallery: buildGallery("Hola Paje", "hola", 3, "jpg"),
  },
];

export default projectsContent;
