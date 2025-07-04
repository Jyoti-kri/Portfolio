
import img3 from "../assets/projects/talent.png";

import img2 from "../assets/projects/spam.png";

import img1 from "../assets/projects/mern.png";

export const HOME_CONTENT = `I'm a Full Stack Developer skilled in the MERN stack — MongoDB, Express.js, React.js, and Node.js. I specialize in building fast, scalable, and user-friendly web applications with clean architecture and responsive UI. Passionate about creating seamless digital experiences, I bring ideas to life with efficient, full-stack solutions. Let’s build something powerful together!`;

export const ABOUT_TEXT = `I'm currently pursuing my Bachelor's in Computer Science and Engineering at IEM Kolkata. As a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), I build responsive, scalable, and performance-driven web applications.
<br /><br/>
I’m skilled in both front-end and back-end development, with a strong understanding of RESTful APIs, dynamic UI design, and database management. I enjoy turning real-world problems into clean, efficient code and continuously upskill in modern tools and frameworks to stay ahead in the tech landscape.
<br /><br/>
My goal is to craft impactful digital experiences that are both user-centric and technically robust.`;

export const EXPERIENCES = [
  {
    year: "July-2025",
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    description: [
      "Built stopwatch and tic-tac-toe web applications using HTML, CSS, and JavaScript with clean, maintainable code.",
      "Developed a responsive navigation menu featuring smooth scroll and hover interactions for enhanced UX.",
      "Integrated Redis caching into APIs, implemented cache invalidation, and conducted performance benchmarking.",
      "Designed secure backend APIs for a hotel booking system with JWT-based authentication and database integration.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Redis", "JWT"],
  },
];


export const PROJECTS = [
  {
    title: "MERN E-Commerce Website",
    image: img1, // Replace with your actual image import
    link: "https://github.com/Jyoti-kri/MERN-PROJECT", // Replace with your repo link
    description:
      "A full-featured e-commerce platform with user and admin roles, JWT-based authentication, cart management, and order processing using the MERN stack.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
  },
  {
    title: "Spam Detection Using Machine Learning",
    image: img2, // Replace with your actual image import
    link: "https://github.com/Jyoti-kri/email-spam-detection", // Replace with your repo link
    description:
      "Developed a real-time spam detection system using TF-IDF and ML models like Naive Bayes and SVM. Deployed using Streamlit for a live user interface.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Numpy"],
  },
  {
    title: "TalentCrew: AI Recruitment Platform",
    image: img3, // Replace with your actual image import
    link: "https://github.com/Jyoti-kri/TalentCrew", // Replace with your repo link
    description:
      "Designed a recruitment automation platform integrating intelligent agents for resume screening, candidate engagement, and interview scheduling using modular architecture.",
    technologies: ["React", "Node.js", "MongoDB", "ChromaDB", "LangChain"],
  },
];
