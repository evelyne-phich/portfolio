const express = require("express");
const bodyParser = require("body-parser");

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
  });
});

// Parcours professionnel

app.get("/career/5", (request, response) => {
  response.render("career", {
    date: "09/2019 - Aujourd'hui",
    companyName: "LCL",
    companyNameColor: "rgb(248, 194, 15)",
    jobName: "Analyste comptable",
    jobTasks: [
      "Fiabilisation des alimentations du système comptable",
      "Écritures d'inventaire et corrections suite à d'éventuels dysfonctionnements",
      "Clôture mensuelle avec analyse des variations (résultat/bilan)",
      "Contrôle comptable, justification des comptes et surveillance des suspens",
      "Participation à des projets comptables/réglementaires (ex : IFRS 16)",
    ],
    activePageNumber: 5,
    activeCareerBackground: "/css/career-5.css",
  });
});
app.get("/career/4", (request, response) => {
  response.render("career", {
    date: "10/2017 - 09/2019",
    companyName: "Fiducial Expertise",
    companyNameColor: "rgb(187, 184, 184)",
    jobName: "Collaboratrice comptable",
    jobTasks: [
      "Gestion d’un portefeuille d’une trentaine de clients",
      "Déplacements mensuels en clientèle",
      "Tenue comptable et déclarations fiscales",
      "Etablissement des comptes annuels et des liasses fiscales",
      "Etablissement d’états intermédiaires et de prévisionnels",
      "Déclarations d’IRPP (Impôt sur le Revenu des Personnes Physiques)",
    ],
    activePageNumber: 4,
    activeCareerBackground: "/css/career-4.css",
  });
});
app.get("/career/3", (request, response) => {
  response.render("career", {
    date: "11/2016 - 10/2017",
    companyName: "Groupe Y Nexia",
    companyNameColor: "rgb(24, 207, 207)",
    jobName: "Assistante comptable",
    jobTasks: [
      "Déplacements mensuels en clientèle",
      "Tenue comptable et déclarations fiscales",
      "Etablissement des comptes annuels et des liasses fiscales",
    ],
    activePageNumber: 3,
    activeCareerBackground: "/css/career-3.css",
  });
});
app.get("/career/2", (request, response) => {
  response.render("career", {
    date: "09/2014 - 08/2016",
    companyName: "Société Générale",
    companyNameColor: "rgb(235, 28, 28)",
    jobName: "Contrôleuse de gestion",
    jobTasks: [
      "Suivi des frais généraux et de la facturation interne",
      "Participation aux clôtures mensuelles",
      "Participation à l’établissement des estimés trimestriels et du budget annuel",
    ],
    school: "IAE Gustave Eiffel",
    degree:
      "Master Comptabilité, Contrôle, Audit en apprentissage - Mention bien",
    activePageNumber: 2,
    activeCareerBackground: "/css/career-2.css",
  });
});
app.get("/career/1", (request, response) => {
  response.render("career", {
    date: "10/2013 - 08/2014",
    companyName: "Siemens",
    companyNameColor: "rgb(27, 209, 209)",
    jobName: "Analyste crédit clients",
    jobTasks: [
      "Gestion et analyse d’un portefeuille de comptes clients",
      "Participation au recouvrement et à l’amélioration du DSO <i>(Days Sales Outstanding)</i>",
      "Suivi des litiges et remises de chèques",
    ],
    school: "IAE Gustave Eiffel",
    degree:
      "Licence Comptabilité, Contrôle, Audit en apprentissage - Mention bien",
    activePageNumber: 1,
    activeCareerBackground: "/css/career-1.css",
  });
});

// Projets personnels

app.get("/project/1", (request, response) => {
  response.render("project", {
    date: "11/2020",
    projectName: "Les bonnes adresses d'Evy",
    projectNameColor: "rgb(241, 97, 97)",
    description:
      "A la recherche d'un endroit pour combler une petite ou une grosse faim ?",
    link: "C'est par ici &#x2794;",
    linkToProject: "https://les-bonnes-adresses-d-evy.herokuapp.com/",
    logo: "&#127836;",
    activePageNumber: 1,
  });
});

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
