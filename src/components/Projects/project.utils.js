import React from "react";
import { ALLSKILLS } from "../../utilities/skills";

export const ProjectTypes = [
  { label: "Featured", name: "Featured" },
  { label: "Full Stack", name: "Full stack" },
  { label: "Back End", name: "Back end" },
  { label: "Front End", name: "Front end" },
  { label: "Mobile App", name: "Mobile" },
];

export const AllProjects = [
  {
    category: ["Full Stack", "Back End", "FrontEnd", "Featured"],
    name: "YouTube Clone ",
    shortDescription: "Full Stack Web App",
    description:
      "To challenge my full stack coding skills , i decided to make a clone of YouTube. This is a very interesting project as it really tested my design, implementation and data management abilities",
    placeholderImage: "youtube-1.png",
    images: [
      "youtube-1.png",
      "youtube-2.png",
      "youtube-3.png",
      "youtube-4.png",
      "youtube-5.png",
      "youtube-6.png",
    ],
    stack: [
      ALLSKILLS["HTML5"],
      ALLSKILLS["Sass"],
      ALLSKILLS["Javascript"],
      ALLSKILLS["React"],
      ALLSKILLS["Redux"],
      ALLSKILLS["Firebase"],
      ALLSKILLS["Git"],
    ],
    functionalities: [
      <p>Clean Modern User Interface Design</p>,
      <p>Users can sign up and have channels</p>,
      <p>Implemented video upload functionality</p>,
      <p>Implemented profile update feature, upload profile pictures, etc</p>,
      <p>Users can subscribe and follow channels they like.</p>,
      <p>Users can like and leave comments on videos</p>,
      <p>Implemented voice to text functional to search for videos</p>,
    ],
    demoLink: "https://clone-b815b.firebaseapp.com/",
    realLink: "https://clone-b815b.firebaseapp.com/",
    gitHubLink: "https://github.com/developerEbukab/youtube-clone",
  },
  {
    category: ["FrontEnd", "Featured"],
    name: "OMINFOOD",
    shortDescription: "Front End Responsive Website Application",
    description:
      "Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal taste and nutritioonal needs",
    placeholderImage: "omnifood1.png",
    images: [
      "omnifood1.png",
      "omnifood2.png",
      "omnifood3.png",
      "omnifood4.png",
      "omnifood5.png",
      "omnifood6.png",
    ],
    stack: [
      ALLSKILLS["HTML5"],
      ALLSKILLS["Sass"],
      ALLSKILLS["Javascript"],
      ALLSKILLS["Firebase"],
      ALLSKILLS["Git"],
    ],
    functionalities: [
      <p>Clean Modern User Interface Design</p>,
      <p>Responsive web design for different screen resolutions</p>,
      <p>Used Javascript to make effects which are exculise to mobile users</p>,
      <p>
        Implemented latest CSS features like floats, flexbox, CSS Grid, etc
      </p>,
      <p>Users can signUp with their information</p>,
      <p>Tailored colour scheme combiantions</p>,
    ],
    demoLink: "https://e4anyi.netlify.app/",
    realLink: "https://e4anyi.netlify.app/",
    gitHubLink: "https://github.com/ifeanyiumeh/WEB-DEV",
  },
  {
    category: ["Back End", "Featured", "Full Stack"],
    name: "Crown Clothing ",
    shortDescription: "Full Stack E-commerce Store",
    description:
      "A Complete rich featured E-commerce online store. Users can sign up/ login, social login, browse different store collections,  add / remove / increment items in cart, make purchases, etc ",
    placeholderImage: "crown-clothing-4.png",
    images: [
      "crown-clothing-3.png",
      "crown-clothing-4.png",
      "crown-clothing-1.png",
      "crown-clothing-2.png",
      "crown-clothing-5.png",
      "crown-clothing-6.png",
      "crown-clothing-7.png",
      "crown-clothing-8.png",
    ],
    stack: [
      ALLSKILLS["HTML5"],
      ALLSKILLS["Sass"],
      ALLSKILLS["Javascript"],
      ALLSKILLS["React"],
      ALLSKILLS["Redux"],
      ALLSKILLS["Firebase"],
      ALLSKILLS["Stripe"],
      ALLSKILLS["Git"],
      ALLSKILLS["NodeJs"],
      ALLSKILLS["ExpressJs"],
    ],
    functionalities: [
      <p>
        I used Html5, Sass, and JSX to implement clean Modern User Interface
        Design
      </p>,
      <p>
        I used ReactJs and Styled-Components to create re-usable components and
        structure the application
      </p>,
      <p>I used Redux to implement state management</p>,
      <p>I used Redux Persist to remember items stored in cart</p>,
      <p>
        I used React Router Dom to implement multiple page routing and
        navigation
      </p>,
      <p>
        I used Firebase and it's API's to implement user authentication, data
        storage/fetching of store items
      </p>,
      <p>I used Stripe and it's API's to implement payment checkout</p>,
      <p>I used NodeJs & ExpressJs to implement REST API's</p>,
    ],
    demoLink: "https://crwn-fashion-clothing.herokuapp.com/",
    realLink: "https://crwn-fashion-clothing.herokuapp.com/",
    gitHubLink: "https://github.com/developerEbukab/crown-fashion",
  },
  {
    category: ["Front End", "Featured"],
    name: "Natours ",
    shortDescription: "Front End responsive website",
    description:
      "A Fully responsive website built with modern design and styling principle. Made to look good on different screen resolutions including Desktop, Tablet, mobile, etc   ",
    placeholderImage: "Natour-1.png",
    images: [
      "Natour-1.png",
      "Natour-2.png",
      "Natour-3.png",
      "Natour-4.png",
      "Natour-5.png",
      "Natour-7.png",
      "Natour-8.png",
      "Natour-9.png",
      "Natour-10.png",
    ],
    stack: [
      ALLSKILLS["HTML5"],
      ALLSKILLS["CSS3"],
      ALLSKILLS["Sass"],
      ALLSKILLS["Git"],
    ],
    functionalities: [
      <p>Clean Modern User Interface Design</p>,
      <p>Responsive web design for different screen resolutions</p>,
      <p>Implemented modern background HTML video</p>,
      <p>Form designed with custom inputs</p>,
      <p>Cool animations and transitions</p>,
      <p>
        Implemented latest CSS features like floats , flexbox , CSS Grid, etc
      </p>,
    ],
    demoLink: "https://developerebukab.github.io/Natours-website/",
    realLink: "https://developerebukab.github.io/Natours-website/",
    gitHubLink: "https://github.com/developerEbukab/Natours-website",
  },
  {
    category: ["Front End", "Featured"],
    name: "Nexter ",
    shortDescription: "Front End responsive website",
    description:
      "A Fully responsive website built with modern design and styling principle. Made to look good on different screen resolutions including Desktop, Tablet, mobile, etc   ",
    placeholderImage: "Nexter-1.png",
    images: ["Nexter-3.png", "Nexter-4.png", "Nexter-1.png", "Nexter-2.png"],
    stack: [
      ALLSKILLS["HTML5"],
      ALLSKILLS["CSS3"],
      ALLSKILLS["Sass"],
      ALLSKILLS["Git"],
    ],
    functionalities: [
      <p>Clean Modern User Interface Design</p>,
      <p>Responsive web design for different screen resolutions</p>,
      <p>Cool animations and transitions</p>,
      <p>
        Nice gallery of images arranged in grid view with CSS Grid properties
      </p>,
      <p>
        Implemented latest CSS features like floats , flexbox , CSS Grid, etc
      </p>,
    ],
    demoLink: "https://developerebukab.github.io/Nexter/",
    realLink: "https://developerebukab.github.io/Nexter/",
    gitHubLink: "https://github.com/developerEbukab/Nexter",
  },
  {
    category: ["Front End", "Featured"],
    name: "Trillo ",
    shortDescription: "Front End responsive website",
    description:
      "A Fully responsive website built with modern design and styling principle. Made to look good on different screen resolutions including Desktop, Tablet, mobile, etc   ",
    placeholderImage: "Trillo-4.png",
    images: ["Trillo-3.png", "Trillo-4.png"],
    stack: [
      ALLSKILLS["HTML5"],
      ALLSKILLS["CSS3"],
      ALLSKILLS["Sass"],
      ALLSKILLS["Git"],
    ],
    functionalities: [
      <p>Clean Modern User Interface Design</p>,
      <p>Responsive web design for different screen resolutions</p>,
      <p>Cool animations and transitions</p>,
      <p>
        Implemented latest CSS features like floats , flexbox , CSS Grid, etc
      </p>,
    ],
    demoLink: "https://developerebukab.github.io/Trillo/",
    realLink: "https://developerebukab.github.io/Trillo/",
    gitHubLink: "https://github.com/developerEbukab/Trillo",
  },
];
