import {linkedin, resume, conveyorBelt, coursemanager  } from "../assets";

export const languages = [
  {label: "🇬🇧ENG", code: "EN"},
  {label: "🇫🇷FRA", code: "FR"},
  {label: "🇲🇽ESP", code: "ES"},
]

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