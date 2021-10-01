const careers = [
  {
    date: "09/2019 - 06/2021",
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
  },
  {
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
  },
  {
    date: "11/2016 - 10/2017",
    companyName: "Groupe Y Nexia",
    companyNameColor: "rgb(8 173 173)",
    jobName: "Assistante comptable",
    jobTasks: [
      "Déplacements mensuels en clientèle",
      "Tenue comptable et déclarations fiscales",
      "Etablissement des comptes annuels et des liasses fiscales",
    ],
  },
  {
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
  },
  {
    date: "10/2013 - 08/2014",
    companyName: "Siemens",
    companyNameColor: "rgb(8 173 173)",
    jobName: "Analyste crédit clients",
    jobTasks: [
      "Gestion et analyse d’un portefeuille de comptes clients",
      "Participation au recouvrement et à l’amélioration du DSO (Days Sales Outstanding)",
      "Suivi des litiges et remises de chèques",
    ],
    school: "IAE Gustave Eiffel",
    degree:
      "Licence Comptabilité, Contrôle, Audit en apprentissage - Mention bien",
  },
];

const projects = [
  {
    date: "02/2021",
    projectName: "Les bonnes recettes d'Evy",
    projectNameColor: "rgb(182, 7, 65)",
    description: "Envie de se régaler avec de la bonne cuisine faite maison ?",
    link: "Par ici &#x2794;",
    linkToProject: "https://les-bonnes-recettes-d-evy.herokuapp.com/",
    logo: '<div class="logoLesBonnesRecettesdEvy">&#127859;</div>',
  },
  {
    date: "02/2021",
    projectName: "Tic-Tac-Toe",
    projectNameColor: "rgb(196, 31, 31)",
    description:
      "A la recherche d'un petit jeu rapide à 2 pour passer le temps ?",
    link: "Par ici &#x2794;",
    linkToProject: "https://tic-tac-toe-evysgames.herokuapp.com/",
    logo: '<img class="logoTicTacToe" src="https://res.cloudinary.com/dvpcjyb48/image/upload/v1612905350/tic-tac-toe_gjrmla.png">',
  },
  {
    date: "11/2020",
    projectName: "Les bonnes adresses d'Evy",
    projectNameColor: "rgb(241, 97, 97)",
    description:
      "A la recherche d'un endroit pour combler une petite ou une grosse faim ?",
    link: "Par ici &#x2794;",
    linkToProject: "https://les-bonnes-adresses-d-evy.herokuapp.com/",
    logo: '<div class="logoLesBonnesAdressesdEvy"> &#127836;</div>',
  },
];

module.exports = {
  careers,
  projects,
};
