import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/MoisesINMDeveloper",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/minmdeveloper/",
  },
  { name: "Twitter", icon: FaXTwitter, url: "https://x.com/MIMNDeveloper" },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://github.com/MoisesINMDeveloper",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/584124676968?text=Hola,%20acabo%20de%20ver%20tu%20portafolio,%20quisiera%20ponerme%20en%20contacto%20contigo.",
  },
];

export const AboutMe: {
  paragraphs: string;
  caption: string;
} = {
  paragraphs:
    "Desarrollador Fullstack nacido en Venezuela, con 4 años de experiencia. Mi camino en la tecnología comenzó como frontend developer, donde dominé HTML5, CSS y JavaScript. Luego, profundicé mis conocimientos con TypeScript y ReactJS, especialmente con NextJS, un framework que me permitió crear aplicaciones web dinámicas y eficientes. En el backend, me especialicé en Node.js con ExpressJS  y trabajo con bases de datos relacionales y no relacionales como PostgreSQL y MongoDB. Mi perfil como desarrollador es versátil y sólido, y estoy listo para seguir construyendo cosas increíbles.",
  caption: "Creo experiencias digitales atractivas y funcionales.",
};
export const Paragraphs: {
  title: string;
  image: { src: string }[];
  alt: string;
  paragraph: string;
  url: string;
  skills: { name: string }[];
}[] = [
  {
    title: "Trello App: Gestión de Tareas y Anotaciones",
    image: [
      { src: "/TrelloAppAppp.png" },
      { src: "/Trello.png" },
      { src: "/TrelloApp.png" },
      { src: "/TrelloDesktop.png" },
    ],
    alt: "App Trello Image",
    paragraph:
      "Trello App es una aplicación que permite a los usuarios gestionar tareas y anotaciones. Incluye registro de usuarios, verificación por correo electrónico, campos para título, descripción y estado de tareas, así como un apartado de comentarios. Actualmente, se encuentra en versión móvil y sigue en desarrollo.",
    url: "https://trello-v1-project-jlerifagu-moisesinmdevelopers-projects.vercel.app",
    skills: [
      { name: "NextJS" },
      { name: "Typescript" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "Where in the world?",
    image: [
      { src: "/Banderas.png" },
      { src: "/BanderasConSheldon.png" },
      { src: "/banderasDesktop.png" },
      { src: "/banderotas.png" },
    ],
    alt: "Where in the world images",
    paragraph:
      "Es un sitio web responsivo que te permite explorar información detallada sobre diferentes países. Utiliza datos simulados de un archivo JSON y ofrece funcionalidades como búsqueda, filtrado por regiones y una interfaz adaptada a dispositivos móviles y de escritorio.",
    url: "https://rest-countries-api-project-by-minmdev.netlify.app",
    skills: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Javascript" },
      { name: "Vite" },
    ],
  },
  {
    title: "Shortly Web-App",
    image: [
      { src: "/Acortador.png" },
      { src: "/AcortadorLink.png" },
      { src: "/shortly.png" },
      { src: "/banderotas.png" },
    ],
    alt: "Shortly web app images",
    paragraph:
      "Shortly es una página web que ofrece un servicio de acortamiento de enlaces. Permite a los usuarios reducir la longitud de cualquier URL larga y complicada en un enlace más conciso y fácil de compartir.",
    url: "https://moisesinmdeveloper.github.io/URL-shortening-API-landing-page/",
    skills: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Javascript" },
      { name: "Vite" },
    ],
  },
  {
    title: "Ip Address Tracker",
    image: [{ src: "/IPTracker.png" }, { src: "/ipTracketResponsive.png" }],
    alt: "Ip Tracker App images",
    paragraph:
      "Es una página web que permite rastrear direcciones IP y dominios en un mapa interactivo. Consumiendo una API externa, proporciona información detallada sobre la ubicación correspondiente, incluyendo detalles relevantes como la región y la zona horaria. Este proyecto demuestra mis habilidades en integración de mapas, trabajo con APIs externas y manipulación de datos para crear una experiencia visualmente atractiva en la interfaz de usuario.",

    url: "https://moisesinmdeveloper.github.io/ip-adress-tracker/",
    skills: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Javascript" },
      { name: "Vite" },
    ],
  },
];
