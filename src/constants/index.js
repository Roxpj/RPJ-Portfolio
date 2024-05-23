import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Captura1,
  brainstorm,
  empleatecontalento,
  mysql,
  CICE,
  factoriaf5,
  tritoma,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cybersecurity",
    icon: creator,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  /*  {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "mySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  /*  {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer and Cibersecurity",
    company_name: "Factoría F5",
    icon: factoriaf5,
    iconBg: "#fe4600",
    date: "October 2023 - Present",
    points: [
      "Developing web applications using React.js and other related technologies while integrating cybersecurity measures.",
      "Collaborating with other developers and leading projects to create high-quality products.",
      "Supported my team members in their learning process and resolving technical issues.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "CICE",
    icon: CICE,
    iconBg: "#E6DEDD",
    date: "2019",
    points: [
      "Designed mobile app, focusing on user interface (UI) and user experience (UX).",
      "Tailored the work to meet client specifications while aligning with the brand's visual identity and requirements.",
    ],
  },
  {
    title: "Workshop Instructor",
    company_name: "Virensis and Tritoma",
    icon: tritoma,
    iconBg: "#012e58",
    date: "4 years of experience",
    points: [
      "Created comprehensive workshop curricula centered on best practices.",
      "Successfully managed group dynamics, fostering participation, and addressing participant questions and concerns.",
      "Adapted workshop content to meet the needs and levels of participants, ensuring a personalized educational experience.",
      "Conducted regular assessments to measure participants progress and provided constructive feedback.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Brainstorm Marketplace",
    description:
      "Web-based platform that allows users to search, rent and buy IA and robotics related products from creators and developers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "orange-text-gradient",
      },
      {
        name: "nextjs",
        color: "violet-text-gradient",
      },
    ],
    image: brainstorm,
    source_code_link: "https://github.com/MigVarona/brainstorm",
    deploy_link: "https://brainstorm-psi.vercel.app/",
  },
  {
    name: "ToDoList",
    description:
      "This application is designed for organizing daily tasks, allowing you to add, mark as complete, edit, and delete them as needed. It features a dark mode for user preference.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Captura1,
    source_code_link: "https://github.com/Roxpj/ToDoList",
    deploy_link: "https://roxpj.github.io/ToDoList/",
  },
  {
    name: "Empléate con Talento ",
    description:
      "An interactive educational platform designed to boost user's professional and personal development with a combination of a chatbot and 3 unique games,designed to discover and amplify skills, interests, and career goals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "violet-text-gradient",
      },
      {
        name: "bcryptjs",
        color: "teal-text-gradient",
      },
      {
        name: "JWT",
        color: "orange-text-gradient",
      },
    ],
    image: empleatecontalento,
    source_code_link: "https://github.com/Isarok/EmpleateConTalentoFront",
    deploy_link: "https://empleate-con-talento-front.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
