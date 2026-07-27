export type Category = "portraits" | "family" | "animals" | "in-progress";

export type Artwork = {
  slug: string;
  title: string;
  caption?: string;
  medium?: string;
  dimensions?: string;
  year?: string;
  category: Category;
  image: string;
  width: number;
  height: number;
};

export const CATEGORY_INFO: Record<
  Category,
  { label: string; description: string }
> = {
  portraits: {
    label: "Portrait Gallery",
    description:
      "Commissioned likenesses in oil and acrylic — a single sitter, closely observed.",
  },
  family: {
    label: "Family Portraits",
    description:
      "Groups painted together: siblings, generations, and the quiet negotiations between them.",
  },
  animals: {
    label: "Animals We Love",
    description:
      "Portraits of the animals who share the sitting — dogs, horses, and other companions.",
  },
  "in-progress": {
    label: "In Progress",
    description:
      "Works still on the easel — underpainting, first passes, and studio process.",
  },
};

// Real photos pulled from the live inaslein.com (img1.wsimg.com), see
// download-artwork.sh. Most pieces have no recorded medium/dimensions/year —
// rather than invent details, those fields are simply omitted. Fill them in
// as Ina provides real specifics for each piece.
export const ARTWORKS: Artwork[] = [
  // Portrait Gallery
  { slug: "self-portrait", title: "Self-Portrait", category: "portraits", image: "/artwork/portraits/self-portrait.jpg", width: 1800, height: 2278 },
  { slug: "adolph", title: "Adolph", category: "portraits", image: "/artwork/portraits/adolph.jpg", width: 328, height: 459 },
  { slug: "marcia", title: "Marcia", category: "portraits", image: "/artwork/portraits/marcia.jpg", width: 1116, height: 1564 },
  { slug: "bella-portrait", title: "Bella", category: "portraits", image: "/artwork/portraits/bella.jpg", width: 1058, height: 1576 },
  { slug: "mary-and-mikey", title: "Mary and Mikey", category: "portraits", image: "/artwork/portraits/mary-and-mikey.jpg", width: 1466, height: 1058 },
  { slug: "g-and-a", title: "G. & A.", category: "portraits", image: "/artwork/portraits/g-and-a.jpg", width: 811, height: 1213 },
  { slug: "portrait-0045", title: "Untitled", category: "portraits", image: "/artwork/portraits/img-0045.jpg", width: 1800, height: 1756 },
  { slug: "bakery", title: "Untitled", category: "portraits", image: "/artwork/portraits/bakery.jpg", width: 1777, height: 1182 },

  // Family Portraits — the Schachtel family, Newark NJ
  {
    slug: "schachtel-bakery",
    title: "Schachtel's Bakery",
    caption: "Newark, New Jersey, 1930s–1960s — Schachtel's Bakery, Morris Schachtel, Albert Einstein.",
    category: "family",
    image: "/artwork/family/schachtel-bakery.jpg",
    width: 1800,
    height: 1342,
  },
  { slug: "schachtel-2", title: "Untitled", category: "family", image: "/artwork/family/schachtel-2.jpg", width: 1800, height: 1354 },
  {
    slug: "schachtel-dinner-1932",
    title: "Schachtel Family Dinner, 1932",
    category: "family",
    image: "/artwork/family/schachtel-dinner-1932.jpg",
    width: 1800,
    height: 1354,
  },

  // Animals We Love
  { slug: "animal-7671", title: "Untitled", category: "animals", image: "/artwork/animals/img-7671.jpg", width: 1668, height: 2388 },
  { slug: "animal-0249", title: "Untitled", category: "animals", image: "/artwork/animals/img-0249.jpg", width: 1434, height: 2560 },
  { slug: "animal-0458", title: "Untitled", category: "animals", image: "/artwork/animals/img-0458.jpg", width: 1800, height: 1257 },
  { slug: "animal-0556", title: "Untitled", category: "animals", image: "/artwork/animals/img-0556.jpg", width: 1795, height: 2560 },
  { slug: "mary-and-mikey-animals", title: "Mary and Mikey", category: "animals", image: "/artwork/portraits/mary-and-mikey.jpg", width: 1466, height: 1058 },
  { slug: "portrait-0045-animals", title: "Untitled", category: "animals", image: "/artwork/portraits/img-0045.jpg", width: 1800, height: 1756 },

  // In Progress
  { slug: "mambo", title: "Mambo", caption: "In progress.", category: "in-progress", image: "/artwork/in-progress/img-7414.jpg", width: 1800, height: 2400 },
  { slug: "ip-73e09ab", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/blob-73e09ab.jpg", width: 960, height: 2079 },
  { slug: "ip-2819", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-2819.jpg", width: 1800, height: 2400 },
  { slug: "ip-9278", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-9278.jpg", width: 1800, height: 2400 },
  { slug: "ip-6035", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6035.jpg", width: 1800, height: 1182 },
  { slug: "ip-6228", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6228.jpg", width: 1592, height: 2560 },
  { slug: "ip-6229", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6229.jpg", width: 1800, height: 2400 },
  { slug: "ip-6230", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6230.jpg", width: 1800, height: 1184 },
  { slug: "ip-6245", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6245.jpg", width: 1800, height: 1234 },
  { slug: "ip-6290", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6290.jpg", width: 1800, height: 1188 },
  { slug: "ip-6812", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6812.jpg", width: 1800, height: 1198 },
  { slug: "ip-6886", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-6886.jpg", width: 1800, height: 1194 },
  { slug: "ip-7020", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-7020.jpg", width: 1800, height: 1144 },
  { slug: "ip-7537", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-7537.jpg", width: 637, height: 1380 },
  { slug: "ip-7539", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-7539.jpg", width: 1800, height: 1150 },
  { slug: "ip-3676", title: "Untitled", category: "in-progress", image: "/artwork/in-progress/img-3676.jpg", width: 1800, height: 2400 },
];

export function artworksByCategory(category: Category) {
  return ARTWORKS.filter((a) => a.category === category);
}

export const FEATURED_PIECE: Artwork = {
  slug: "mind-float",
  title: "Mind Float",
  medium: "Acrylic on canvas",
  dimensions: "36 × 48 in.",
  category: "portraits",
  image: "/artwork/about/mind-float.jpg",
  width: 1800,
  height: 1365,
};

export const HERO_IMAGE = {
  image: "/artwork/home/hero.jpg",
  width: 1800,
  height: 1350,
};
