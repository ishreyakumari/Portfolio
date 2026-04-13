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
    "SDET with 5+ years of experience owning automation and quality for distributed, microservice-based systems across UI, API, and data layers. Expertise in Playwright, Selenium, Appium, PyTest, and CI/CD with a strong focus on reliability and system-level validation. Proven track record of reducing regression cycles by 60%, improving defect detection by 40%, and strengthening release stability in high-scale environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1a2w49h0bj8su5xjeGoR4A5MYOGJG92Ym/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github:   "https://github.com/ishreyakumari/",
  linkedin: "https://www.linkedin.com/in/ishreyakumari/",
  gmail:    "ishreyakumari2026@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display:  true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle: "",
  number: "",
  email_address: "ishreyakumari2026@gmail.com"
};

// Skills Section

const skillsSection = {
  title: emoji("Technical Skills 🛠️"),
  subTitle: "",
  skills: [],

  softwareSkills: [
    {
      skillName: "Test Automation Architecture",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Distributed Systems Testing",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "CI/CD & Quality Engineering",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "End-to-End (E2E) Testing",
      fontAwesomeClassname: "fas fa-check-double"
    },
    {
      skillName: "Test Automation Framework Development",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "PyTest",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Playwright",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Selenium WebDriver",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Appium",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "REST Assured",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "TestNG",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "AI/LLM Testing",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Test Reliability Engineering (Flaky Test Reduction)",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Parallel Test Execution",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Contract Testing",
      fontAwesomeClassname: "fas fa-file-signature"
    },
    {
      skillName: "Schema Validation",
      fontAwesomeClassname: "fas fa-check-circle"
    },
    {
      skillName: "API Testing",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Backend Integration Testing",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Data Validation / ETL Testing",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
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
      skillName: "AWS (EC2, S3, Lambda, ECS)",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GitLab CI/CD",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Datadog",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Splunk",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript / TypeScript",
      fontAwesomeClassname: "fab fa-js"
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
      subHeader: "M.S. Computer Science (GPA: 3.57)",
      duration: "Aug 2024 - May 2026",
      location: "",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Ch. Braham Prakash Government Engineering College",
      logo: require("./assets/images/guru_gobind.png"),
      subHeader: "B.Tech Information Technology",
      duration: "Aug 2015 - May 2019",
      location: "",
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
      role: "Software Development Engineer in Test",
      company: "Quneu",
      companylogo: require("./assets/images/quneu_logo.png"),
      companyUrl: "https://www.quneu.com/",
      date: "Jan 2026 - Present",
      location: "",
      descBullets: [
        "Architected a distributed PyTest framework with parallel execution and service isolation across 10+ microservices, cutting regression time by 45% and eliminating environment-related flakiness.",
        "Drove a 40% improvement in pre-release defect detection by building CI/CD test orchestration in GitHub Actions with PR gating, automated failure diagnostics, and coverage reporting.",
        "Designed end-to-end validation strategies for AI-driven knowledge graph pipelines, reducing escaped defects by 30% by standardizing test data contracts and environment isolation across services."
      ]
    },
    {
      role: "Automation Engineer",
      company: "Oatmeal AI",
      companylogo: require("./assets/images/oatmeal_logo.jpeg"),
      companyUrl: "https://oatmealfarmnetwork.com/",
      date: "Aug 2025 - Dec 2025",
      location: "",
      descBullets: [
        "Owned and delivered a Playwright (TypeScript) framework covering UI, API, and WebSocket layers with modular, reusable components, reducing manual regression effort by 60%.",
        "Engineered parallel CI/CD pipelines with automated schema validation and contract testing for AI workflows, compressing validation cycles from hours to under 10 minutes.",
        "Eliminated flaky test failures in non-deterministic AI outputs by redesigning synchronization logic, retry strategies, and test isolation, improving suite reliability by 30%+."
      ]
    },
    {
      role: "Software Development Engineer in Test",
      company: "Chegg Inc.",
      companylogo: require("./assets/images/chegg.png"),
      companyUrl: "https://www.chegg.com/",
      date: "Jun 2022 - Jul 2024",
      location: "",
      descBullets: [
        "Owned full-stack quality engineering for a platform serving 4M+ users, reducing production defects by 35% through scalable UI, API, and data-layer automation.",
        "Uncovered critical system bottlenecks via JMeter and Locust performance testing at 10k+ concurrent users, directly informing infrastructure scaling decisions.",
        "Increased release velocity and data integrity by building SQL-based ETL validation pipelines and automating regression across 15+ distributed services in Jenkins CI/CD."
      ]
    },
    {
      role: "Test Engineer",
      company: "Infosys Ltd.",
      companylogo: require("./assets/images/infosys.png"),
      companyUrl: "https://www.infosys.com/",
      date: "Jan 2020 - May 2022",
      location: "",
      descBullets: [
        "Engineered Selenium (Python) and Appium frameworks using Page Object Model, scaling automation coverage to 80%+ across web and mobile platforms from near-zero baseline.",
        "Accelerated integration defect detection by building REST API test suites with REST Assured, shifting validation left and reducing QA cycle time by 25%."
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Projects 🚀"),
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/api-automator.webp"),
      projectName: "API Automator",
      projectDesc:
        "Python-based API automation framework with schema validation, reusable components, and CI/CD integration supporting parallel execution across environments.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ishreyakumari/API-Testing-Agent"
        }
      ]
    },
    {
      image: require("./assets/images/cloud-mover.webp"),
      projectName: "CloudMover",
      projectDesc:
        "Backend validation workflows for cloud data migration covering authentication, integration testing, and data integrity checks across distributed systems.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ishreyakumari/CloudMover"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "",
  subtitle: "",

  achievementsCards: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "",
  subtitle: "",
  resumeLink:
    "https://drive.google.com/file/d/1a2w49h0bj8su5xjeGoR4A5MYOGJG92Ym/view?usp=sharing",
  display: false
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
