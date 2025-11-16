// Generate stable UUIDs
const uuid = () => crypto.randomUUID();

// Brand Colors (Correct Official Colors)
const COLORS = {
  react: "#61DAFB",
  chakra: "#319795",
  tailwind: "#38BDF8",
  js: "#F7DF1E",
  node: "#3C873A",
  express: "#000000",
  mongo: "#4DB33D",
  mongoose: "#800000",
};

import { DiMongodb } from "react-icons/di";
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiExpress,
  SiMongoose,
  SiTailwindcss,
} from "react-icons/si";

export const projects = [
  {
    id: uuid(),
    title: "SassyBlend",
    image: "/sassblend.jpeg",
    description: "A fast food Ordering Web App",
    intro:
      "SassyBlend started as a response to an everyday frustration—local vendors and customers relying on WhatsApp to negotiate, confirm, and track food orders. I built the platform to bring clarity, speed, and convenience to the ordering experience, enabling users to order what they want easily and vendors to manage orders without confusion.",
    date: "April, 2024",
    goal: "Create a seamless ordering experience that is fast, transparent, and easy to manage.",

    role: [
      "Frontend architecture using React, Chakra UI, Tailwind, and Redux state management.",
      "Backend development using Node.js, Express, and MongoDB.",
      "UI implementation, navigation flows, and reusable component structure.",
      "Deployment of the application on Vercel.",
    ],

    deployment: "Vercel",
    isCaseStudy: true,

    techStack: {
      frontend: [
        { name: "React", icon: FaReact, color: COLORS.react },
        { name: "Chakra UI", icon: SiChakraui, color: COLORS.chakra },
        { name: "Tailwind", icon: SiTailwindcss, color: COLORS.tailwind },
        { name: "JavaScript", icon: FaJsSquare, color: COLORS.js },
      ],
      backend: [
        { name: "Node.js", icon: FaNodeJs, color: COLORS.node },
        { name: "Express", icon: SiExpress, color: COLORS.express },
      ],
      database: [
        { name: "MongoDB", icon: DiMongodb, color: COLORS.mongo },
        { name: "Mongoose", icon: SiMongoose, color: COLORS.mongoose },
      ],
    },

    overview: [
      "SassyBlend is a fast and convenient food-ordering web application designed to simplify the process of browsing meals, placing orders, applying discounts, and tracking deliveries. The platform supports both guest users and registered customers, while providing an administrative dashboard for vendors to manage products, orders, and inventory.",

      "The project was inspired by real-life challenges faced by small food vendors and customers who relied heavily on WhatsApp chats, voice notes, price confirmations, and manual tracking.",
    ],

    problemSession: {
      description: `
        From research and observation, I identified three major pain points for both users and vendors:
      `,
      challenges: [
        {
          challenge: "Convenience",
          explanation:
            "Customers found it stressful to order food via chats — repeating details every time.",
        },
        {
          challenge: "Vendor Organization",
          explanation:
            "Vendors struggled to track orders manually, resulting in delays or mistakes.",
        },
        {
          challenge: "Trust & Transparency",
          explanation:
            "Customers wanted clear pricing, delivery info, and secure order tracking.",
        },
      ],
      summary: `
        SassyBlend addresses all three by providing a structured, reliable, and user-friendly food ordering platform.
      `,
    },

    keyFeatures: {
      userExperience: [
        "Browse meals by category",
        "Add items to cart",
        "Checkout as Guest or Registered User",
        "Automatic calculation of totals, delivery fees, and discounts",
        "10% discount automatically available to registered users",
      ],
      orderTracking: [
        "Users get a unique Order ID and can monitor order status",
      ],
      authentication: [
        "Secure login/register flow",
        "Guest cart sessions without forcing signup",
      ],
      adminDashboard: [
        "Manage products, prices, images, and descriptions",
        "View and update order status",
        "Track customer activity",
      ],
    },

    engineeringDecisions: [
      {
        decision: "Redux for State Management",
        reason: "Centralized cart + user session consistency across pages",
      },
      {
        decision: "Conditional discount logic",

        reason: "Encourages registration without forcing it",
      },
      {
        decision: "Node.js and Express for REST API",
        reason:
          "Chosen for its non-blocking, event-driven architecture, which handles concurrent requests efficiently, perfect for a food-ordering system with high read/write operations such as cart updates, product fetches, and order creation.",
      },
      {
        decision: "Redis for Caching",
        reason:
          "Implemented to speed up frequent data access by caching menu items, categories, and user sessions, reducing database load and improving response time, especially during peak ordering periods.",
      },

      // {
      //   decision: "Separate Admin App",
      //   reason: "Keeps customer UI clean and optimized",
      // },
      {
        decision: "Reusable component architecture",
        reason: "Improves scalability and reduces code duplication",
      },
    ],

    // Unique placeholders remain per-project
    uiPreviewPlaceholders: [
      "Home / Menu Screen Placeholder",
      "Product Detail / Add to Cart Placeholder",
      "Cart / Checkout Flow Placeholder",
      "Order Tracking Page Placeholder",
      "Admin Dashboard Placeholder",
    ],

    outcomes: {
      summary:
        " Early testing with customers and a vendor showed measurable improvements over WhatsApp-based ordering.",
      points: [
        " Ordering speed increased - Fewer repeated confirmations",
        "Accuracy improved - Clear item details before checkout",
        "Vendor efficiency improved - easier order sequencing and fewer mistakes",
        "Greater trust - transparent pricing and tracking reduced follow-ups",
      ],
      lessonsLearned: [
        `I improved in state management, backend structuring, UX decisions, and full-stack architecture.`,
        "Better state management and API structuring",
        "Clear UX decisions (checkout flow, optional signup) increase user confidence",
        "Small incentives like a 10% discount effectively encourage registration",
        "Real user feedback helped me refine the platform beyond assumptions.",
      ],
      Kips: [
        {
          metric: "Order speed (early tester)",
          value: "40% faster",
          direction: "up",
        },
        {
          metric: "Error Reduction",
          value: "60% fewer mistakes",
          direction: "down",
        },
      ],
    },

    nextSteps: [
      "Add real-time notifications (WebSockets)",
      "Integrate mobile money / card payments",
      "Expand analytics for vendors",
    ],

    recommendations: [
      {
        area: "Improve Visual Presentation",
        items: [
          "More spacing",
          "Consistent typography",
          "Dark and light modes",
        ],
      },
      {
        area: "Vendor Tools",
        items: ["Promotions", "Analytics"],
      },
      {
        area: "Checkout Experience",
        items: ["Delivery map", "Saved addresses", "Online payment"],
      },
      {
        area: "Order Tracking",
        items: ["Step-based tracking", "ETA", "Rider tracking"],
      },
    ],

    closingSummary: `
      SassyBlend reflects strong full-stack ability: authentication, cart logic, API design, UI/UX, and deployment.
    `,

    // userPersonas: [
    //   {
    //     name: "Maria Tom",
    //     image: "https://example.com/images/maria-tom.jpg",
    //     summary: [
    //       "Maria Tom is a bank manager whose days are filled with back-to-back meetings, client calls, and strategic decisions. Cooking is a luxury she rarely has time for, and lunch often becomes a rushed affair squeezed between appointments.",
    //       "She finds herself frustrated with apps that are slow, cluttered, or require repeated entry of delivery details. She wants a simple, fast way to order meals that fits seamlessly into her busy workday.",
    //       "Then Maria discovered SassyBlend. With saved addresses, one-click checkout, and options to schedule recurring meals, she can now grab lunch without breaking her focus — a quick, effortless solution that keeps her nourished and on schedule.",
    //     ],
    //   },
    //   {
    //     name: "Blessing Uche",
    //     image: "https://example.com/images/blessing-uche.jpg",
    //     summary: [
    //       "Blessing Uche is an undergraduate juggling lectures, assignments, and study sessions. Meals are often an afterthought, and she relies on quick, convenient food to fuel late-night study marathons or hurried breaks between classes.",
    //       "Slow apps, complicated checkout flows, or repeated address entry make ordering more stressful than helpful. She wants an experience that respects her time and energy.",
    //       "SassyBlend solves this by remembering her favorite meals, storing her addresses, and allowing scheduled or recurring orders. Blessing can now focus on her studies while staying well-fed, without the stress of inefficient ordering.",
    //     ],
    //   },
    //   {
    //     name: "Emeka Okafor",
    //     image: "https://example.com/images/emeka-okafor.jpg",
    //     summary: [
    //       "Emeka Okafor owns a small restaurant and spends hours managing orders, updating menus, and coordinating deliveries. His dream is to grow his business without getting buried under administrative chaos.",
    //       "He struggles with platforms that make tracking orders cumbersome and slow down customer communication, which limits the efficiency of his operations and frustrates both him and his clients.",
    //       "With SassyBlend, Emeka has a vendor-friendly dashboard, real-time order notifications, easy menu updates, and integrated delivery tracking. Now he can focus on cooking great meals while SassyBlend handles the complexity of running his delivery business smoothly.",
    //     ],
    //   },
    // ],
  },
];
