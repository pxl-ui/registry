import type { Menu } from "@/lib/schemas/pxl/schemaorg/food-establishment";

const foodMenu: Menu = {
  "@type": "Menu",
  name: "Ristorante",
  inLanguage: "en",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Starters",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Homemade Iberian ham croquettes (6 pcs)",
          offers: {
            "@type": "Offer",
            price: 9.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Milk",
              value: "contains",
              identifier: [
                "off:en:milk",
                "gs1:AM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:milk"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Eggs",
              value: "contains",
              identifier: [
                "off:en:eggs",
                "gs1:AE"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:eggs"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Tomato salad with bonito tuna belly",
          offers: {
            "@type": "Offer",
            price: 11,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Fish",
              value: "contains",
              identifier: [
                "off:en:fish",
                "gs1:AF"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:fish"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Garlic prawns",
          offers: {
            "@type": "Offer",
            price: 13.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Crustaceans",
              value: "contains",
              identifier: [
                "off:en:crustaceans",
                "gs1:AC"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:crustaceans"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Piquillo peppers stuffed with salt cod",
          offers: {
            "@type": "Offer",
            price: 10.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Fish",
              value: "contains",
              identifier: [
                "off:en:fish",
                "gs1:AF"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:fish"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Milk",
              value: "contains",
              identifier: [
                "off:en:milk",
                "gs1:AM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:milk"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Chickpea hummus with crudités",
          offers: {
            "@type": "Offer",
            price: 8,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Sesame seeds",
              value: "contains",
              identifier: [
                "off:en:sesame-seeds"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:sesame-seeds"
            }
          ]
        }
      ]
    },
    {
      "@type": "MenuSection",
      name: "Main Courses",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Creamy mushroom and truffle rice",
          offers: {
            "@type": "Offer",
            price: 16,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Milk",
              value: "contains",
              identifier: [
                "off:en:milk",
                "gs1:AM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:milk"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Sulphur dioxide and sulphites",
              value: "contains",
              identifier: [
                "off:en:sulphur-dioxide-and-sulphites"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:sulphur-dioxide-and-sulphites"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Spaghetti with clams",
          offers: {
            "@type": "Offer",
            price: 15.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Molluscs",
              value: "contains",
              identifier: [
                "off:en:molluscs",
                "gs1:UM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:molluscs"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Sulphur dioxide and sulphites",
              value: "contains",
              identifier: [
                "off:en:sulphur-dioxide-and-sulphites"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:sulphur-dioxide-and-sulphites"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Roasted vegetable lasagna",
          offers: {
            "@type": "Offer",
            price: 14,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Milk",
              value: "contains",
              identifier: [
                "off:en:milk",
                "gs1:AM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:milk"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Eggs",
              value: "contains",
              identifier: [
                "off:en:eggs",
                "gs1:AE"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:eggs"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Seafood paella (min. 2 people)",
          offers: {
            "@type": "Offer",
            price: 19,
            priceCurrency: "EUR",
            description: "Price per person"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Crustaceans",
              value: "contains",
              identifier: [
                "off:en:crustaceans",
                "gs1:AC"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:crustaceans"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Molluscs",
              value: "contains",
              identifier: [
                "off:en:molluscs",
                "gs1:UM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:molluscs"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Sulphur dioxide and sulphites",
              value: "contains",
              identifier: [
                "off:en:sulphur-dioxide-and-sulphites"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:sulphur-dioxide-and-sulphites"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Warm quinoa salad with vegetables and walnuts",
          offers: {
            "@type": "Offer",
            price: 13.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Tree nuts",
              value: "contains",
              identifier: [
                "off:en:nuts",
                "gs1:AN"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:nuts"
            }
          ]
        }
      ]
    },
    {
      "@type": "MenuSection",
      name: "Second Courses",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Grilled hake with green sauce",
          offers: {
            "@type": "Offer",
            price: 19.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Fish",
              value: "contains",
              identifier: [
                "off:en:fish",
                "gs1:AF"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:fish"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Oven-baked sea bass with vegetables",
          offers: {
            "@type": "Offer",
            price: 20.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Fish",
              value: "contains",
              identifier: [
                "off:en:fish",
                "gs1:AF"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:fish"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Beef ribeye with potatoes and peppers",
          offers: {
            "@type": "Offer",
            price: 23,
            priceCurrency: "EUR"
          }
        },
        {
          "@type": "MenuItem",
          name: "Roast suckling lamb shoulder",
          offers: {
            "@type": "Offer",
            price: 22.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Sulphur dioxide and sulphites",
              value: "contains",
              identifier: [
                "off:en:sulphur-dioxide-and-sulphites"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:sulphur-dioxide-and-sulphites"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Red wine braised oxtail",
          offers: {
            "@type": "Offer",
            price: 21,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Celery",
              value: "contains",
              identifier: [
                "off:en:celery",
                "gs1:BC"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:celery"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Sulphur dioxide and sulphites",
              value: "contains",
              identifier: [
                "off:en:sulphur-dioxide-and-sulphites"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:sulphur-dioxide-and-sulphites"
            }
          ]
        }
      ]
    },
    {
      "@type": "MenuSection",
      name: "Desserts",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Baked cheesecake",
          offers: {
            "@type": "Offer",
            price: 6.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Milk",
              value: "contains",
              identifier: [
                "off:en:milk",
                "gs1:AM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:milk"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Eggs",
              value: "contains",
              identifier: [
                "off:en:eggs",
                "gs1:AE"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:eggs"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Chocolate brownie with vanilla ice cream",
          offers: {
            "@type": "Offer",
            price: 6.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Gluten",
              value: "contains",
              identifier: [
                "off:en:gluten",
                "gs1:AW"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:gluten"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Eggs",
              value: "contains",
              identifier: [
                "off:en:eggs",
                "gs1:AE"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:eggs"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Milk",
              value: "contains",
              identifier: [
                "off:en:milk",
                "gs1:AM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:milk"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Tree nuts",
              value: "contains",
              identifier: [
                "off:en:nuts",
                "gs1:AN"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:nuts"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Crema catalana (Catalan custard)",
          offers: {
            "@type": "Offer",
            price: 5.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Milk",
              value: "contains",
              identifier: [
                "off:en:milk",
                "gs1:AM"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:milk"
            },
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Eggs",
              value: "contains",
              identifier: [
                "off:en:eggs",
                "gs1:AE"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:eggs"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Lemon and cava sorbet",
          offers: {
            "@type": "Offer",
            price: 5.5,
            priceCurrency: "EUR"
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              propertyID: "allergen",
              name: "Sulphur dioxide and sulphites",
              value: "contains",
              identifier: [
                "off:en:sulphur-dioxide-and-sulphites"
              ],
              sameAs: "https://world.openfoodfacts.org/allergen/en:sulphur-dioxide-and-sulphites"
            }
          ]
        },
        {
          "@type": "MenuItem",
          name: "Seasonal fruit",
          offers: {
            "@type": "Offer",
            price: 4.5,
            priceCurrency: "EUR"
          }
        }
      ]
    }
  ]
};

export { foodMenu }