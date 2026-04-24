export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const SITE_URL = `https://christosam.github.io${BASE_PATH}`;

export const profile = {
  name: "Christo Sam Mathew",
  firstName: "Christo",
  title: "Flutter & Full-Stack Developer",
  tagline: "BLE · IoT · Device Integration",
  location: "Kochi, Kerala, India",
  email: "christomathew30@gmail.com",
  phone: "+91 9645571788",
  linkedin: "https://www.linkedin.com/in/christosammathew/",
  github: "https://github.com/christosam",
  summary:
    "Software developer with 4+ years of experience in web and mobile application development. Expertise in Flutter, BLE communication, and hardware-integrated systems. Skilled in building real-time applications, optimizing performance, and collaborating with cross-functional teams.",
  resumeHref: `${BASE_PATH}/resume.pdf`,
} as const;

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    items: ["Flutter", "Dart", "React", "Angular", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    items: [".NET", "ASP.NET MVC", "Web API", "Node.js"],
  },
  {
    title: "IoT & Device Integration",
    items: ["BLE", "TCP/IP Communication", "GStreamer", "Wi-Fi Streaming"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure App Services", "Azure Functions", "CI/CD", "Git"],
  },
  {
    title: "Databases",
    items: ["SQL Server", "MongoDB", "SQLite"],
  },
  {
    title: "Tools",
    items: ["Postman", "Selenium", "GitHub", "Azure DevOps"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  stack: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    name: "LazyBed",
    tagline: "Smart Bed Controller App",
    stack: ["Flutter", "BLE", "Dart"],
    bullets: [
      "Cross-platform app to control smart bed hardware over Bluetooth Low Energy.",
      "Real-time communication, pairing flows, and command handling for responsive UX.",
    ],
  },
  {
    name: "IP-Based Device Control System",
    tagline: "Network device control & diagnostics",
    stack: ["Node.js", "TCP/IP"],
    bullets: [
      "System to control and monitor devices over TCP/IP on local networks.",
      "Real-time bidirectional communication with diagnostic telemetry.",
    ],
  },
  {
    name: "3E Connect",
    tagline: "Real-time Video Streaming",
    stack: ["GStreamer", "Wi-Fi", "Flutter"],
    bullets: [
      "Apps for low-latency real-time video streaming from hardware devices.",
      "Optimized streaming pipeline and connectivity for reliable throughput.",
    ],
  },
  {
    name: "Shop Seller",
    tagline: "E-commerce Mobile App",
    stack: ["Flutter", "Firebase"],
    bullets: [
      "Mobile e-commerce app with product catalog and order management.",
      "Firebase Auth and Firestore for real-time data and secure sign-in.",
    ],
  },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
  freelance?: boolean;
};

export const experience: Role[] = [
  {
    company: "Digital Core Technologies",
    title: "Application Design Engineer",
    location: "Kochi",
    period: "Sep 2022 – Present",
    bullets: [
      "Built web, mobile, and desktop applications integrated with embedded systems.",
      "Delivered scalable modules using .NET, Node.js, and modern frontend frameworks.",
      "Collaborated with hardware teams for seamless device communication.",
      "Optimized performance, reliability, and responsiveness across applications.",
    ],
  },
  {
    company: "Futura Labs",
    title: "Flutter Developer / Trainer",
    location: "Calicut",
    period: "Mar 2022 – Aug 2022",
    bullets: [
      "Delivered Flutter training and mentored students on real-world projects.",
      "Improved code quality and app performance through reviews and best practices.",
    ],
  },
  {
    company: "Jo2Web Ltd",
    title: "Software Developer & UI Designer",
    location: "UK",
    period: "Apr 2020 – Mar 2022",
    freelance: true,
    bullets: [
      "Designed and developed responsive web and mobile applications.",
      "Created UI/UX designs and implemented scalable frontend systems.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "M.Sc. Computer Science",
    school: "Kannur University",
    period: "2020 – 2022",
  },
  {
    degree: "BCA",
    school: "University of Mysore",
    period: "2016 – 2019",
  },
];

export const navSections = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
