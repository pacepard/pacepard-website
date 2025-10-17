export type Mentor = {
  id: string;
  name: string;
  role: string;
  image: string;
  link: string;
  index: string;
};

export const mentorSection = {
  title: "Mentors",
  description:
    "During the working process, we perform regular fitting with the client because they are the only person who can feel whether a new suit fits or not.",
};

export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "MichaEL Tommy",
    role: "Founder, L’Orbe & UI/UX Consultant",
    image: "/hack-ogbomoso/Mr Tommy Picture.jpeg",
    link: "#",
    index: "_01",
  },
  {
    id: "mentor-2",
    name: "Ola Okegbemi",
    role: "Engineering Team Lead",
    image: "/hack-ogbomoso/Mr Ola.jpeg",
    link: "#",
    index: "_02",
  },
  {
    id: "mentor-3",
    name: "Dr. Adeyemi C. Aderinto",
    role: "Sales Manager",
    image: "hack-ogbomoso/Dr Aderinto.jpeg",
    link: "#",
    index: "_03",
  },
  {
    id: "mentor-4",
    name: "Jesudamilare“JD”Adesegun",
    role: "Co-founder Ennovate Lab",
    image: "hack-ogbomoso/JD.jpeg",
    link: "#",
    index: "_04",
  },
  {
    id: "mentor-5",
    name: "Olubunmi Sam",
    role: "Founder, Keila Technologies",
    image: "hack-ogbomoso/Olubunmi Sam .jpeg",
    link: "#",
    index: "_05",
  },
  {
    id: "mentor-6",
    name: "Oluwaseyi Abraham Olawale",
    role: "Founder, Genomac",
    image: "hack-ogbomoso/Abraham.jpeg",
    link: "#",
    index: "_06",
  },
  {
    id: "mentor-7",
    name: "Oluwaseyi Gbadebo",
    role: "Founder, Konkere  Designs",
    image: "hack-ogbomoso/MR Gbadebo Konkere.webp",
    link: "#",
    index: "_07",
  },
];
