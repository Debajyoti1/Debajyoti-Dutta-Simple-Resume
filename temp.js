const test = {
  "@context": "https://schema.org",
  "@graph": [
    /* =======================
         WEBSITE
      ======================= */
    {
      "@type": "WebSite",
      "@id": "https://debajyotidutta.com/#website",
      url: "https://debajyotidutta.com/",
      name: "Debajyoti Dutta Portfolio",
      description:
        "Official portfolio of Debajyoti Dutta, Software Engineer and Full Stack Developer.",
      publisher: {
        "@id": "https://debajyotidutta.com/#person",
      },
      inLanguage: "en-US",
    },

    /* =======================
         PROFILE PAGE
      ======================= */
    {
      "@type": "ProfilePage",
      "@id": "https://debajyotidutta.com/#profilepage",
      url: "https://debajyotidutta.com/",
      name: "Debajyoti Dutta - Full Stack Developer Profile",
      description:
        "Professional profile of Debajyoti Dutta, Full Stack Developer.",
      isPartOf: {
        "@id": "https://debajyotidutta.com/#website",
      },
      mainEntity: {
        "@id": "https://debajyotidutta.com/#person",
      },
      about: {
        "@id": "https://debajyotidutta.com/#person",
      },
      inLanguage: "en-US",
    },

    /* =======================
         PERSON WITH TIMELINE ROLES
      ======================= */
    {
      "@type": "Person",
      "@id": "https://debajyotidutta.com/#person",
      name: "Debajyoti Dutta",
      url: "https://debajyotidutta.com/",
      image: "https://debajyotidutta.com/images/debajyoti-dutta.jpg",
      jobTitle: "Full Stack Developer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "B.P. Poddar Institute of Management & Technology",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "personal",
        email: "mailto:debajyotidutta@gmail.com",
        telephone: "+91-8617603395",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Google Cloud Platform",
        "Azure",
        "Python",
        "Redis",
        "Kafka",
        "RabbitMQ",
        "Prometheus",
        "Grafana",
        "Java",
        "Firebase",
        "SQL",
        "Linux",
        "DevOps",
        "Microservices",
        "REST API",
        "React Native",
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Full Stack Developer",
          occupationLocation: {
            "@type": "City",
            name: "Pune",
          },
          skills: [
            "React Web Development",
            "React Native Development",
            "Backend Development",
            "Node.js Express.js",
            "REST API Design",
            "Cloud Deployment",
            "Bug Fixing & Debugging",
            "Jira Documentation",
            "Agile & SDLC",
          ],
        },
      ],
      sameAs: [
        "https://github.com/Debajyoti1",
        "https://www.linkedin.com/in/debajyoti-dutta/",
        "https://www.facebook.com/debajyoti.dutta.1/",
      ],
    },

    /* =======================
         CURRENT EMPLOYER
      ======================= */
    {
      "@type": "Organization",
      "@id": "https://debajyotidutta.com/#organization-djinteractive",
      name: "DJ Interactive Labs Pvt. Ltd.",
      url: "https://djxlabs.co/",
      address: {
        "@type": "PostalAddress",
        postalCode: "411045",
        streetAddress: "Balewadi Highstreet, Baner, Pune, Maharashtra 411045",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: ["https://www.linkedin.com/company/digital-jalebi/"],
    },

    /* =======================
         PAST EMPLOYER
      ======================= */
    {
      "@type": "Organization",
      "@id": "https://debajyotidutta.com/#organization-cognizant",
      name: "Cognizant",
      url: "https://www.cognizant.com/",
      logo: "https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-1?fmt=png-alpha",
      sameAs: [
        "https://www.linkedin.com/company/cognizant/",
        "https://twitter.com/Cognizant",
        "https://en.wikipedia.org/wiki/Cognizant",
      ],
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
      },
    },

    /* =======================
         PROJECTS
      ======================= */
    {
      "@type": "ItemList",
      "@id": "https://debajyotidutta.com/#projects",
      name: "Projects by Debajyoti Dutta",
      itemListElement: [
        {
          "@type": "SoftwareSourceCode",
          position: 1,
          name: "URL Shortener",
          programmingLanguage: ["Python", "SQLite"],
          codeRepository: "https://github.com/Debajyoti1/url-shortner",
          description: "A URL shortener built using Python Flask and SQLite.",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 2,
          name: "Port Scanner",
          programmingLanguage: ["Rust"],
          codeRepository: "https://github.com/Debajyoti1/PortScanner-Rust",
          description: "High-performance TCP port scanner written in Rust.",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 3,
          name: "Library Management System",
          programmingLanguage: ["C#", "MySQL"],
          codeRepository:
            "https://github.com/Debajyoti1/Library-Management-System-Windows-Forms",
          description:
            "Library management system built using Windows Forms and MySQL.",
        },
      ],
    },
  ],
};
