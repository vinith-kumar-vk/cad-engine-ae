// Static content and data definitions for CAD Engine

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits?: string[];
  details?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imagePath: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  location: string;
  year: string;
  imagePath: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  features: string[];
  benefits: string[];
  imagePath: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedIn: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// 6 Core Services for Home Page
export const homeServices: ServiceItem[] = [
  {
    id: "bim-consulting",
    title: "BIM Consulting",
    description: "End-to-end Building Information Modeling solutions from 3D modeling and coordination to clash detection and asset-rich digital twins.",
    iconName: "Layers"
  },
  {
    id: "cad-engineering",
    title: "CAD Engineering",
    description: "High-precision 2D drafting, 3D modeling, design documentation, and shop drawings conforming to international drafting standards.",
    iconName: "Compass"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Modernize legacy design pipelines with digital construction workflows, AI-driven automation, and intelligent engineering platforms.",
    iconName: "Cpu"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Design-collaboration cloud infrastructure set up, CDE (Common Data Environment) configuration, and secure remote drafting environments.",
    iconName: "Cloud"
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Agile, technology-enabled project control, scheduling, 4D/5D BIM simulation, and lifecycle costing solutions for complex projects.",
    iconName: "Briefcase"
  },
  {
    id: "corporate-training",
    title: "Corporate Training",
    description: "Tailored professional upskilling and certification programs in CAD, BIM, and engineering applications for corporate engineering teams.",
    iconName: "GraduationCap"
  }
];

