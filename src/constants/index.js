import {linkedin, resume, conveyorBelt, coursemanager  } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: resume,
    title: "Resume",
  },
];

export const skills = [
  {
    id: "C++",
    title: "C++",
  },
  {
    id: "Javascript",
    title: "Javascript",
  },
  {
    id: "PHP",
    title: "PHP",
  },
  {
    id: "Python",
    title: "Python",
  },
  {
    id: "Java",
    title: "Java",
  },
  {
    id: "Tailwind",
    title: "Tailwind",
  },
  {
    id: "MATLAB",
    title: "MATLAB",
  },
  {
    id: "React",
    title: "React",
  },
  {
    id: "MySQL",
    title: "MySQL",
  },
];
/*export const features = [
  {
    id: "feature-1",
    icon: binary,
    title: "Computer Science Projects",
    content:
      "From a Web Course Management System to a Dictionary creator, to this very website.",
  },
  {
    id: "feature-2",
    icon: gear,
    title: "Engineering Projects",
    content:
      "You like robots? Who doesn’t? Embedded systems, tesla coils and even a minigame.",
  },
  {
    id: "feature-3",
    icon: brush,
    title: "Other Projects",
    content:
      "Graphic Design, 3D modeling, and traditional art.",
  },
];*/

export const projects = [
  {
    id: "skill-1",
    image: conveyorBelt,
    title: "Conveyor Belt Automatization with Robotic arm",
    content: "Simulation of Robotic Arm  (RB12) in Coppelia Sim, interfaced with Matlab. Calculated the degrees of freedom for the robotic arm and programmed the behavior of the robot and conveyor belt to react to the signal from a proximity sensor.",
    skillsUsed:[
      "Matlab",
      "Coppelia",
      "Calculus",
    ],
  },
  {
    id: "skill-2",
    image: coursemanager,
    title: "Course Manager Web App",
    content: "Class Management System with three diferent versions of the website for teachers, TAs and Students. This app includes it's own mail client, chat, assingment creation and file management.",
    skillsUsed:[
      "PHP",
      "HTML",
      "CSS",
      "MySQL",
      "Javascript",
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];


export const greetings = [
  "Hi!",
  "Salut!",
  "Hola!",
  "Hello!",
  "Allô!",
  "Saludos!",
];