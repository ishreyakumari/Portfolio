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
      role: "Research Assistant (OSCAR Scholarship)",
      company: "California State University - East Bay",
      companylogo: require("./assets/images/east_bay.png"),
      date: "Dec 2024 – Present",
      desc: "Leading cutting-edge research in AI-robotics integration by developing a vision-language pipeline that enables natural language control of robotic systems. Built an end-to-end solution combining Nano LLM (Ollama), computer vision (YOLO), and robotic control (ROS/MoveIt) to enable intuitive human-robot interaction through gesture-based commands.",
      descBullets: [
        "Architected a multimodal AI system integrating LLaVA/MiniGPT-4 for vision-language understanding",
        "Implemented real-time object detection and motion planning for autonomous robotic arm manipulation",
        "Reduced setup complexity for robotic tasks by 60% through natural language interface design"
      ]
    },
    {
      role: "Software Engineer In Test",
      company: "Chegg",
      companylogo: require("./assets/images/chegg.png"),
      date: "June 2022 – July 2024",
      desc: "Spearheaded automation initiatives that transformed testing efficiency and system performance for a platform serving 40M+ students globally. Led AI integration projects and performance optimization initiatives that directly improved user experience and platform reliability.",
      descBullets: [
        "Architected automation frameworks reducing test execution time by 30% and increasing coverage by 45%",
        "Implemented AI-driven automation for QnA system, cutting student response time by 40% and boosting engagement",
        "Conducted performance testing with JMeter/CloudTest, enhancing scalability and reducing failure rates by 20%",
        "Streamlined Quality Workbench workflows through automation, reducing file processing time by 35%",
        "Enhanced security compliance by 25% through network debugging and validation of enterprise infrastructure"
      ]
    },
    {
      role: "Test Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.png"),
      date: "Dec 2019 – May 2022",
      desc: "Established robust testing processes and automation frameworks for enterprise clients, leading quality assurance initiatives that significantly improved software delivery efficiency and reliability across multiple projects.",
      descBullets: [
        "Built comprehensive automation framework using Selenium & REST Assured, reducing manual efforts by 50%",
        "Designed Page Object Model (POM) architecture improving test maintainability and reducing maintenance by 30%",
        "Optimized API validation processes achieving 40% faster response validation times",
        "Led client test case reviews and cross-functional collaboration improving defect resolution by 25%",
        "Conducted network security testing strengthening enterprise system security posture"
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
      projectDesc: "Full-stack cloud file management platform built with React and FastAPI, enabling seamless multi-account Google Drive integration and intelligent file operations. ⚡Key Features: Multi-drive authentication and visualization, automated file transfer optimization, AI-powered face recognition for photo tagging and search, intelligent file categorization and storage optimization. ⚡Technical Stack: React frontend with responsive design, FastAPI backend with RESTful APIs, Google Drive API integration, OpenCV-based face recognition, PostgreSQL database. ⚡Business Impact: Reduces file management time by 70%, supports enterprise-scale operations with 99.9% uptime, handles concurrent multi-user file operations efficiently.",
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