// Detailed Services by Category
export const detailedServices = {
  bim: {
    title: "BIM Services",
    description: "Optimizing the lifecycle of your buildings with state-of-the-art Building Information Modeling.",
    items: [
      {
        id: "bim-modeling",
        title: "BIM Modeling (LOD 100 - 500)",
        description: "Developing highly detailed intelligent 3D architectural, structural, and MEP models.",
        benefits: ["Improved visualization", "Accurate material takeoffs", "Enhanced design coordination"],
        iconName: "Database"
      },
      {
        id: "bim-coordination",
        title: "BIM Coordination",
        description: "Multi-disciplinary model federation and design coordination workflows.",
        benefits: ["Interdisciplinary alignment", "Reduced design revisions", "Streamlined workflow pipeline"],
        iconName: "GitMerge"
      },
      {
        id: "clash-detection",
        title: "Clash Detection & Resolution",
        description: "Automated spatial interference check and collaborative dispute resolution prior to construction.",
        benefits: ["Pre-construction error detection", "Zero on-site rework", "Substantial cost and time savings"],
        iconName: "Zap"
      },
      {
        id: "digital-twin",
        title: "Digital Twin Solutions",
        description: "Connecting operational sensors and asset data with interactive spatial models for intelligent FM.",
        benefits: ["Real-time building analytics", "Predictive maintenance scheduling", "Long-term operational efficiency"],
        iconName: "Activity"
      }
    ]
  },
  cad: {
    title: "CAD Services",
    description: "Delivering precise CAD drafting and detail engineering drawing services for absolute clarity.",
    items: [
      {
        id: "2d-drafting",
        title: "2D Drafting & Detailing",
        description: "Clean, detailed, and standard-compliant blueprints, sections, elevations, and floor plans.",
        benefits: ["High precision layouts", "Full standard compliance", "Perfect print-ready vectors"],
        iconName: "FileText"
      },
      {
        id: "3d-modeling",
        title: "3D CAD Modeling",
        description: "Constructing exact solid, surface, and mesh models for design verification and marketing.",
        benefits: ["Realistic design checks", "Rapid prototyping exports", "High-fidelity rendering foundation"],
        iconName: "Box"
      },
      {
        id: "design-documentation",
        title: "Design Documentation",
        description: "Compiling comprehensive drawing sheets, schedules, specifications, and permit sets.",
        benefits: ["Fast regulatory approvals", "Clear installer guidelines", "Consistent cross-sheet reference"],
        iconName: "ClipboardList"
      },
      {
        id: "shop-drawings",
        title: "Fabrication & Shop Drawings",
        description: "Highly detailed shop-level fabrication drawings for steel structure, MEP spooling, and precast elements.",
        benefits: ["Direct workshop inputs", "Minimized assembly failures", "Exact material cutting schedules"],
        iconName: "Settings"
      }
    ]
  },
  engineering: {
    title: "Engineering Consulting",
    description: "Combining structural integrity, sustainable design, and smart infrastructure engineering.",
    items: [
      {
        id: "structural-eng",
        title: "Structural Engineering",
        description: "Structural design, loading calculations, FEA analysis, and foundation planning for high-rises and complex facilities.",
        benefits: ["Maximum structural safety", "Optimized steel/concrete weights", "Advanced seismic configurations"],
        iconName: "Shield"
      },
      {
        id: "mep-eng",
        title: "MEP Engineering",
        description: "Energy-efficient mechanical, electrical, plumbing, and fire protection design services.",
        benefits: ["Optimized HVAC thermal loads", "Sustainable power distribution", "Intelligent life safety design"],
        iconName: "Wind"
      },
      {
        id: "infra-planning",
        title: "Infrastructure Planning",
        description: "Consulting for utility corridors, transportation networks, site grading, and civil infrastructure projects.",
        benefits: ["Scalable public utility integration", "Eco-friendly drainage planning", "Traffic and transport alignment"],
        iconName: "Map"
      }
    ]
  },
  technology: {
    title: "Technology Services",
    description: "Accelerating your engineering processes with custom digital integration and modern software architectures.",
    items: [
      {
        id: "ai-solutions",
        title: "AI & Design Automation",
        description: "Custom scripts, plugins, and AI agents automating repetitive drafting, parameter checking, and optimization.",
        benefits: ["Up to 80% time savings", "Standardization enforcement", "Dynamic generative layouts"],
        iconName: "Sparkles"
      },
      {
        id: "data-analytics",
        title: "Data Analytics & BI",
        description: "Transforming design metadata, cost sheets, and project logs into dynamic business intelligence dashboards.",
        benefits: ["In-depth project insights", "Predictive budgeting", "Visual schedule-risk mapping"],
        iconName: "BarChart3"
      },
      {
        id: "cloud-infra",
        title: "Cloud Infrastructure Setup",
        description: "Deploying secure global common data environments (CDE) and virtual design workstation environments.",
        benefits: ["Secure global collaboration", "Zero server latency lags", "Centralized, backed-up assets"],
        iconName: "HardDrive"
      },
      {
        id: "digital-transformation-tech",
        title: "Digital Transformation consulting",
        description: "Advising enterprise firms on migrating from paper-based and legacy CAD tools to advanced cloud-integrated BIM standardizations.",
        benefits: ["Seamless digital roadmap", "Minimized migration downtime", "Maximized workforce adoption"],
        iconName: "RefreshCw"
      }
    ]
  }
};

// 6 Industry Sectors
export const industries: IndustryItem[] = [
  {
    id: "architecture",
    title: "Architecture & Design",
    description: "Powering architectural imagination with responsive 3D BIM models, schematic layouts, and photorealistic visualizations.",
    iconName: "Home",
    imagePath: "/images/banner.jpg"
  },
  {
    id: "construction",
    title: "Construction & Contracting",
    description: "Empowering general contractors with coordinated shop drawings, accurate clash resolution reports, and 4D logistics simulations.",
    iconName: "Hammer",
    imagePath: "/images/about-2.jpg"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Product",
    description: "Delivering detailed sheet metal shop drawings, precise machine components modeling, and parametric product libraries.",
    iconName: "Factory",
    imagePath: "/images/about-1.png"
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Civil",
    description: "Designing roads, bridges, public transit tunnels, and vast water networks with integrated GIS and civil engineering CAD datasets.",
    iconName: "Milestone",
    imagePath: "/images/banner.jpg"
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description: "Developing complex piping layouts (P&ID), electrical single-line designs, and facility models for solar plants, wind, and oil fields.",
    iconName: "Flame",
    imagePath: "/images/about-2.jpg"
  },
  {
    id: "education",
    title: "Education & Research",
    description: "Upskilling the next generation of engineers with structured, professional curriculum-based CAD and BIM learning pathways.",
    iconName: "GraduationCap",
    imagePath: "/images/about-1.png"
  }
];

