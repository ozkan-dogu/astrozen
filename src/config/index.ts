import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ozkan Dogu — Senior Software Engineer",
  author: "Ozkan Dogu",
  description:
    "Senior Software Engineer with 8+ years of full-stack experience. Angular, React, .NET Core, and Node.js — building scalable products for global teams from Izmir, Turkiye.",
  lang: "en",
  siteLogo: "/pp.jpg",
  canonicalURL: "https://ozkandogu.dev/",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/ozkan-dogu" },
  ],
  socialImage: "/zen-og.png",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ozkan Dogu",
    specialty: "Senior Software Engineer — Full Stack",
    summary:
      "Full stack engineer with 8+ years of end-to-end product ownership. Angular, React, Next.js on the frontend; C#, ASP.NET Core, Node.js on the backend. Shipped a complete ship-supply ERP from scratch, built platforms running across 15+ countries, and delivered for global brands including LEGO, Crate & Barrel, and AllSaints.",
    email: "ozkandgu@gmail.com",
  },
  experience: [
    {
      company: "Seaborn Software",
      position: "Senior Full Stack Developer",
      startDate: "Apr 2024",
      endDate: "Current",
      summary: [
        "Sole architect of a ship-supply ERP and WMS built from scratch — selected the full tech stack, owned end-to-end delivery across frontend and backend layers, and helped the product secure seed funding.",
        "Built Angular 17+ frontend with Signals-based reactive state and NgRx — multi-role workflow UIs, reactive forms, granular access control, and Figma-to-production component delivery.",
        "Designed and implemented RESTful API services, data models, and business logic with a clean layered architecture (service / repository / data layers).",
        "Implemented SocketIO-based live state sync across all roles and an IndexedDB (Dexie.js) offline data layer for resilient maritime operations.",
        "Built a Flutter cross-platform module for barcode scanning and warehouse inventory tracking.",
      ],
    },
    {
      company: "Asendia",
      position: "Full Stack Developer",
      startDate: "Feb 2023",
      endDate: "Apr 2024",
      summary: [
        "Designed and developed RESTful C# services in ASP.NET Core — typed request/response contracts, error handling middleware, and multi-region data synchronisation pipelines for logistics operations across 15+ countries.",
        "Optimised Entity Framework Core data models and migration strategies on PostgreSQL for high-volume international shipping data, achieving a 25% efficiency gain.",
        "Built a multi-module Angular application with NgRx state management, lazy-loaded feature modules, and a SASS design system consuming the .NET Core API layer.",
      ],
    },
    {
      company: "EPAM Systems",
      position: "Senior Frontend Developer",
      startDate: "Mar 2021",
      endDate: "Feb 2023",
      summary: [
        "Led Angular frontend tracks for Crate & Barrel and AllSaints using SAP Spartacus — defined API contracts with backend teams, conducted code reviews, and ran sprint planning in international Agile/Scrum.",
        "Built Jenkins CI/CD pipelines with automated build, lint, test, and deploy stages — cutting production release cycles by 40%.",
        "Improved Core Web Vitals (LCP, CLS, FID) via lazy loading, caching, and data prefetching on high-traffic global commerce platforms.",
      ],
    },
    {
      company: "Emakina",
      position: "Frontend Developer",
      startDate: "Mar 2019",
      endDate: "Mar 2021",
      summary: [
        "Delivered headless commerce for LEGO and CB2 using SAP Spartacus (Angular) and for Rivoli Shop using Vue Storefront (VueJS — Vue Router, Vuex, Axios) with ContentStack CMS integration.",
        "Built brand-aligned, Figma-accurate, Storybook-documented component libraries for three global and regional brands, enabling 30% faster cross-market delivery.",
        "Established Jasmine/Karma unit testing protocols maintaining 80%+ coverage on critical modules.",
      ],
    },
    {
      company: "Eyedius Security Systems",
      position: "Contract Frontend Developer",
      startDate: "Sept 2018",
      endDate: "Dec 2018",
      summary: [
        "Established Jasmine/Karma unit testing protocols achieving 80%+ coverage on critical modules.",
        "Built a Storybook component library and enforced ESLint/Prettier codebase standards across the project.",
      ],
    },
    {
      company: "Miya Automation And Barcode Systems",
      position: "Frontend Developer",
      startDate: "Jan 2018",
      endDate: "Mar 2019",
      summary: [
        "Built a live B2B security monitoring platform with SocketIO event feeds, Google Maps API device tracking, alert routing, and fleet status panels — with daily release rotation and production incident management.",
        "Delivered an end-to-end Ionic B2B mobile app (App Store / Play Store) with barcode scanning and IoT device integrations.",
      ],
    },
  ],
  projects: [
    {
      name: "Project details coming soon",
      summary:
        "Portfolio project details will be added after final project selection.",
      linkPreview: "/",
      linkSource: "https://linkedin.com/in/ozkan-dogu",
      image: "/spotifu.png",
    },
    {
      name: "Case study coming soon",
      summary:
        "This slot will be replaced with a real product case study and source links.",
      linkPreview: "/",
      linkSource: "https://linkedin.com/in/ozkan-dogu",
      image: "/shopify-clon.png",
    },
    {
      name: "Technical showcase coming soon",
      summary:
        "A detailed implementation-focused project entry will be added soon.",
      linkPreview: "/",
      linkSource: "https://linkedin.com/in/ozkan-dogu",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      I am Ozkan Dogu, a Senior Software Engineer with 8+ years of end-to-end product ownership — spanning modern frontend frameworks and robust backend services. I work remotely from Izmir, Turkiye, and collaborate with international teams across the UK, US, and Europe.

      My recent work includes architecting a complete ship-supply ERP and WMS from scratch at a seed-funded startup, building .NET Core APIs and Angular platforms running across 15+ countries, and leading enterprise frontend delivery for global brands including Crate & Barrel, AllSaints, LEGO, CB2, and Rivoli Shop.

      On the frontend I work with Angular 17+, React, Next.js, and Vue.js. On the backend: C#, ASP.NET Core, Entity Framework Core, Node.js, PostgreSQL, and GraphQL. Mobile: Flutter and Ionic. I bring a strong product mindset, CI/CD culture, and a track record of working autonomously in fully remote teams.

      Education: Dokuz Eylul University — Computer Programming (2018), Izmir, Turkiye.

      Contact: ozkandgu@gmail.com | +90 (553) 214 66 81
    `,
    image: "/pp.jpg",
  },
};

// #5755ff
