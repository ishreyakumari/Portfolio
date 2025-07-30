/* Change this file to get your personal Portfolio */

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
  username: "ishreyakumari",
  title: "Hi all, I'm Shreya",
  subTitle: emoji(
    "A passionate AI Engineer / Quality Engineer 🚀 having an experience of automating different web and desktop applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github:   "https://github.com/Shreya18031997",
  linkedin: "https://www.linkedin.com/in/ishreyakumari/",
  gmail:    "ishreyakumari2022@gmail.com",
  gitlab:   "https://github.com/Shreya18031997",
  display:  true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE BACKEND & AUTOMATION ENGINEER EXPLORING AI AND SYSTEM INTEGRATIONS",
  skills: [
    emoji(
      "⚡ Build efficient backend systems and REST APIs using Python (FastAPI), Node.js"
    ),
    emoji(
      "⚡ Integrate cloud platforms and services like Google Drive API, Firebase, AWS"
    ),
    emoji(
      "⚡ Automate workflows with GitLab CI/CD, test pipelines, and intelligent agents"
    ),
    emoji(
      "⚡ Develop AI-powered tools and agents (e.g., Ollama, CrewAI, Fetch.ai) for automation and robotics"
    ),
    emoji(
      "⚡ Work on real-time systems and research projects involving robotics and Nano LLMs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Automation testing",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Performance testing",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      fontAwesomeClassname: "fab fa-python"
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
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "Working as research assistant in the field of AI and Robotics. Currently working on a project that involves real-time systems and robotics.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "August 2015 - May 2019",
      desc: "Ranked top 5% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
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
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2025 – Present",
      desc: "As a Research Assistant, I worked on integrating a Nano LLM (Ollama) with an AgileX robot to enable natural language-controlled object manipulation. The project involved building a vision-language pipeline that allowed the robot to understand prompts like “pick the item in front of me like this,” interpret visual context through a camera, and execute actions using motion planning with ROS and MoveIt. I combined LLM-driven intent parsing, object detection (YOLO), and robotic arm control to enable gesture-based interaction and autonomous task execution.",
      descBullets: [
        "Designed and implemented a pipeline to enable an AgileX robot to understand natural language prompts (e.g., “pick the item in front of me like this”) using a Nano LLM (Ollama) integrated with visual perception and robotic control.",
        "Leveraged vision-language models (LLaVA/MiniGPT-4), object detection (YOLO), and ROS MoveIt for real-time gesture imitation, motion planning, and autonomous arm-based object manipulation."
      ]
    },
    {
      role: "Software Engineer In Test",
      company: "Chegg",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "June 2022 – July 2024",
      desc: "At Chegg, I developed and optimized automation frameworks that reduced test execution time by 30% and increased test coverage by 45%. I implemented AI-driven automation for the QnA system, cutting student response time by 40% and boosting engagement. I also conducted load testing using JMeter and CloudTest to enhance system scalability and reduce failure rates by 20%. Additionally, I improved security compliance by 25% through network debugging and validation of firewall, IPS, IDS, and NAT configurations. I streamlined workflows by automating the Quality Workbench Self-Service Portal, reducing file processing time by 35%."
    },
    {
      role: "Test Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Dec 2019 – May 2022",
      desc: "I automated UI and API testing using Selenium and REST Assured, reducing manual efforts by 50% and cutting regression testing time by 40%. I designed and implemented a Page Object Model (POM)-based automation framework, which improved test maintainability and reduced script maintenance effort by 30%. By optimizing API validation processes through automation and structured test case design, I achieved a 40% reduction in response validation time. I also led client test case reviews and collaborated with cross-functional teams to ensure quality standards, resulting in a 25% improvement in defect resolution efficiency. Additionally, I conducted network security testing to strengthen overall system security."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Cloud Mover",
  subtitle: "Transfer files from one drive to another directly without downloading",
  projects: [
    {
      image: require("./assets/images/cloudMoverLogo.webp"),
      projectName: "Cloud Mover",
      projectDesc: "The Drive Project is a comprehensive cloud-based file management and optimization tool designed to enhance the usability of Google Drive. It allows users to log in with multiple Google accounts, visualize and manage their storage, and seamlessly transfer files between source and destination drives. Built using React for the frontend and FastAPI for the backend, the system includes intelligent features like file type segregation, deletion options post-transfer, and destination folder selection. A standout capability is the face recognition-based photo tagging and search, which automatically labels known individuals in images and enables quick retrieval by name. This project blends cloud APIs, AI-based face recognition, and user-friendly UI design to create an efficient and intuitive file management experience tailored especially for users juggling multiple Drive accounts.",
      footerLink: [
        {
          name: "Cloud Mover",
          url: "https://cloudmover.tech/",
          github: "https://github.com/Shreya18031997/CloudMover"
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ICPC’24 PacNW Regionalist (Rank 20)",
      subtitle:
        "Achieved rank 20 in ICPC’24 Pacific Northwest regional contest, showcasing problem-solving skills and competitive programming expertise.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
    },
    {
      title: "Spot Award H2 2023",
      subtitle:
        "Achieved Spot Award for exceptional performance in H2 2023.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
    },

    {
      title: "2nd Position in Hackathon 2024",
      subtitle:
        "Secured the 2nd position in Chegg India's Hackathon 2023 and has been selected as one of the top 9 finalists of Chegg Global Hackathon 2023",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