// 6 Why Choose Us Cards
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "team",
    title: "Experienced Team",
    description: "Our staff consists of certified BIM managers, chartered structural engineers, and elite design technicians with global exposure.",
    iconName: "Users"
  },
  {
    id: "global",
    title: "Global Delivery Model",
    description: "With hub offices in major technology centers including Dubai, we support seamless, round-the-clock global delivery pipelines.",
    iconName: "Globe"
  },
  {
    id: "innovation",
    title: "Innovation Driven",
    description: "We actively invest in building custom AI script plugins and design automated models to stay ahead of the digital curve.",
    iconName: "Lightbulb"
  },
  {
    id: "methodology",
    title: "Proven Methodologies",
    description: "Our standardized execution checklists, rigorous clash protocols, and QA gates guarantee error-free submittals.",
    iconName: "ClipboardCheck"
  },
  {
    id: "success",
    title: "Customer Success Focus",
    description: "We embed ourselves as a true extension of your engineering wing, offering direct communication lines and active project updates.",
    iconName: "Heart"
  },
  {
    id: "scalable",
    title: "Scalable Solutions",
    description: "Whether you need a single draftsperson for a weekend shift or a team of 40 modelers for a mega-airport project, we scale instantly.",
    iconName: "TrendingUp"
  }
];

// 6 Featured Projects
export const featuredProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Al-Maktoum Airport Extension",
    category: "BIM Coordination",
    description: "Comprehensive MEP clash detection and structural model federation for the passenger terminal expansion project.",
    client: "National Aviation Authority",
    location: "Dubai, UAE",
    year: "2025",
    imagePath: "/images/banner.jpg"
  },
  {
    id: "proj-2",
    title: "Eco-Tech Industrial Park",
    category: "Infrastructure Planning",
    description: "Master-planned utility layout engineering and sustainable storm water piping network design covering 500 hectares.",
    client: "Green Development Group",
    location: "Abu Dhabi, UAE",
    year: "2024",
    imagePath: "/images/about-2.jpg"
  },
  {
    id: "proj-3",
    title: "Marina Heights Residences",
    category: "Architecture & MEP",
    description: "Full LOD 400 BIM modeling and shop drawings for a 65-story luxury residential skyscraper.",
    client: "Amanah Properties",
    location: "Dubai Marina, UAE",
    year: "2025",
    imagePath: "/images/about-1.png"
  },
  {
    id: "proj-4",
    title: "District Smart Cooling Plants",
    category: "CAD Detailing",
    description: "Extremely detailed fabrication structural steel shop drawings and piping spool isometric layouts for three cooling hubs.",
    client: "Emirates Cool Tech",
    location: "Sharjah, UAE",
    year: "2023",
    imagePath: "/images/banner.jpg"
  },
  {
    id: "proj-5",
    title: "Gulf Rail Transit Corridor",
    category: "BIM Infrastructure",
    description: "Digital Twin modeling integrating real-time vibration sensors directly onto structural bridge piers.",
    client: "Federal Rail Network",
    location: "Abu Dhabi, UAE",
    year: "2026",
    imagePath: "/images/about-2.jpg"
  },
  {
    id: "proj-6",
    title: "Innovation Academy Hub",
    category: "Corporate Training & BIM",
    description: "Provided a dedicated CAD/BIM custom educational setup and trained 250+ project engineers in advanced Autodesk solutions.",
    client: "Emaar Education Group",
    location: "Dubai, UAE",
    year: "2024",
    imagePath: "/images/about-1.png"
  }
];

