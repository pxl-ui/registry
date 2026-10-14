import type { DefinedTermSet } from "@/lib/schemas/pxl/schemaorg/defined-term-set";

const allergens: DefinedTermSet = {
  name: "Mandatory allergen declarations (EU Regulation 1169/2011, Annex II)",
  hasDefinedTerm: [
    {
      name: "Cereals containing gluten",
      termCode: "en:gluten",
      identifier: ["off:en:gluten", "gs1:AW"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:gluten",
    },
    {
      name: "Crustaceans",
      termCode: "en:crustaceans",
      identifier: ["off:en:crustaceans", "gs1:AC"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:crustaceans",
    },
    {
      name: "Eggs",
      termCode: "en:eggs",
      identifier: ["off:en:eggs", "gs1:AE"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:eggs",
    },
    {
      name: "Fish",
      termCode: "en:fish",
      identifier: ["off:en:fish", "gs1:AF"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:fish",
    },
    {
      name: "Peanuts",
      termCode: "en:peanuts",
      identifier: ["off:en:peanuts", "gs1:AP"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:peanuts",
    },
    {
      name: "Soybeans",
      termCode: "en:soybeans",
      identifier: ["off:en:soybeans", "gs1:AY"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:soybeans",
    },
    {
      name: "Milk and dairy (incl. lactose)",
      termCode: "en:milk",
      identifier: ["off:en:milk", "gs1:AM"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:milk",
    },
    {
      name: "Tree nuts",
      termCode: "en:nuts",
      identifier: ["off:en:nuts", "gs1:AN"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:nuts",
    },
    {
      name: "Celery",
      termCode: "en:celery",
      identifier: ["off:en:celery", "gs1:BC"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:celery",
    },
    {
      name: "Mustard",
      termCode: "en:mustard",
      identifier: ["off:en:mustard", "gs1:BM"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:mustard",
    },
    {
      name: "Sesame seeds",
      termCode: "en:sesame-seeds",
      identifier: ["off:en:sesame-seeds", "gs1:AS"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:sesame-seeds",
    },
    {
      name: "Sulphur dioxide and sulphites",
      termCode: "en:sulphur-dioxide-and-sulphites",
      identifier: ["off:en:sulphur-dioxide-and-sulphites", "gs1:SA"],
      sameAs:
        "https://world.openfoodfacts.org/allergen/en:sulphur-dioxide-and-sulphites",
    },
    {
      name: "Lupin",
      termCode: "en:lupin",
      identifier: ["off:en:lupin", "gs1:NL"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:lupin",
    },
    {
      name: "Molluscs",
      termCode: "en:molluscs",
      identifier: ["off:en:molluscs", "gs1:UM"],
      sameAs: "https://world.openfoodfacts.org/allergen/en:molluscs",
    },
  ],
};

export { allergens }