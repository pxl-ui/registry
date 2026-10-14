import type { Menu } from "@/lib/schemas/pxl/schemaorg/food-establishment";

const dopamineMenu: Menu = {
  "@type": "Menu",
  name: "Dopamine Menu",
  inLanguage: "en",
  description: "A menu of activities to boost your dopamine levels based on time and effort.",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Starters",
      description: "less than 10 minutes",
      image: "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/icons/food/92_sandwich.png",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Yoga",
          description: "Quick stretching or yoga session",
          offers: {
            "@type": "Offer",
            price: 10,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Walk",
          description: "A short, refreshing walk",
          offers: {
            "@type": "Offer",
            price: 10,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Snack",
          description: "Enjoy a quick tasty treat",
          offers: {
            "@type": "Offer",
            price: 5,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Hot shower",
          description: "Relaxing warm water reset",
          offers: {
            "@type": "Offer",
            price: 10,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "5 min tidy",
          description: "Quick space organization",
          offers: {
            "@type": "Offer",
            price: 5,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Face mask",
          description: "Skincare refreshing routine",
          offers: {
            "@type": "Offer",
            price: 10,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "NYT game",
          description: "Solve a quick puzzle or word game",
          offers: {
            "@type": "Offer",
            price: 5,
            priceCurrency: "minutes"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      name: "Main Courses",
      description: "will take 45 minutes or more",
      image: "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/icons/food/87_ramen.png",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Pottery class (or another art class)",
          description: "Engage in creative hands-on art",
          offers: {
            "@type": "Offer",
            price: 45,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Try a new recipe",
          description: "Cook something creative and different",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Rearrange your bedroom",
          description: "Refresh your personal living space",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Read a new book",
          description: "Immerse yourself in literature",
          offers: {
            "@type": "Offer",
            price: 45,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Dinner out with friends",
          description: "Socialize and enjoy good food",
          offers: {
            "@type": "Offer",
            price: 90,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Go for a hike",
          description: "Explore nature and get moving",
          offers: {
            "@type": "Offer",
            price: 120,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Clean out and reorganize desk",
          description: "Deep workspace organization",
          offers: {
            "@type": "Offer",
            price: 45,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Bake a cake",
          description: "Baking sweet goods from scratch",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Reorganize the fridge",
          description: "Clean and structure kitchen food storage",
          offers: {
            "@type": "Offer",
            price: 45,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Take a long drive and blast music with the windows open",
          description: "Driving therapy with favorite songs",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Go to the beach",
          description: "Relax by the sea and enjoy the views",
          offers: {
            "@type": "Offer",
            price: 120,
            priceCurrency: "minutes"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      name: "Specials",
      description: "need advanced planning",
      image: "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/icons/food/85_roastedchicken.png",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Book a vacay",
          description: "Plan and reserve a future trip",
          offers: {
            "@type": "Offer",
            price: 1,
            priceCurrency: "days"
          }
        },
        {
          "@type": "MenuItem",
          name: "Get nails done",
          description: "Self-care appointment at a salon",
          offers: {
            "@type": "Offer",
            price: 2,
            priceCurrency: "hours"
          }
        },
        {
          "@type": "MenuItem",
          name: "Host a dinner party",
          description: "Organize an event for friends at home",
          offers: {
            "@type": "Offer",
            price: 1,
            priceCurrency: "days"
          }
        },
        {
          "@type": "MenuItem",
          name: "Go to a concert",
          description: "Attend a live music performance",
          offers: {
            "@type": "Offer",
            price: 3,
            priceCurrency: "hours"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      name: "Sides",
      description: "great to do along with something else",
      image: "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/icons/food/32_curry.png",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Oil diffuser while journaling",
          description: "Aromatherapy paired with reflective writing",
          offers: {
            "@type": "Offer",
            price: 15,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Listening to a podcast while cleaning",
          description: "Entertaining audio while doing chores",
          offers: {
            "@type": "Offer",
            price: 30,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Light a candle while meditating",
          description: "Ambient lighting and mindfulness",
          offers: {
            "@type": "Offer",
            price: 10,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Stretch while watching a tv show",
          description: "Body flexibility while enjoying media",
          offers: {
            "@type": "Offer",
            price: 20,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Listen to favorite music while working or exercising",
          description: "Energizing background tracks",
          offers: {
            "@type": "Offer",
            price: 45,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Enjoy a cold beverage while sitting outside",
          description: "Fresh air break with a refreshing drink",
          offers: {
            "@type": "Offer",
            price: 15,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Oil hair while reading",
          description: "Nourishing hair treatment during a book session",
          offers: {
            "@type": "Offer",
            price: 30,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Knit or crochet while watching tv or listening to an audiobook",
          description: "Crafting hands-free entertainment",
          offers: {
            "@type": "Offer",
            price: 45,
            priceCurrency: "minutes"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      name: "Desserts",
      description: "nice to have in moderation",
      image: "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/icons/food/34_donut.png",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Scrolling",
          description: "Mindless social media browsing",
          offers: {
            "@type": "Offer",
            price: 20,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Thrift shop",
          description: "Browse secondhand stores",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Binge reality tv",
          description: "Watch entertaining reality shows",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Get takeout",
          description: "Order ready-made comfort food",
          offers: {
            "@type": "Offer",
            price: 30,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Make an ice cream sundaes",
          description: "Prepare a sweet sugary treat",
          offers: {
            "@type": "Offer",
            price: 15,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Go to an estate sale",
          description: "Hunt for vintage and unique items",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Rot in bed",
          description: "Total rest day lounging in bed",
          offers: {
            "@type": "Offer",
            price: 120,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Online shop",
          description: "Browsing e-commerce websites",
          offers: {
            "@type": "Offer",
            price: 30,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Text",
          description: "Chatting casually with friends",
          offers: {
            "@type": "Offer",
            price: 15,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Play a video game",
          description: "Immersive gaming session",
          offers: {
            "@type": "Offer",
            price: 60,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Eat fast food",
          description: "Quick indulgence meal",
          offers: {
            "@type": "Offer",
            price: 20,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Flirt on a dating app",
          description: "Swiping and chatting on apps",
          offers: {
            "@type": "Offer",
            price: 20,
            priceCurrency: "minutes"
          }
        },
        {
          "@type": "MenuItem",
          name: "Make nachos",
          description: "Prepare a cheesy comfort snack",
          offers: {
            "@type": "Offer",
            price: 15,
            priceCurrency: "minutes"
          }
        }
      ]
    }
  ]
};

export { dopamineMenu }