// 5 Testimonials
export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Hassan Al-Jamil",
    role: "Project Director",
    company: "Arabian Construction Corp",
    quote: "CAD Engine transformed our approach to coordination. Their BIM clash resolution saved us at least 6 weeks of on-site rework and kept our sub-contractors completely aligned. True professionals.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sarah Miller",
    role: "Lead Architect",
    company: "Nexus Design Studio",
    quote: "The team's speed and absolute precision in CAD drafting are unparalleled. We frequently offload complex construction permit documentation sets to CAD Engine, and they deliver flawless results every single time.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Amit Patel",
    role: "VP of Digital Construction",
    company: "BuildGlobal Ltd",
    quote: "Their AI and automation scripts reduced our drawing generation times dramatically. CAD Engine isn't just a drafting shop, they are elite design-technology partners.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Elena Rostova",
    role: "Operations Head",
    company: "Siberia Heavy Industries",
    quote: "We utilized CAD Engine for structural steel fabrication shop drawings. The coordination with our workshop CNC machines was direct and clean. Project completed 10% under budget.",
    rating: 5
  },
  {
    id: "test-5",
    name: "Tareq Al-Suwaidi",
    role: "Director of HR & Development",
    company: "Municipal Works Department",
    quote: "Our engineers completed CAD Engine's customized corporate training program. The curriculum was highly relevant, and our team's BIM modeling throughput improved immediately by 40%.",
    rating: 5
  }
];

// 4 SaaS Products
export const products: ProductItem[] = [
  {
    id: "smartbim-platform",
    title: "SmartBIM Platform",
    tagline: "The cloud central command for all your building data.",
    overview: "SmartBIM Platform is a secure, cloud-based Common Data Environment (CDE) that connects CAD drafts, federated BIM models, specifications, and issues into a single, high-speed collaboration environment. It supports instant browser-based 3D viewing, markup overlay, and automated compliance auditing.",
    features: [
      "Zero-install browser BIM viewer supporting RVT, IFC, DGN, and DWG.",
      "Automated quality-gate checker to enforce national BIM guidelines.",
      "Integrated issue tracking with BCF file support linking directly to Revit.",
      "Real-time team markup tools with document version comparison sliders."
    ],
    benefits: [
      "Unifies client, architect, and contractor communications.",
      "Reduces software licensing overheads for non-drafting managers.",
      "Guarantees that all field crew work on the active, approved sheet."
    ],
    imagePath: "/images/banner.jpg"
  },
  {
    id: "constructiq",
    title: "ConstructIQ",
    tagline: "AI-driven 4D scheduling and project cost estimation.",
    overview: "ConstructIQ parses 3D models and automatically matches design components against cost directories and project timelines. By leveraging advanced Machine Learning algorithms, it generates intelligent 4D scheduling simulations and 5D cost-estimation forecasts to optimize resource distribution on-site.",
    features: [
      "Instant quantity takeoff (QTO) extraction directly from model nodes.",
      "Automatic construction schedule generator based on similar historical models.",
      "Interactive 4D timeline simulation showing exact building growth stages.",
      "Dynamic cost fluctuation warning linking to global commodity databases."
    ],
    benefits: [
      "Eliminates hours of manual quantity extraction and Excel spreadsheets.",
      "Identifies logistic sequencing bottlenecks before machinery is deployed.",
      "Provides transparent material forecasts to lock in prices early."
    ],
    imagePath: "/images/about-2.jpg"
  },
  {
    id: "designflow",
    title: "DesignFlow",
    tagline: "CAD drafting automation script library and workflow manager.",
    overview: "DesignFlow integrates directly inside AutoCAD, Civil 3D, and MicroStation as a floating command bar. It enforces company-wide layer conventions, automates key title block modifications, automatically references sheet indexing, and exports clean, lightweight permit-ready PDFs with a single key press.",
    features: [
      "Automated standard-compliance scanning with direct 'Quick Fix' suggestions.",
      "Batch drawing publisher that automatically binds, purges, and scales sheets.",
      "Integrated layer mapping engine translating legacy files to client specs.",
      "Global sheet-set manager syncing titles, revisions, and stamps in seconds."
    ],
    benefits: [
      "Saves senior detailers up to 12 hours a week of boring housekeeping.",
      "Ensures zero drawings leave the studio violating quality standards.",
      "Standardizes output format configurations across internal teams."
    ],
    imagePath: "/images/about-1.png"
  },
  {
    id: "assetvision",
    title: "AssetVision",
    tagline: "Turn design-phase models into high-performing digital twins.",
    overview: "AssetVision is a digital twin bridge program. It strips heavy geometric meshes, extracts essential COBie structural details, and imports them directly into operational asset management databases. Connecting live sensor APIs allows facilities managers to control smart systems through an interactive structural interface.",
    features: [
      "One-click COBie spreadsheet exporter supporting standard asset schemas.",
      "Interactive 3D building visual interface optimized for light mobile tablets.",
      "API connections to common SCADA, HVAC, and IoT occupancy sensors.",
      "Visual overlay of heat maps, active alarms, and room occupancy schedules."
    ],
    benefits: [
      "Ends the painful 'handover gap' where building data is lost in folders.",
      "Permits operational facilities control through intuitive spatial interfaces.",
      "Speeds up response times for maintenance teams by showing exact valve sites."
    ],
    imagePath: "/images/banner.jpg"
  }
];

