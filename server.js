const express = require("express");
const bodyParser = require("body-parser");
const { careers } = require("./resources/careers");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Accueil

app.get("/", (request, response) => {
  response.render("index", {
    fullName: "Evelyne PHICH",
    quote: '"Curiosity keeps leading us down new paths."',
    activePage: "Accueil",
  });
});

// Parcours professionnel
for (let career of careers) {
  app.get(career.url, (request, response) => {
    response.render(career.page, {
      date: career.date,
      companyName: career.companyName,
      companyNameColor: career.companyNameColor,
      jobName: career.jobName,
      jobTasks: career.jobTasks,
      activePageNumber: career.activePageNumber,
      activeCareerBackground: career.activeCareerBackground,
      activePage: career.activePage,
    });
  });
}

// Projets personnels

app.get("/project/2", (request, response) => {
  response.render("project", {
    date: "02/2021",
    projectName: "Tic-Tac-Toe",
    projectNameColor: "rgb(196, 31, 31)",
    description:
      "A la recherche d'un petit jeu rapide à 2 pour passer le temps ?",
    link: "Par ici &#x2794;",
    linkToProject: "https://tic-tac-toe-evysgames.herokuapp.com/",
    logo:
      '<img class="logoTicTacToe" src="https://res.cloudinary.com/dvpcjyb48/image/upload/v1612905350/tic-tac-toe_gjrmla.png">',
    activePageNumber: 2,
    activePage: "Projets personnels",
  });
});
app.get("/project/1", (request, response) => {
  response.render("project", {
    date: "11/2020",
    projectName: "Les bonnes adresses d'Evy",
    projectNameColor: "rgb(241, 97, 97)",
    description:
      "A la recherche d'un endroit pour combler une petite ou une grosse faim ?",
    link: "Par ici &#x2794;",
    linkToProject: "https://les-bonnes-adresses-d-evy.herokuapp.com/",
    logo: '<div class="logoLesBonnesAdressesdEvy"> &#127836;</div>',
    activePageNumber: 1,
    activePage: "Projets personnels",
  });
});

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
