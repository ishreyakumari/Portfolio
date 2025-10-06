/* Change this file tconst greconst greeting = {
  // username: "ishreyakumari",
  title: "Hi all, I'm Shreya",
  subTitle: emoji(
    "Results-driven Software Engineer with expertise in AI-powered application development, automation, and cloud-native systems. Delivered solutions that improved performance by 40%, reduced deployment time by 30%, and enhanced system reliability in production. Skilled in designing scalable architectures and integrating LLMs and automation to build intelligent, high-performance applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UlKHco5NqTGFJzQzQfdVhuefQM62Imp6/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};  // username: "ishreyakumari",
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
  github:   "https://github.com/ishreyakumari/",
  linkedin: "https://www.linkedin.com/in/ishreyakumari/",
  gmail:    "ishreyakumari2022@gmail.com",
  display:  true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "RESULTS-DRIVEN SOFTWARE ENGINEER SPECIALIZING IN AI-POWERED APPLICATIONS, AUTOMATION & CLOUD-NATIVE SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and deploy intelligent multi-agent systems using Microsoft AutoGen and LLMs with 30% accuracy improvement"
    ),
    emoji(
      "⚡ Engineer scalable automation frameworks reducing test execution time by 30% and increasing coverage by 45%"
    ),
    emoji(
      "⚡ Develop AI-powered applications with real-time APIs, microservices, and cloud deployment for enhanced performance"
    ),
    emoji(
      "⚡ Build cloud-native solutions on AWS, Azure, and GCP with CI/CD pipelines and container orchestration"
    ),
    emoji(
      "⚡ Integrate computer vision, robotics, and sensor fusion for autonomous systems with 60% improved accuracy"
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
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-vial"
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
      desc: "Relevant Courses: Advanced Algorithms, Cloud Technologies, Machine Learning, AI, System Design, Software Engineering. Working as a research assistant in AI and Robotics with OSCAR Scholarship."
    },
    {
      schoolName: "Ch. Braham Prakash Government Engineering College",
      logo: require("./assets/images/guru_gobind.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2015 - May 2019",
      desc: "Relevant Courses: Data Structures, Algorithms, Operating Systems, Database Management Systems. Ranked top 5% in the program."
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
      desc: "Led a team of 5 engineers to design and deploy intelligent multi-agent systems using Microsoft AutoGen, achieving 30% accuracy improvement. Integrated real-time APIs and implemented scalable microservices architecture for cloud-ready deployment.",
      descBullets: [
        "Led a team of 5 engineers to design and deploy intelligent multi-agent systems using Microsoft AutoGen, enabling contextual AI-driven responses and improving accuracy by 30%",
        "Integrated real-time APIs (e.g., Open-Meteo) and implemented Docker-based microservices for scalable, cloud-ready deployment; ensured reliability through automated validation and monitoring",
        "Developed and optimized a Streamlit-based interactive interface and backend logic with Azure OpenAI and Cosmos DB, improving responsiveness and user–AI interaction"
      ]
    },
    {
      role: "Research Assistant (OSCAR Scholarship)",
      company: "California State University - East Bay",
      companylogo: require("./assets/images/east_bay.png"),
      date: "Oct 2024 – Present",
      desc: "Created and deployed Nano LLM model on NVIDIA Jetson with computer vision integration for real-time perception and motion control. Implemented Gemini Robotics framework achieving 60% improvement in detection accuracy and responsiveness.",
      descBullets: [
        "Created and deployed a Nano LLM model on NVIDIA Jetson, integrating with computer vision modules for real-time perception and low-level motion control",
        "Developed Python-based pipelines leveraging NVIDIA Jetson hardware acceleration to process image streams and integrate with LLM-driven motion planning for precise robotic navigation",
        "Implemented Gemini Robotics framework for adaptive control, optimizing algorithms to improve detection accuracy and responsiveness by 60%",
        "Built an optimized sensor data pipeline enabling real-time decision-making and autonomous actions with minimal latency"
      ]
    },
    {
      role: "Software Engineer in Test",
      company: "Chegg Inc.",
      companylogo: require("./assets/images/chegg.png"),
      date: "June 2022 – July 2024",
      desc: "Engineered scalable automation frameworks reducing test execution time by 30% and increasing coverage by 45%. Implemented AI-powered automation for Q&A system, reducing response latency by 40% and enhancing user engagement.",
      descBullets: [
        "Engineered scalable automation frameworks that reduced test execution time by 30% and increased coverage by 45%",
        "Implemented AI-powered automation for Chegg's Q&A system, reducing average response latency by 40% and enhancing user engagement",
        "Automated file processing workflows via the Quality Workbench Self-Service Portal, decreasing processing time by 35%",
        "Collaborated cross-functionally to integrate automation into CI/CD pipelines, accelerating release cycles and maintaining production stability"
      ]
    },
    {
      role: "Test Engineer",
      company: "Infosys Ltd",
      companylogo: require("./assets/images/infosys.png"),
      date: "Dec 2019 – May 2022",
      desc: "Automated UI and API testing using Selenium and REST Assured, reducing manual efforts by 50% and regression time by 40%. Developed POM-based automation framework improving maintainability and reducing maintenance effort by 30%.",
      descBullets: [
        "Automated UI and API testing using Selenium and REST Assured, reducing manual efforts by 50% and regression time by 40%",
        "Developed POM-based automation framework, improving maintainability and reducing maintenance effort by 30%",
        "Enhanced API validation processes and built structured test workflows, cutting response validation time by 40%",
        "Partnered with development teams for test reviews and defect triage, reducing post-production issues by 25%"
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
      projectName: "CloudMover: Smart Google Drive Manager",
      projectDesc: "Developed a dual-login Google Drive dashboard enabling intelligent file transfers between accounts with folder selection, face recognition–based photo tagging, and automated cleanup. Designed scalable APIs for secure cloud file management including authentication, image-based search, and deletion workflows.\n\n🔥 Key Features:\n• Dual Google Drive account integration\n• Face recognition-based photo tagging\n• Intelligent file transfers and cleanup\n• Secure cloud file management APIs\n\n⚙️ Technical Stack:\n• Frontend: React, Tailwind CSS\n• Backend: FastAPI, Python\n• Authentication: OAuth 2.0\n• APIs: Google Drive API\n• AI/ML: Face Recognition\n• Containerization: Docker\n\n📊 Business Impact:\n• Streamlined file management workflows\n• Enhanced security with OAuth 2.0\n• Automated photo organization and tagging",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ishreyakumari/CloudMover"
        },
        {
          name: "Live Demo",
          url: "#"
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
      title: "OSCAR Scholarship 2025 - CSU East Bay",
      subtitle:
        "Awarded OSCAR Scholarship for research excellence in AI-driven robotics. Recognized for outstanding academic performance and innovative research contributions in artificial intelligence and robotics integration.",
      image: require("./assets/images/east_bay.png"),
      imageAlt: "OSCAR Scholarship Logo"
    },
    {
      title: "ICPC 2024 PacificNW Regionalist - Rank 20",
      subtitle:
        "Achieved top 20 ranking among competitive programming teams in ICPC 2024 Pacific Northwest Regional contest, demonstrating exceptional algorithmic problem-solving and programming skills.",
      image: require("./assets/images/icpc.png"),
      imageAlt: "ICPC Logo"
    },
    {
      title: "2nd Prize - Chegg India Hackathon 2024",
      subtitle:
        "Won 2nd place in Chegg India Hackathon 2024 for developing an automation solution that improved workflow efficiency. Demonstrated innovation in educational technology and process optimization.",
      image: require("./assets/images/chegg.png"),
      imageAlt: "Chegg Hackathon Logo"
    },
    {
      title: "Star Achiever Award 2023 - Chegg Inc.",
      subtitle:
        "Recognized for outstanding contribution to test automation and cross-functional collaboration. Awarded for exceptional performance in delivering high-impact engineering solutions.",
      image: require("./assets/images/chegg.png"),
      imageAlt: "Chegg Award Logo"
    },
    {
      title: "Best Innovator Award 2022 - Chegg Inc.",
      subtitle:
        "Honored for driving process improvements and delivering high-impact engineering solutions. Recognized for innovation in automation frameworks and system optimization.",
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
    "https://drive.google.com/file/d/1UlKHco5NqTGFJzQzQfdVhuefQM62Imp6/view?usp=drive_link", // Set to empty to hide the button
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