// Product Comparison Matrix
export const productComparison = {
  features: [
    { name: "Browser BIM Viewing", smartBIM: true, constructIQ: true, designFlow: false, assetVision: true },
    { name: "Quantity Takeoff (QTO)", smartBIM: false, constructIQ: true, designFlow: false, assetVision: false },
    { name: "4D Logistics Simulation", smartBIM: false, constructIQ: true, designFlow: false, assetVision: false },
    { name: "Standard Checking", smartBIM: true, constructIQ: false, designFlow: true, assetVision: false },
    { name: "Layer Batch Conversion", smartBIM: false, constructIQ: false, designFlow: true, assetVision: false },
    { name: "IoT Sensor Integration", smartBIM: false, constructIQ: false, designFlow: false, assetVision: true },
    { name: "COBie Data Extraction", smartBIM: true, constructIQ: false, designFlow: false, assetVision: true },
    { name: "Mobile App Access", smartBIM: true, constructIQ: true, designFlow: false, assetVision: true }
  ],
  products: ["SmartBIM Platform", "ConstructIQ", "DesignFlow", "AssetVision"]
};

// Timeline events for About Page
export const timelineEvents: TimelineEvent[] = [
  {
    year: "2006",
    title: "Founding in Dubai",
    description: "CAD Engine was established as a high-precision CAD drafting agency in Dubai, serving local architectural firms with standard building permit blueprints."
  },
  {
    year: "2011",
    title: "Transition to BIM (LOD-based modeling)",
    description: "Fully adopted Building Information Modeling workflows. Expanded team to include certified Revit professionals and MEP coordination managers."
  },
  {
    year: "2016",
    title: "Global Projects & Civil Infrastructure Division",
    description: "Began consulting on multi-billion dollar mega airports and transit links. Opened regional support offices to facilitate 24/7 delivery."
  },
  {
    year: "2020",
    title: "Design Automation & Proprietary SaaS",
    description: "Invested in R&D to launch custom CAD automation tools and digital twin platforms, transforming into a tech-driven engineering consultant."
  },
  {
    year: "2024",
    title: "AI Integration & ISO 19650 Certification",
    description: "Achieved global ISO standards for digital building information. Integrated predictive generative design tools and AI-driven model checks."
  },
  {
    year: "2026",
    title: "Smart Digital Twins & Digital Construction",
    description: "Positioned as the leading authority in digital twin integrations, managing over 50M+ square feet of live IoT-connected building assets."
  }
];

