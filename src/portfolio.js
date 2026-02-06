import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  // username: "ishreyakumari",
  title: "Hi all, I'm Shreya",
  subTitle: emoji(
    "Results-driven Software Engineer in Test with over 4 years of experience in automation testing, QA frameworks, and CI/CD integration. Proven ability to design scalable test automation architectures using Playwright, Robot, Selenium, and REST Assured. Adept at enhancing product quality, improving release stability, and leading test strategy for AI-driven and cloud-native applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hb99EM0rwUhyXbdOxcdD3GLd3OdFEOGe/view?usp=drive_link", // Set to empty to hide the button
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
  title: "What I do",
  subTitle: "RESULTS-DRIVEN SOFTWARE ENGINEER IN TEST SPECIALIZING IN AUTOMATION, QA FRAMEWORKS & CI/CD INTEGRATION",
  skills: [
    emoji(
      "⚡ Design scalable test automation architectures using Playwright, Robot Framework, Selenium, and REST Assured"
    ),
    emoji(
      "⚡ Engineer end-to-end automation frameworks reducing execution time by 30% and increasing coverage by 45%"
    ),
    emoji(
      "⚡ Implement performance and load testing using JMeter and CloudTest, improving scalability and reliability"
    ),
    emoji(
      "⚡ Integrate automation suites into CI/CD pipelines (Jenkins, GitLab, GitHub Actions) for continuous testing"
    ),
    emoji(
      "⚡ Lead test strategy for AI-driven and cloud-native applications with comprehensive API validation"
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
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "REST Assured",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-paper-plane"
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
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
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
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "Relevant Courses: Advanced Algorithms, Cloud Technologies, Software Testing, Machine Learning, System Design.",
      descBullets: [
        "Research Assistant with OSCAR Scholarship focusing on AI-driven testing research",
        "Specialized in test automation and AI/ML integration"
      ]
    },
    {
      schoolName: "Ch. Braham Prakash Government Engineering College",
      logo: require("./assets/images/guru_gobind.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2015 - May 2019",
      desc: "Relevant Courses: Data Structures, Algorithms, Operating Systems, Database Management Systems.",
      descBullets: [
        "Strong foundation in computer science fundamentals and software engineering principles"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Automation", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI/ML", //Insert stack or technology you have experience in
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI/ML Intern",
      company: "Quneu",
      companylogo: require("./assets/images/quneu_logo.png"),
      date: "Jan 2026 – Present",
      descBullets: [
        "Designed and implemented Playwright-based API automation framework for testing backend microservices, including authentication, file upload, and bulk processing workflows",
        "Developed automated test cases covering login, registration, single/bulk file uploads (PDF, DOC, DOCX, Excel), and delete operations with comprehensive validation",
        "Performed manual API testing using cURL and Postman to validate endpoints, debug authentication flows, and verify multipart file upload behaviors",
        "Built reusable test fixtures and helper functions in PyTest to reduce code duplication by 60% and improve test maintainability"
      ]
    },
    {
      role: "AI/ML Intern",
      company: "Oatmeal AI",
      companylogo: require("./assets/images/oatmeal_logo.jpeg"),
      date: "Aug 2025 – Dec 2025",
      descBullets: [
        "Designed and implemented Playwright-based automation frameworks for testing AI agent interactions and data workflows, improving regression speed by 45%",
        "Automated validation pipelines for REST and WebSocket APIs used in conversational AI modules, ensuring consistent data flow across agents",
        "Reduced function and endpoint errors to ~10% and cut customer-side errors by 40% through advanced automation and real-time validation monitoring",
        "Integrated testing with CI/CD workflows using GitHub Actions and Docker, enabling continuous test execution on every deployment"
      ]
    },
    {
      role: "Software Engineer in Test",
      company: "Chegg Inc.",
      companylogo: require("./assets/images/chegg.png"),
      date: "Jun 2021 – Jul 2024",
      descBullets: [
        "Developed end-to-end automation frameworks using Robot and Selenium, reducing execution time by 30% and increasing coverage by 45%",
        "Implemented performance and load testing using CloudTest and JMeter, improving scalability and reducing peak load failures by 20%",
        "Automated file processing and workflow validation for the Quality Workbench Self-Service Portal, cutting manual testing time by 35%",
        "Integrated automation suites into CI/CD pipelines (Jenkins, GitLab) to ensure continuous regression testing and stable release cycles"
      ]
    },
    {
      role: "Test Engineer",
      company: "Infosys Ltd",
      companylogo: require("./assets/images/infosys.png"),
      date: "Jan 2020 – May 2021",
      descBullets: [
        "Automated UI and API testing using Selenium, TestNG, and REST Assured, improving testing efficiency and reducing manual efforts by 50%",
        "Developed POM-based automation frameworks, enhancing maintainability and reducing test maintenance effort by 30%",
        "Automated Xoserve's gas agency desktop application, optimizing workflows for billing and customer requests",
        "Collaborated with development teams for test reviews and defect triage, lowering post-production defects by 25%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/api-automator.webp"),
      projectName: "API Document Mapper: AI-Powered API Testing Tool",
      projectDesc: "An intelligent, AI-powered API testing tool that discovers and tests file-upload endpoints from Postman collections. Uses Google Gemini Vision for OCR and document classification, interprets upload errors with LLM reasoning, auto-retries with correct files, and generates comprehensive JSON reports.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ishreyakumari/Document-and-API-Classifier"
        }
      ]
    },
    {
      image: require("./assets/images/cloud-mover.webp"),
      projectName: "CloudMover: Google Drive Management Tool",
      projectDesc: "Developed backend APIs for secure file transfers and folder operations across Google Drive accounts. Performed API validation and functional testing for authentication, file movement, and deletion workflows. Built with React, FastAPI, Python, Docker, and Google Drive API integration.",
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
      title: "OSCAR Scholarship 2025 - CSU East Bay",
      subtitle:
        "Awarded OSCAR Scholarship for excellence in AI-driven testing research. Recognized for outstanding contributions to automation testing and AI integration research.",
      image: require("./assets/images/east_bay.png"),
      imageAlt: "OSCAR Scholarship Logo"
    },
    {
      title: "Star Achiever Award 2024 - Chegg Inc.",
      subtitle:
        "Recognized for outstanding contributions to automation and QA optimization in the Chegg AI Integration Project. Awarded for exceptional performance in delivering high-impact testing solutions.",
      image: require("./assets/images/chegg.png"),
      imageAlt: "Chegg Award Logo"
    },
    {
      title: "Best Innovator Award 2022 - Chegg Inc.",
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
    "https://drive.google.com/file/d/1hb99EM0rwUhyXbdOxcdD3GLd3OdFEOGe/view?usp=drive_link", // Set to empty to hide the button
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "ishreyakumari2026@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
