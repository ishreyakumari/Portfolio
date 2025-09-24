/* Change this file tconst greeting = {
  // username: "ishreyakumari",
  title: "Hi all, I'm Shreya",
  subTitle: emoji(
    "Software Engineer specializing in test automation, AI integration, and backend systems. Currently pursuing my Master's in Computer Science at CSU East Bay with 4+ years of industry experience at Chegg and Infosys. Passionate about building scalable solutions and innovative tech products."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UlKHco5NqTGFJzQzQfdVhuefQM62Imp6/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
}; personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
    "Master’s student in Computer Science with experience in software testing, automation, and AI integration. Skilled in building test pipelines, working with LLMs, and developing intelligent systems. Passionate about backend development and innovative tech solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UlKHco5NqTGFJzQzQfdVhuefQM62Imp6/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github:   "https://github.com/Shreya18031997",
  linkedin: "https://www.linkedin.com/in/ishreyakumari/",
  gmail:    "ishreyakumari2022@gmail.com",
  display:  true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED SOFTWARE ENGINEER SPECIALIZING IN AUTOMATION, AI INTEGRATION & SCALABLE BACKEND SYSTEMS",
  skills: [
    emoji(
      "⚡ Build scalable backend systems and REST APIs using Python (FastAPI), Node.js with proven enterprise impact"
    ),
    emoji(
      "⚡ Design automation frameworks that reduce testing time by 30% and increase coverage by 45%"
    ),
    emoji(
      "⚡ Integrate AI/ML solutions including LLMs, computer vision, and robotics for real-world applications"
    ),
    emoji(
      "⚡ Deploy cloud solutions on AWS, Firebase with CI/CD pipelines and performance optimization"
    ),
    emoji(
      "⚡ Lead technical projects from concept to production with measurable business impact"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Test Automation",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "API Testing",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Playwright",
      fontAwesomeClassname: "fas fa-theater-masks"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      desc: "- Working as a research assistant in the field of AI and Robotics."
    },
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: require("./assets/images/guru_gobind.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2015 - May 2019",
      desc: "Ranked top 5% in the program. Took courses about Software Engineering, Web Security, Operating Systems etc."
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
      company: "Oatmeal AI",
      companylogo: require("./assets/images/oatmeal_logo.jpeg"),
      date: "Aug 2025 – Present",
      desc: "Contributed to the development of conversational AI agents and intelligent systems for agriculture-related applications, focusing on multi-agent responses and real-time API integration to enhance user experience and system efficiency.",
      descBullets: [
        "Assisted in designing and implementing conversational AI agents using Microsoft AutoGen, enhancing intelligent, multi-agent responses for agriculture-related queries",
        "Supported the integration of real-time external APIs, such as Open-Meteo, and contributed to Docker-based containerization and deployment, improving application efficiency",
        "Collaborated on building and refining a Streamlit-based interactive web interface and assisted in backend logic involving Azure OpenAI and Cosmos DB, enhancing user experience and data management"
      ]
    },
    {
      role: "Research Assistant (OSCAR Scholarship)",
      company: "California State University - East Bay",
      companylogo: require("./assets/images/east_bay.png"),
      date: "Oct 2024 – Present",
      desc: "Engineering and deploying advanced AI systems for robotic control, focusing on real-time autonomous navigation and language-to-hardware command translation. Developing robust sensor-data pipelines and feedback mechanisms for production-ready robotic applications.",
      descBullets: [
        "Engineered and deployed a Nano LLM on an AgileX robot to enable real-time, autonomous navigation and robotic control, translating high-level language commands into low-level hardware actions with minimal latency",
        "Developed robust sensor-data pipelines and feedback mechanisms to fine-tune LLM behavior in dynamic environments, enabling adaptive responses and reliable performance in resource-constrained, production-like conditions"
      ]
    },
    {
      role: "Software Engineer in Test",
      company: "Chegg Inc.",
      companylogo: require("./assets/images/chegg.png"),
      date: "June 2022 – July 2024",
      desc: "Developed and optimized automation frameworks for a platform serving millions of students globally. Led AI integration projects and streamlined testing processes that significantly improved system efficiency and user experience.",
      descBullets: [
        "Developed and optimized automation frameworks, reducing test execution time by 30% and increasing test coverage by 45%",
        "Implemented AI-driven automation for Chegg's QnA system, reducing student response time by 40% and improving engagement",
        "Streamlined file processing workflows by automating the Quality Workbench Self-Service Portal, decreasing processing time by 35%",
        "Collaborated closely with product and dev teams to integrate automation into CI/CD pipelines, accelerating release cycles and ensuring consistent quality across deployments"
      ]
    },
    {
      role: "Test Engineer",
      company: "Infosys Ltd",
      companylogo: require("./assets/images/infosys.png"),
      date: "Dec 2019 – May 2022",
      desc: "Established robust testing processes and automation frameworks for enterprise clients, leading quality assurance initiatives that significantly improved software delivery efficiency and reliability across multiple projects.",
      descBullets: [
        "Automated UI and API testing using Selenium and REST Assured, reducing manual efforts by 50% and cutting regression testing time by 40%",
        "Designed and implemented a Page Object Model (POM)-based automation framework, improving test maintainability and reducing script maintenance effort by 30%",
        "Optimized API validation processes, reducing API response validation time by 40% through automation and structured test case design",
        "Coordinated with cross-functional teams to conduct test case reviews and defect triaging, enhancing release quality and reducing post-production issues by 25%"
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
      image: require("./assets/images/cloud-mover.webp"),
      projectName: "Cloud Mover - Enterprise File Management Platform",
      projectDesc: "Full-stack cloud file management platform built with React and FastAPI, enabling seamless multi-account Google Drive integration and intelligent file operations.\n\n🔥 Key Features:\n• Multi-drive authentication and visualization\n• Automated file transfer optimization\n• AI-powered face recognition for photo tagging and search\n• Intelligent file categorization and storage optimization\n\n⚙️ Technical Stack:\n• Frontend: React with responsive design\n• Backend: FastAPI with RESTful APIs\n• Integration: Google Drive API\n• AI/ML: OpenCV-based face recognition\n• Database: PostgreSQL\n\n📊 Business Impact:\n• 70% reduction in file management time\n• 99.9% uptime for enterprise-scale operations\n• Efficient concurrent multi-user file operations",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://cloudmover.tech/"
        },
        {
          name: "GitHub",
          url: "https://github.com/Shreya18031997/CloudMover"
        }
        //  you can add extra buttons here.
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
      title: "ICPC'24 Pacific Northwest Regional - Rank 20",
      subtitle:
        "Achieved top 20 ranking in ICPC'24 Pacific Northwest regional programming contest among 200+ teams, demonstrating exceptional algorithmic problem-solving and competitive programming skills.",
      image: require("./assets/images/icpc.png"),
      imageAlt: "ICPC Logo"
    },
    {
      title: "Chegg Spot Award H2 2023",
      subtitle:
        "Recognized for exceptional performance and outstanding contributions to test automation and AI integration projects, directly impacting platform efficiency and user experience.",
      image: require("./assets/images/chegg.png"),
      imageAlt: "Chegg Spot Award Logo"
    },

    {
      title: "Global Hackathon Finalist & 2nd Place Winner",
      subtitle:
        "Secured 2nd position in Chegg India Hackathon 2023 and advanced as one of top 9 finalists in Chegg Global Hackathon 2023, showcasing innovation in educational technology solutions.",
      image: require("./assets/images/chegg.png"),
      imageAlt: "Chegg Hackathon Logo"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "ishreyakumari2022@gmail.com"
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