// Leadership Team
export const leadershipTeam: LeadershipMember[] = [
  {
    id: "lead-1",
    name: "Dr. Fareed Al-Shamsi",
    role: "Founder & Chief Executive Officer",
    bio: "With over 25 years of structural engineering experience in UAE and London, Dr. Fareed holds a PhD in Construction Management and guides the company's long-term digital strategy.",
    linkedIn: "https://linkedin.com"
  },
  {
    id: "lead-2",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    bio: "A pioneer in BIM workflow development, Marcus was previously a lead product architect at Autodesk. He heads our product engineering, digital twin development, and scripting team.",
    linkedIn: "https://linkedin.com"
  },
  {
    id: "lead-3",
    name: "Laila Bin-Faris",
    role: "Director of Operations & BIM Services",
    bio: "Laila supervises our large 150+ drafting and modeling expert crew. She ensures rigorous quality audits, ISO compliance, and seamless project handovers on major municipal extensions.",
    linkedIn: "https://linkedin.com"
  },
  {
    id: "lead-4",
    name: "John Devereux",
    role: "Head of Professional Education",
    bio: "John leads CAD Engine's upskilling academy, coordinating CAD and BIM learning models with corporate organizations, universities, and regulatory authorities globally.",
    linkedIn: "https://linkedin.com"
  }
];

// Product FAQs for Products page
export const productFaqs: FaqItem[] = [
  {
    question: "Do your products integrate with standard CAD and BIM software?",
    answer: "Yes. All our products are designed with native APIs that integrate seamlessly with major solutions like Autodesk Revit, AutoCAD, Civil 3D, Bentley MicroStation, Navisworks, and standard IFC/BCF formatting files."
  },
  {
    question: "Is data stored in the SmartBIM Platform secure?",
    answer: "Absolutely. All documents, drawings, and models are hosted on secure, cloud servers compliant with SOC 2 Type II and ISO 27001 data protection standards, including fine-grained role-based permissions."
  },
  {
    question: "Can we request custom plugin integrations for our proprietary software?",
    answer: "Yes, our engineering technology services team specialize in developing custom scripts, add-ons, and database integrations tailored specifically to your enterprise's internal systems."
  },
  {
    question: "What support models are available for enterprise product subscriptions?",
    answer: "We offer 24/7 dedicated email and phone support, personal account managers, custom onboarding training workshops, and SLA guarantees for all our enterprise software subscriptions."
  }
];

// General/Contact FAQs
export const generalFaqs: FaqItem[] = [
  {
    question: "What information do you need to prepare an engineering or BIM project proposal?",
    answer: "To provide a detailed estimate, we typically require any initial architectural schematic drawings, client project standards/LOD directives, scope requirements, and key deadlines. You can submit these directly via our contact form."
  },
  {
    question: "How does your global delivery model work for remote drafting?",
    answer: "We establish a secure connection using our cloud CDE platforms. Work is allocated to certified specialists and undergoes multi-stage checks, ensuring constant project updates and overnight deliveries."
  },
  {
    question: "Do you offer on-site engineering consulting or training?",
    answer: "Yes, while our design execution is centralized, we deploy our BIM managers, consultants, and corporate instructors on-site for coordination meetings, project scoping, and intensive corporate upskilling programs."
  },
  {
    question: "Is CAD Engine certified to ISO 19650 guidelines?",
    answer: "Yes. CAD Engine is fully certified to ISO 19650 Parts 1 and 2, which are the international guidelines for managing information over the whole life cycle of a built asset using BIM."
  }
];
