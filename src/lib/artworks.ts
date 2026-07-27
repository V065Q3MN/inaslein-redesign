export type Category = "portraits" | "family" | "animals" | "in-progress";

export type Artwork = {
  slug: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  category: Category;
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

// Placeholder inventory. Replace titles/details with Ina's actual pieces —
// each `slug` should stay unique since it also seeds the placeholder canvas.
export const ARTWORKS: Artwork[] = [
  { slug: "p-01", title: "Untitled Sitter I", medium: "Oil on linen", dimensions: "24 × 30 in.", year: "2024", category: "portraits" },
  { slug: "p-02", title: "Untitled Sitter II", medium: "Acrylic on canvas", dimensions: "20 × 24 in.", year: "2023", category: "portraits" },
  { slug: "p-03", title: "Untitled Sitter III", medium: "Oil on canvas", dimensions: "18 × 24 in.", year: "2023", category: "portraits" },
  { slug: "p-04", title: "Untitled Sitter IV", medium: "Oil on linen", dimensions: "30 × 36 in.", year: "2022", category: "portraits" },

  { slug: "f-01", title: "Two Sisters", medium: "Oil on canvas", dimensions: "36 × 48 in.", year: "2024", category: "family" },
  { slug: "f-02", title: "Three Generations", medium: "Acrylic on canvas", dimensions: "40 × 30 in.", year: "2023", category: "family" },
  { slug: "f-03", title: "The Long Table", medium: "Oil on linen", dimensions: "30 × 40 in.", year: "2022", category: "family" },

  { slug: "a-01", title: "Old Dog, Morning Light", medium: "Oil on canvas", dimensions: "20 × 20 in.", year: "2024", category: "animals" },
  { slug: "a-02", title: "The Gray Mare", medium: "Acrylic on canvas", dimensions: "24 × 36 in.", year: "2023", category: "animals" },
  { slug: "a-03", title: "Study of a Spaniel", medium: "Oil on board", dimensions: "16 × 20 in.", year: "2023", category: "animals" },

  { slug: "ip-01", title: "Untitled (Underpainting)", medium: "Oil on linen, in progress", dimensions: "30 × 40 in.", year: "2025", category: "in-progress" },
  { slug: "ip-02", title: "First Pass, Seated Figure", medium: "Acrylic on canvas, in progress", dimensions: "24 × 30 in.", year: "2025", category: "in-progress" },
];

export function artworksByCategory(category: Category) {
  return ARTWORKS.filter((a) => a.category === category);
}
