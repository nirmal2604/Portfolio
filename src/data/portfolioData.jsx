import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, 
  FaHtml5, FaCss3Alt, FaWordpress, FaFigma, FaJava,FaAws
} from 'react-icons/fa';

import { 
  SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, 
  SiCplusplus, SiPython, SiBootstrap, SiMysql, SiPostman, SiJira 
} from 'react-icons/si';


export const personalInfo = {
  name: "Nirmal Modi",
  title: "Full Stack Developer",
  email: "nirmalmodi2604@gmail.com",
  linkedin: "https://www.linkedin.com/in/nirmal-modi-1a7b212b7/",
  github: "https://github.com/nirmal2604",
  resumeLink: "https://drive.google.com/file/d/1zm0ZDTCfRnGQ3HoDERngjE_vcudzyr_t/view?usp=drive_link", // Make sure your resume is in public/
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "VIT Vellore",
    degree: "Bachelor of Technology in Computer Science Engineering",
    duration: "Aug 2022 – Sept 2026(expected)",
    score: "CGPA: 8.71",
  },
  {
    institution: "St. Xavier's High School",
    degree: "Class XII",
    duration: "June 2020 - April 2022",
    score: "81.5%",
  },
  {
    institution: "St. Xavier's High School",
    degree: "Class X",
    duration: "June 2018 - April 2020",
    score: "89.3%",
  },
];

export const projects = [
  {
    title: "ExamGuardian",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "TensorFlow.js", "Google Generative AI", ],
    description:
      "AI-powered online examination platform with secure proctoring, real-time monitoring, and advanced analytics. Features role-based access, cheating detection, and AI-generated performance insights for teachers and students.",
    date: "2025",
    githubLink: "https://github.com/nirmal2604/ExamGuardian",
    liveLink: "https://exam-guardian.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "AlgoFlow",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    description:
      "Interactive platform to visualize search algorithms, backtracking (N-Queens), and mathematical algorithms with step-by-step animations, pause/resume controls, and responsive UI.",
    date: "2024",
    githubLink: "https://github.com/nirmal2604/AlgoFlow_app",
    liveLink: "https://algo-flow-app.vercel.app/",
    category: "Frontend",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Face Recognition Attendance System",
    tech: ["Python", "Streamlit", "InsightFace", "Redis", "OpenCV", "ONNX"],
    description:
      "Real-time attendance marking system with face detection and recognition using ONNX models. Includes user registration, live recognition, and attendance reporting via a Streamlit interface.",
    date: "2024",
    githubLink: "https://github.com/nirmal2604/face-attendance-app",
    liveLink: "https://face-attendance-app-ak5ip5rebqkbek8uxsapar.streamlit.app/",
    category: "Computer Vision",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
  {
    title: "Driver Drowsiness Detection System",
    tech: ["Python", "OpenCV", "Dlib", "Arduino", "NumPy"],
    description:
      "Real-time driver drowsiness detection using facial landmarks and eye aspect ratio. Sends alerts via Arduino Uno with LCD display, buzzer, and LED when drowsiness or sleep is detected.",
    date: "2024",
    githubLink: "https://github.com/nirmal2604/Driver-Drowsiness-detection-",
    liveLink: null,
    category: "Computer Vision",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
  {
    title: "Emotion Recognition from Speech using MLPClassifier",
    tech: ["Python", "scikit-learn", "MLPClassifier", "MFCC", "Chroma", "Mel Spectrogram"],
    description:
      "Detects human emotions from speech using a Multi-Layer Perceptron trained on the RAVDESS dataset, utilizing MFCC, chroma, and mel spectrogram features. Achieved 86.98% test accuracy on classification of calm, happy, fearful, and disgust emotions.",
    date: "2025",
    githubLink: "https://github.com/nirmal2604/emotion-recognition",
    liveLink: null,
    category: "Machine Learning",
    icon: <SiPython size={24} className="text-accent-1"/>
  },
];


export const skills = {
  languages: [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> }
  ],
  frameworksAndLibraries: [
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "CoreUI", icon: <FaCode /> }
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Jira", icon: <SiJira /> }
  ],
  coreCompetencies: [
    "Data Structures & Algorithms",
    "Full Stack Development",
    "REST API Development",
    "Agile & Scrum",
    "Code Reviews",
    "Cloud Integration",
    "System Design"
  ]
};


export const leadershipAndInvolvement = [
  {
    role: "Frontend Intern",
    organization: "STL Digital",
    duration: "May 2025 – Jul 2025",
    points: [
      "Crafted and implemented dashboards and UI components for OMNI Dial Centre using React.js, Bootstrap, CoreUI, improving load times by 20%.",
      "Implemented real-time chat features, reducing bug reports by 15% with effective testing and Git workflows.",
      "Optimized API calls, enhancing performance by 10% during testing phases.",
    ],
  },
  {
    role: "Machine Learning Intern",
    organization: "Kalki NI",
    duration: "May 2024 – Jul 2024",
    points: [
      "Engineered SVM and Decision Tree models using Python, scikit-learn, pandas; achieved 85% accuracy on small datasets.",
      "Applied one-hot encoding for feature engineering, boosting model performance by 5% through cross-validation.",
      "Preprocessed 500+ data points, reducing errors by 10% with normalization and automated cleaning scripts.",
    ],
  },
];

export const certificationsData = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Foundational certification demonstrating cloud literacy and basic AWS cloud skills",
    credentialUrl: "https://drive.google.com/file/d/1ooSOsESIU63MJWVofCcGqgNmKPbBDukv/view?usp=drive_link",
    techStack: ["AWS", "Cloud Computing", "Cloud Security", "AWS Services"],
    category: "Cloud"
  },
  {
    id: 2,
    title: "MongoDB Developer Basics",
    issuer: "MongoDB University",
    date: "2024",
    description: "Fundamental MongoDB development skills and database operations",
    credentialUrl: "https://drive.google.com/file/d/1180Pp9Mm6fYSge-8Sv7iZzXRs9nO7LkA/view?usp=drive_link",
    techStack: ["MongoDB", "NoSQL", "Database Design", "CRUD Operations"],
    category: "Database"
  },
  {
    id: 3,
    title: "Career Essentials in Software Development",
    issuer: "Microsoft LinkedIn Learning",
    date: "2024",
    description: "Essential skills and knowledge for building a successful software development career",
    credentialUrl: "https://drive.google.com/file/d/1rtdOrnLFPG_2xjLKKF5LJAlK5NgRPJa6/view?usp=drive_link",
    techStack: ["Software Development", "Career Development", "Professional Skills", "Microsoft Technologies"],
    category: "Career"
  },
  {
    id: 4,
    title: "Oracle Cloud Database Services",
    issuer: "Oracle",
    date: "2024",
    description: "Comprehensive understanding of Oracle Cloud Database Services and management",
    credentialUrl: "https://drive.google.com/file/d/1uUU7WnIK6EJ9KUYVfinu_oojSUMIkFBF/view?usp=drive_link",
    techStack: ["Oracle Cloud", "Database Services", "Cloud Architecture", "Oracle SQL"],
    category: "Cloud"
  },
  {
    id: 5,
    title: "Technology Job Simulation",
    issuer: "Forage (Deloitte)",
    date: "July 2025",
    description: "Practical technology tasks simulation covering coding and development challenges",
    credentialUrl: "https://drive.google.com/file/d/1Q1XiHXP5KCxJ032Ue1lUXEg6tAuZV4pP/view?usp=drive_link",
    techStack: ["Coding", "Development", "Problem Solving", "Industry Experience"],
    category: "Experience"
  }
];



export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};