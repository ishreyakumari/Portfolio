import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const greeting = {
  title: "Hi all, I'm Shreya",
  subTitle: emoji(
    "Software Engineer in Test with 4.5+ years of experience building automation frameworks for AI/ML pipelines and distributed systems. M.S. in Computer Science candidate (May 2026)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tPCrZcqig7nZX4Pq2fXaMndlUUyQ24yR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github:   "https://github.com/ishreyakumari/",
  linkedin: "https://www.linkedin.com/in/ishreyakumari/",
  gmail:    "ishreyakumari2026@gmail.com",
  display:  true
};

// Skills Section

const skillsSection = {
  title: emoji("What I do 🛠️"),
  subTitle: "Building automation frameworks for AI/ML pipelines, distributed microservices & high-scale platforms",
  skills: [
    emoji(
      "Build automation frameworks from scratch for AI/ML pipelines, distributed microservices, and high-scale web platforms"
    ),
    emoji(
      "Reduce regression time by 30–50% and improve release reliability through CI/CD integration"
    ),
    emoji(
      "Design REST and WebSocket contract validation pipelines for schema integrity and failure handling"
    ),
    emoji(
      "Implement performance and load testing with JMeter at 10k+ concurrent users for scalability improvements"
    ),
    emoji(
      "Drive production defect root cause analysis using Splunk and Datadog, reducing post-release incidents"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript/TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Playwright",
      fontAwesomeClassname: "fas fa-theater-masks"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "PyTest",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Splunk/Datadog",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University - East Bay",
      logo: require("./assets/images/east_bay.png"),
      subHeader: "Master of Science in Computer Science (GPA: 3.57)",
      duration: "August 2024 - May 2026",
      location: "Hayward, CA, USA",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Ch. Braham Prakash Government Engineering College",
      logo: require("./assets/images/guru_gobind.png"),
      subHeader: "Bachelor of Technology in Information Technology (GPA: 3.50)",
      duration: "August 2015 - May 2019",
      location: "Delhi, India",
      desc: "",
      descBullets: []
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer in Test – AI Systems",
      company: "Quneu",
      companylogo: require("./assets/images/quneu_logo.png"),
      companyUrl: "https://www.quneu.com/",
      date: "Jan 2026 – Present",
      location: "Fort Lauderdale, FL, USA",
      descBullets: [
        "Architected Playwright + PyTest API automation framework from zero in a greenfield startup, establishing backend regression standards across 10+ authentication and file-processing microservices",
        "Designed scalable folder structure, reusable fixtures, and environment config strategy enabling rapid test expansion across dev, staging, and prod",
        "Built validation suite for multipart uploads, bulk ingestion workflows, and async AI/ML pipelines processing 10k+ documents",
        "Integrated CI-based regression execution into GitHub Actions, reducing manual verification overhead by 60%"
      ]
    },
    {
      role: "Automation Engineer",
      company: "Oatmeal AI",
      companylogo: require("./assets/images/oatmeal_logo.jpeg"),
      companyUrl: "https://oatmealfarmnetwork.com/",
      date: "Aug 2025 – Dec 2025",
      location: "San Jose, CA, USA",
      descBullets: [
        "Built Playwright-based regression framework from scratch as sole QA engineer, defining test architecture for AI agent workflows and conversational APIs",
        "Designed REST and WebSocket contract validation pipelines to verify message sequencing, schema integrity, and failure handling across 5+ distributed services",
        "Integrated GitHub Actions + Docker CI automation, achieving 40% reduction in customer-facing errors through earlier defect detection",
        "Reduced mean time to detect (MTTD) from days to hours"
      ]
    },
    {
      role: "Software Development Engineer in Test",
      company: "Chegg Inc.",
      companylogo: require("./assets/images/chegg.png"),
      companyUrl: "https://www.chegg.com/",
      date: "Jun 2022 – Jul 2024",
      location: "India",
      descBullets: [
        "Scaled automated test coverage by 45% and cut regression execution time by 30% via CI parallelization across 20+ modules of a platform serving 4M+ users globally",
        "Led performance and load testing with JMeter at 10k+ concurrent users, directly contributing to a 20% scalability improvement",
        "Drove production defect root cause analysis using Splunk and Datadog, identifying recurring failure patterns and reducing post-release incidents by 35%"
      ]
    },
    {
      role: "Test Engineer (Automation)",
      company: "Infosys Ltd",
      companylogo: require("./assets/images/infosys.png"),
      companyUrl: "https://www.infosys.com/",
      date: "Jan 2020 – May 2022",
      location: "India",
      descBullets: [
        "Reduced manual regression effort by 50% and framework maintenance overhead by 30% through Java-based Page Object Model design across a 3-tier enterprise application",
        "Reduced post-production defects by 25% via structured defect triage, release checklists, and cross-team validation processes integrated into sprint cycles"
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Key Projects 🚀"),
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/api-automator.webp"),
      projectName: "API Automator",
      projectDesc: "Built data-driven REST API validation tool with schema contract verification, parameterized test execution, and JSON diff reporting. Supports multi-environment config and CI integration.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ishreyakumari/Document-and-API-Classifier"
        }
      ]
    },
    {
      image: require("./assets/images/cloud-mover.webp"),
      projectName: "CloudMover",
      projectDesc: "Developed and validated backend APIs for cloud file migration workflows, including authentication flows, permission boundary testing, and end-to-end data integrity checks.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ishreyakumari/CloudMover"
        },
        {
          name: "Live Demo",
          url: "https://cloudmover.tech/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Recognition 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "OSCAR Scholarship - CSU East Bay",
      organization: "CSU East Bay",
      date: "[2025-2026]",
      subtitle:
        "Awarded OSCAR Scholarship for excellence in AI-driven testing research. Recognized for outstanding contributions to automation testing and AI integration research.",
      image: require("./assets/images/east_bay.png"),
      imageAlt: "OSCAR Scholarship Logo"
    },
    {
      title: "Vice President - Society of Women Engineers - CSU East Bay",
      organization: "CSU East Bay",
      date: "[2024-2025]",
      subtitle:
        "Led chapter initiatives to promote women in STEM, organized technical workshops and networking events. Mentored 50+ students and increased chapter membership by 40% through outreach programs.",
      image: require("./assets/images/east_bay.png"),
      imageAlt: "SWE Logo"
    },
    {
      title: "Star Achiever Award - Chegg Inc.",
      organization: "Chegg Inc.",
      date: "2024",
      subtitle:
        "Recognized for outstanding contributions to automation and QA optimization in the Chegg AI Integration Project. Awarded for exceptional performance in delivering high-impact testing solutions.",
      image: require("./assets/images/chegg.png"),
      imageAlt: "Chegg Award Logo"
    },
    {
      title: "Best Innovator Award - Chegg Inc.",
      organization: "Chegg Inc.",
      date: "2022",
      subtitle:
        "Honored for developing scalable automation frameworks. Recognized for innovation in test automation and system optimization.",
      image: require("./assets/images/chegg.png"),
      imageAlt: "Chegg Innovation Award Logo"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1tPCrZcqig7nZX4Pq2fXaMndlUUyQ24yR/view?usp=sharing", // Set to empty to hide the button
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Interested in my work or want to discuss a project?\nI'd love to hear from you!\nReach out via email.",
  email_address: "ishreyakumari2026@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
