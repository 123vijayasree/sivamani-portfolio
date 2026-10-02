export const projects = [
  {
    id: "project-1",
    category: "Mobile App",
    title: "Rapido-Style Ride Booking App",
    description: "UI/UX design of bike and cab booking with ride selection, live tracking and fare display.",
    tags: ["Mobile App", "Figma", "Prototype"],
    image: "/projects/project-1.webp",
    figmaUrl: "https://www.figma.com/@sivamani",
    githubUrl: "", // hidden automatically if empty
    caseStudy: {
      tagline: "On-Demand Taxi & Bike Booking Interface",
      client: "Abservetech Private Limited Internship Project",
      duration: "3 Weeks",
      role: "UI/UX Design Intern",
      tools: ["Figma", "User Flows", "Prototyping", "Design System"],
      overview: "Designed both Passenger and Driver modules for a ride-hailing app, focusing on fast location selection, transparent fare breakdowns, and seamless trip tracking.",
      problem: "Users often face confusion with ambiguous fare estimates and complex vehicle selection steps during peak hours.",
      solution: "Created a 3-step booking funnel with clear pickup location pinning, fare comparison cards, and live driver matching status.",
      screens: [
        { name: "Home & Map View", desc: "Interactive map with driver pins and destination search." },
        { name: "Ride Selection", desc: "Vehicle cards showing ETA, estimated fare, and capacity." },
        { name: "Live Trip Tracking", desc: "Driver details, OTP verification, and real-time route path." }
      ],
      designSystem: {
        primaryColor: "#FFC700 (Rapido Yellow)",
        secondaryColor: "#111827 (Charcoal Black)",
        accentColor: "#4F46E5 (Indigo Accent)",
        fontFamily: "Inter (8pt Spatial Grid)",
        componentsCount: "35+ Figma Variants"
      }
    }
  },
  {
    id: "project-2",
    category: "Mobile App",
    title: "Food Court App",
    description: "Food ordering app with menu browsing, cart, checkout and order tracking.",
    tags: ["Mobile App", "Figma", "UX"],
    image: "/projects/project-2.webp",
    figmaUrl: "https://www.figma.com/@sivamani",
    githubUrl: "",
    caseStudy: {
      tagline: "Multi-Restaurant Digital Food Court Experience",
      client: "Self-Initiated Concept",
      duration: "2 Weeks",
      role: "UI/UX Designer",
      tools: ["Figma", "Wireframing", "Interactive Prototyping"],
      overview: "Designed a unified digital food court interface that allows users to order from multiple stalls in a single transaction, eliminating queue waiting times.",
      problem: "Long queues during lunch hours at food courts cause order delays and crowded counter spaces.",
      solution: "Developed visual dietary category chips, split-stall receipt drawers, and real-time order preparation status timers.",
      screens: [
        { name: "Outlet Explorer", desc: "Stall cards, food chips, and popular recommendations." },
        { name: "Custom Menu", desc: "Add-ons modal, portion controls, and dietary filters." },
        { name: "Unified Checkout", desc: "Multi-vendor cart and instant pickup token generator." }
      ],
      designSystem: {
        primaryColor: "#FF5722 (Tasty Orange)",
        secondaryColor: "#E91E63 (Crimson Accent)",
        accentColor: "#4CAF50 (Fresh Green)",
        fontFamily: "Inter / Rounded Cards",
        componentsCount: "28 Figma Components"
      }
    }
  },
  {
    id: "project-3",
    category: "Web & Mobile",
    title: "Online Marriage Service Application",
    description: "Platform for matrimony profiles and wedding services such as halls, catering and photography.",
    tags: ["Web & Mobile", "Figma", "UI Design"],
    image: "/projects/project-3.webp",
    figmaUrl: "https://www.figma.com/@sivamani",
    githubUrl: "",
    caseStudy: {
      tagline: "Matrimony & All-in-One Wedding Vendor Ecosystem",
      client: "Saiket Systems Internship Project",
      duration: "4 Weeks",
      role: "UI/UX & Web Solutions Intern",
      tools: ["Figma", "Responsive Web Breakpoints", "Design Systems"],
      overview: "Created a comprehensive web & mobile platform combining verified profile matching with end-to-end wedding service bookings.",
      problem: "Families struggle to manage separate portals for matchmaking and vendor reservations.",
      solution: "Engineered a unified responsive experience with search filters (Location, Budget, Rating) and instant quotation request forms.",
      screens: [
        { name: "Match Profiles", desc: "Compatibility highlights, verified badges, and quick interest actions." },
        { name: "Vendor Marketplace", desc: "Halls, catering packages, and photography portfolios." },
        { name: "Booking Drawer", desc: "Event date selection and instant quotation form." }
      ],
      designSystem: {
        primaryColor: "#800020 (Royal Burgundy)",
        secondaryColor: "#D4AF37 (Warm Gold)",
        accentColor: "#4F46E5 (Indigo Accent)",
        fontFamily: "Inter / Plus Jakarta Sans",
        componentsCount: "42 Figma Variants"
      }
    }
  },
  {
    id: "project-4",
    category: "IoT Dashboard",
    title: "Smart Remote Parking Sensor (SIH)",
    description: "Sensor-based smart parking system with real-time vehicle detection and remote availability monitoring.",
    tags: ["IoT", "Smart India Hackathon", "Dashboard UI"],
    image: "/projects/project-4.webp",
    figmaUrl: "https://www.figma.com/@sivamani",
    githubUrl: "https://github.com/sivasiva132419-lgtm",
    caseStudy: {
      tagline: "Smart India Hackathon Real-Time Parking System",
      client: "Smart India Hackathon National Project",
      duration: "3 Weeks",
      role: "Lead Designer & Frontend Developer",
      tools: ["Figma", "HTML5", "CSS3", "JavaScript", "SQL"],
      overview: "Designed and implemented an IoT smart parking management system that syncs sensor data to display real-time parking slot availability.",
      problem: "Urban drivers waste significant time searching for open parking spaces in crowded commercial zones.",
      solution: "Created a real-time floor grid map with color-coded slots (Green/Red), slot reservation countdown, and QR gate access.",
      screens: [
        { name: "Live Sensor Grid Map", desc: "Floor map updating every 2 seconds via sensor feed." },
        { name: "Slot Reservation", desc: "Vehicle number registration and arrival timer." },
        { name: "Admin Dashboard", desc: "Occupancy analytics, revenue charts, and sensor status." }
      ],
      designSystem: {
        primaryColor: "#00E676 (Neon Sensor Green)",
        secondaryColor: "#0A192F (Dark Cyber Navy)",
        accentColor: "#4F46E5 (Indigo)",
        fontFamily: "Inter / Fira Code",
        componentsCount: "30 Figma Components & Dev Code"
      }
    }
  }
];

export const codeProjectsData = [
  {
    name: "Skin Detection System Using CNN",
    description: "Python-based CNN image skin detection and classification system integrated with MySQL for efficient data storage and record management.",
    language: "Python",
    tags: ["Python", "CNN", "MySQL", "Deep Learning"],
    githubUrl: "https://github.com/sivasiva132419-lgtm",
    featured: true
  },
  {
    name: "vijay",
    description: "Web application development repository featuring responsive frontend layouts and JavaScript interactions.",
    language: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/sivasiva132419-lgtm/vijay",
    featured: true
  }
];
