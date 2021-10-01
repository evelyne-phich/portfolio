const express = require("express");

const { careers, projects } = require("./database/data");

const PORT = 3000;

const app = express();

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
      school: career.school,
      degree: career.degree,
    });
  });
}

// Projets personnels
console.log({ projects });
for (let project of projects) {
  app.get(project.url, (request, response) => {
    response.render(project.page, {
      date: project.date,
      projectName: project.projectName,
      projectNameColor: project.projectNameColor,
      description: project.description,
      link: project.link,
      linkToProject: project.linkToProject,
      logo: project.logo,
      activePageNumber: project.activePageNumber,
      activePage: project.activePage,
    });
  });
}

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
