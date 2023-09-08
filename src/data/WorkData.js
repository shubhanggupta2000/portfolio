import icons from "../subComponents/icons";

const findIconsData = (techStackArray) => {
  const filteredIconsData = icons
    .filter((icon) => techStackArray.includes(icon.name))
    .map((icon) => ({
      ...icon,
      options: {
        ...icon.options,
        size: parseInt(icon.options.size) / 2 + "px",
      },
    }));

  return filteredIconsData;
};

export const Work = [
  {
    index: 1,
    name: "Proshop",
    info: "An Ecommerce platform for people to buy and sell digital products 24*7. Fully featured shopping cart, product review, user profile and admin portal facility.",
    techStack: findIconsData([
      "React",
      "Redux",
      "Canva",
      "Javascript",
      "Express",
      "Nodemon",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/proshop_ecommerce",
    hostlink: "https://proshop-2.onrender.com/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1685812718/proshop_jflwbz.png",
  },
  {
    index: 2,
    name: "Gericht Restaurant",
    info: "A modern UI/UX restaurant landing page build with fundamental CSS properties with master flex & grid.",
    techStack: findIconsData(["React", "Javascript", "HTML", "CSS", "Netlify"]),
    githubUrl: "https://github.com/shubhanggupta2000/Restaurant_UI",
    hostlink: "https://fazevennom-gericht.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1685812719/gericht_oesnyv.png",
  },
  {
    index: 3,
    name: "YouTube 2.0",
    info: "A simple video streaming YouTube clone build with youtube API and MUI-5.",
    techStack: findIconsData(["React", "Material UI", "Axios", "Netlify"]),
    githubUrl: "https://github.com/shubhanggupta2000/youtube-clone",
    hostlink: "https://fazevennom-youtubeclone.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1685812687/youtube_k5zfq3.png",
  },
  {
    index: 4,
    name: "Closet",
    info: "An Ecommerce website with Sass and mobile first approach.",
    techStack: findIconsData(["React", "Material UI", "Netlify", "Sass"]),
    githubUrl: "https://github.com/shubhanggupta2000/Closet",
    hostlink: "https://fazevennom-closet-ecommerce.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1685812717/closet_xsbrwy.jpg",
  },
  {
    index: 5,
    name: "Shopify - Gadgets ecommerce",
    info: "A Sound gadget shop with stripe payment Integration.",
    techStack: findIconsData(["Three.js", "Javascript"]),
    githubUrl: "https://github.com/shubhanggupta2000/ecommerce",
    hostlink: "https://fazevennom-shoppify.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1685812719/ecommerce_oupeeu.png",
  },
  {
    index: 6,
    name: "Golds Gym",
    info: "Fitness app with the functionality to choose exercise categories and specific muscle groups.",
    techStack: findIconsData([
      "React",
      "Node",
      "Mongodb",
      "Heroku",
      "Postgres",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/Golds-gym",
    hostlink: "https://fazevennom-gym.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1685812718/gym_htpv79.png",
  },
  {
    index: 7,
    name: "Todo App",
    info: "A simple yet good looking todo list web-app.",
    techStack: findIconsData([
      "React",
      "Node",
      "Mongodb",
      "Heroku",
      "Postgres",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/todo",
    hostlink: "https://fazevennom-todo.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1685812718/todo_rjqtcs.png",
  },
];
