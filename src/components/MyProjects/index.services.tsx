import { ChatIcon } from "components/Icons/ChatIcon";
import { ListIcon } from "components/Icons/ListIcon";
import { PlantIcon } from "components/Icons/PlantIcon";
import { RamenIcon } from "components/Icons/RamenIcon";
import { RestaurantIcon } from "components/Icons/RestaurantIcon";
import { tags } from "components/Tags/index.services";

export const projects = [
  {
    icon: <PlantIcon />,
    title: "O'My Plant",
    date: "01/2022",
    description:
      "End-of-course project at O'clock in a team of 5 people : a web app that helps users to handle plant care.",
    projectLink: "https://o-my-plant.surge.sh/",
    gitHubLink: "https://github.com/O-clock-XIII/projet-10-o-my-plant",
    tags: [
      tags.javaScript,
      tags.react,
      tags.redux,
      tags.nodeJs,
      tags.express,
      tags.postgreSql,
    ],
  },
  {
    icon: <ChatIcon />,
    title: "Chatroom",
    date: "01/2022",
    description:
      "A chatroom web app that allows users to connect and send messages.",
    projectLink: "https://chatroom-d-evy.herokuapp.com/",
    gitHubLink: "https://github.com/evelyne-phich/chatroom",
    tags: [tags.javaScript, tags.react, tags.redux],
  },
  {
    icon: <ListIcon />,
    title: "To-do list",
    date: "12/2021",
    description:
      "A simple to-do list web app that allows users to add, follow and delete tasks.",
    projectLink: "https://to-do-list-d-evy.surge.sh/",
    gitHubLink: "https://github.com/evelyne-phich/to-do-list",
    tags: [tags.javaScript, tags.react],
  },
  {
    icon: <RamenIcon />,
    title: "Les bonnes recettes d'Evy",
    date: "10/2021",
    description:
      "A web app that stores some of my favorite recipes, so that I can find them easily whenever I want to cook or share them.",
    projectLink: "https://les-bonnes-recettes-d-evy.herokuapp.com/",
    gitHubLink: "https://github.com/evelyne-phich/les-bonnes-recettes-d-evy",
    tags: [
      tags.javaScript,
      tags.ejs,
      tags.nodeJs,
      tags.express,
      tags.postgreSql,
    ],
  },
  {
    icon: <RestaurantIcon />,
    title: "Les bonnes adresses d'Evy",
    date: "11/2020",
    description:
      "The first web app I ever coded that made me want to become a software engineer ! It gathers some good places where I've been eating that deserve to be shared.",
    projectLink: "https://les-bonnes-adresses-d-evy.herokuapp.com/",
    gitHubLink: "https://github.com/evelyne-phich/Les-bonnes-adresses-d-Evy",
    tags: [tags.javaScript, tags.ejs, tags.nodeJs, tags.express],
  },
];
