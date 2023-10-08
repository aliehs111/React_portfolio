import React from "react";
import Project from "./components/Project";
import Container from "react-bootstrap/Container";
import './components/Page.css';

const projects = [
  {
    title: "The Hive Event Planner",
    description: "A full-stack application that allows users to create and manage events. This application uses MySQL, Sequelize, Express.js, React.js, and Node.js.",
    github: "https://github.com/aliehs111/hive_new",
    livelink: "https://desolate-ridge-15241-527f28c2b28b.herokuapp.com/login",
    image: "/assets/hive.png",
  },
  {
    title: "Garden Planner",
    description: "This application is a working prototype for Garden Planner. In the current iteration, the application can be used to search for various plants and view their sunlight and watering requirements. This data is obtained by querying the Perenual API. ",
    github: "https://github.com/aliehs111/garden-planner",
    livelink: "https://aliehs111.github.io/garden-planner/",
    image: "/assets/garden.png", 
  },
  {
    title: "CMS Style Blog",
    description: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site was built completely from scratch and deployed to Heroku.",
    github: "https://github.com/aliehs111/cms-style-blog",
    livelink: "https://blooming-wave-50164-c62b1d49fa76.herokuapp.com/",
    image: "/assets/cms_style_blog.png",
  },

  {
    title: "E-Commerce Back End",
    description: "A back end for an e-commerce site. Built using Express.js API and Sequelize to interact with a MySQL database.",
    github: "https://github.com/aliehs111/e-commerce-back-end",
    livelink: "https://drive.google.com/file/d/18tTH_WwZ8skv2lrxRZ-KaLm5MH8yIVFY/view",
    image: "/assets/ecommerce_backend.png",
  },
  {
    title: "Note Taker",
    description: "An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.",
    github: "",
    livelink: "",
    image: "/assets/note_taker.png",
  },
  {
    title: "Work Day Scheduler",
    description: "A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",
    github: "https://github.com/aliehs111/work-day-scheduler",
    livelink: "https://aliehs111.github.io/work-day-scheduler/",
    image: "/assets/workday_scheduler.png",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that runs in the browser and features dynamically updated HTML and CSS. This app uses the OpenWeather API to retrieve weather data for cities.",
    github: "https://github.com/aliehs111/weather-forecast",
    livelink: "https://aliehs111.github.io/weather-forecast/",
    image: "/assets/weather_dashboard.png",
  },
  {
    title: "Password Generator",
    description: "An application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.",
    github: "https://github.com/aliehs111/JS-Password-Generator",
    livelink: "https://aliehs111.github.io/JS-Password-Generator/",
    image: "/assets/password.jpg",
  },
  {
    title: "Code Quiz",
    description: "A timed coding quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.",
    github: "https://github.com/aliehs111/timed-code-quiz",
    livelink: "https://aliehs111.github.io/timed-code-quiz/",
    image: "/assets/code_quiz.png",
  },

];


function Portfolio() {
  return (
    <div className="page-background"> {/* Apply the background color style */}
      <Container className="page pt-5 d-flex justify-content-between flex-wrap">
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            github={project.github}
            livelink={project.livelink}
            image={project.image}
          />
        ))}
      </Container>
    </div>
  );
}
export default Portfolio;
