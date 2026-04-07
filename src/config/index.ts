import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ozkan Dogu — Senior Software Developer",
  author: "Ozkan Dogu",
  description:
    "Senior Software Developer based in Izmir, Turkiye. I build scalable frontend and full-stack products for global teams.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
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
    specialty: "Senior Software Developer",
    summary:
      "Senior Software Developer based in Izmir, Turkiye, delivering frontend and full-stack solutions for international teams.",
    email: "ozkandgu@gmail.com",
  },
  experience: [
    {
      company: "Seaborn Software",
      position: "Senior Frontend Developer",
      startDate: "Apr 2024",
      endDate: "Current",
      summary: [
        "Led the frontend development of a ship supply ERP startup product from inception to launch, helping secure investment and open new growth opportunities.",
        "Built feature-rich administrator dashboards that delivered actionable insights and operational tooling.",
        "Developed an in-platform support chat system for real-time communication and faster issue resolution.",
        "Implemented secure authentication and role-based authorization for reliable access control across user levels.",
      ],
    },
    {
      company: "Asendia",
      position: "Full Stack Developer",
      startDate: "Feb 2023",
      endDate: "Apr 2024",
      summary: [
        "Engineered scalable logistics management systems with .NET Core and Angular to improve operational efficiency.",
        "Developed a ticket management system that reduced issue resolution time by 25%.",
        "Contributed to routing comparison and operational process modules to improve logistics workflows.",
        "Built integration services for the Asendia USA project to coordinate communication with systems used in 15 countries.",
      ],
    },
    {
      company: "EPAM Systems",
      position: "Senior Frontend Developer",
      startDate: "Mar 2021",
      endDate: "Feb 2023",
      summary: [
        "Implemented headless commerce architectures to improve platform flexibility and scalability.",
        "Automated CI/CD pipelines with Jenkins, reducing deployment times and release errors.",
        "Optimized frontend performance with lazy loading, caching, and prefetching for faster page responsiveness.",
      ],
    },
    {
      company: "EPAM Systems",
      position: "Frontend Developer",
      startDate: "Mar 2019",
      endDate: "Mar 2021",
      summary: [
        "Managed daily production releases by monitoring metrics, triaging issues, and coordinating hotfixes.",
        "Wrote unit tests with Jasmine and helped maintain about 80% coverage on critical modules.",
        "Led development of a reusable UI component library with the design team for SAP Spartacus and Hybris apps.",
      ],
    },
    {
      company: "Eyedius Security Systems",
      position: "Freelance Frontend Developer",
      startDate: "TBD",
      endDate: "TBD",
      summary: [
        "Developed a single-page B2B platform to manage embedded security camera devices.",
        "Designed responsive admin panels and reusable UI components for device operations.",
        "Built real-time dashboards using SocketIO, Google Maps, and ngx-charts for live monitoring.",
        "Delivered cross-platform web solutions with strong accessibility across devices.",
      ],
    },
    {
      company: "Miya Automation And Barcode Systems",
      position: "Frontend Developer",
      startDate: "Jan 2018",
      endDate: "Mar 2019",
      summary: [
        "Designed and shipped a B2B marketplace and tire tracking application using Ionic.",
        "Ensured cross-platform compatibility and optimized performance across devices and operating systems.",
        "Contributed to daily production release rotations, including monitoring, triage, and hotfix coordination.",
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
      I am Ozkan Dogu, a Senior Software Developer focused on frontend architecture, product delivery, and scalable web applications. I currently work remotely from Izmir, Turkiye, and collaborate with international teams to build reliable user-facing systems.

      My recent work spans ERP platforms, logistics systems, and headless commerce solutions with Angular, TypeScript, .NET Core, and modern CI/CD workflows. I prioritize maintainable component systems, secure authentication flows, and measurable performance improvements.

      Education: Anadolu University (Management Information Systems) and Dokuz Eylul University (Computer Programming). Core skills include JavaScript, TypeScript, Angular, RxJS, NgRx, Vue, SocketIO, ASP.NET Core, Jenkins, SQL, and collaborative product tooling.

      Contact: ozkandgu@gmail.com | +90 (553) 214 66 81
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
