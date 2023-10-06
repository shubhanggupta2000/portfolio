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
      "Javascript",
      "Express",
      "Nodemon",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/proshop_ecommerce",
    hostlink: "https://proshop-2.onrender.com/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625027/nr0qyprtltvklibju6mb.png",
  },
  {
    index: 2,
    name: "SushiMan",
    info: "A captivating Sushi ordering landing page featuring custom animations, a stylish navigation bar, and a unique hero section",
    techStack: findIconsData([
      "React",
      "Redux",
      "Canva",
      "Javascript",
      "Express",
      "Nodemon",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/sushiman",
    hostlink: "https://sushiman-app.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625027/ck2gj2hqtt3bsfe4okbs.png",
  },
  {
    index: 3,
    name: "Gericht Restaurant",
    info: "A modern UI/UX restaurant landing page build with fundamental CSS properties with master flex & grid.",
    techStack: findIconsData(["React", "Javascript", "HTML", "CSS", "Netlify"]),
    githubUrl: "https://github.com/shubhanggupta2000/Restaurant_UI",
    hostlink: "https://fazevennom-gericht.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625029/vou4msfeaeehjbncuwor.png",
  },
  {
    index: 4,
    name: "YouTube 2.0",
    info: "A simple video streaming YouTube clone build with youtube API and MUI-5.",
    techStack: findIconsData(["React", "Material UI", "Axios", "Netlify"]),
    githubUrl: "https://github.com/shubhanggupta2000/youtube-clone",
    hostlink: "https://fazevennom-youtubeclone.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625031/cfrp0hr81dunqm47v04s.png",
  },
  {
    index: 5,
    name: "Closet",
    info: "An Ecommerce website with Sass and mobile first approach.",
    techStack: findIconsData(["React", "Material UI", "Netlify", "Sass"]),
    githubUrl: "https://github.com/shubhanggupta2000/Closet",
    hostlink: "https://fazevennom-closet-ecommerce.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625026/oujhtdvtmfk2lg1wtm76.png",
  },
  {
    index: 6,
    name: "Shopify Gadgets",
    info: "A Sound gadget shop with stripe payment integration & confetti effects.",
    techStack: findIconsData(["Three.js", "Javascript"]),
    githubUrl: "https://github.com/shubhanggupta2000/ecommerce",
    hostlink: "https://fazevennom-shoppify.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625028/guwuk0lekuflvhd8eto6.png",
  },
  {
    index: 7,
    name: "Golds Gym",
    info: "Fitness app with the functionality to choose exercise categories and specific muscle groups along with motion cards GIF.",
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
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625026/mu79mdpswechuzevxxhl.png",
  },
  {
    index: 8,
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
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625028/gnutpx6mau9ztupwkzya.png",
  },
  {
    index: 9,
    name: "Evolux",
    info: "A car rental website with smooth scrolling, captivating animations, and a delightful user interface.",
    techStack: findIconsData([
      "React",
      "Node",
      "Mongodb",
      "Heroku",
      "Postgres",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/evolux-car-website",
    hostlink: "https://evolux-car-website.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625026/pdz8kwh5tqqpvpsvwker.png",
  },
  {
    index: 10,
    name: "Movies Info",
    info: "A simple web-app that provides a brief overview of any of your favourite movies.",
    techStack: findIconsData([
      "React",
      "Node",
      "Mongodb",
      "Heroku",
      "Postgres",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/movies-info",
    hostlink: "https://fazevennom-movies-info.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625028/f6m9uylrerinpwc1ecoq.png",
  },
  {
    index: 11,
    name: "Quiz App",
    info: "An amazing quiz application build with React & Semantic-UI that lets you play fully customized quiz in your browser.",
    techStack: findIconsData([
      "React",
      "Node",
      "Mongodb",
      "Heroku",
      "Postgres",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/quiz-app",
    hostlink: "https://fazevennom-quiz-app.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625028/zbpum6fxvo0avriews2v.png",
  },
  {
    index: 12,
    name: "Shoppy Dashboard",
    info: "An admin panel with Dashboard, calender with reminders and many more features.",
    techStack: findIconsData([
      "React",
      "Node",
      "Mongodb",
      "Heroku",
      "Postgres",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/syncfusion-dashboard",
    hostlink: "https://fazevennom-syncfusion-dashboard.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625025/tz8kyqkssinfusokd7iv.png",
  },
];
