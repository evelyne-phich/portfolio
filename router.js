const express = require("express");

const router = express.Router();

const { careers, projects } = require("./database/data");

// Accueil
router.get("/", (request, response) => {
  response.render("index", {
    fullName: "Evelyne PHICH",
    job: "Développeuse fullstack JS",
    activePage: "Accueil",
  });
});

// Parcours professionnel
router.get("/careers", (request, response) => {
  response.render("careers", {
    careers: careers,
    activePage: "Parcours professionnel",
  });
});

// Projets personnels
router.get("/projects", (request, response) => {
  response.render("projects", {
    projects: projects,
    activePage: "Projets personnels",
  });
});

module.exports = router;
