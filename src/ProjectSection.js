import React from 'react';
import projectJson from "./projects.json";

import country1 from "./img/country-1.png";
import country2 from "./img/country-2.png";
import imageReactor1 from "./img/image-reactor-1.png";
import imageReactor2 from "./img/image-reactor-2.png";
import sciCalc1 from "./img/sci-calc-1.png";
import sciCalc2 from "./img/sci-calc-2.png";
import tictactoe1 from "./img/tictactoe-1.png";
import tictactoe2 from "./img/tictactoe-2.png";
import weather1 from "./img/weather-1.png";
import weather2 from "./img/weather-2.png";
import overwood from "./img/overwoodPNG.png";

import resume1 from "https://scessila.sirv.com/portfolio/resume1.PNG";
import resume2 from "https://scessila.sirv.com/portfolio/resume2.PNG";


const images = {
  "huddle1":huddle1,
  "huddle2":huddle2,
  "country1":country1,
  "country2":country2,
  "imageReactor1":imageReactor1,
  "imageReactor2":imageReactor2,
  "sciCalc1":sciCalc1,
  "sciCalc2":sciCalc2,
  "tictactoe1":tictactoe1,
  "tictactoe2":tictactoe2,
  "weather1":weather1,
  "weather2":weather2,
  "txt":"adek",
  "overwood":overwood
}


function Project(props) {
  var technologies = props.obj.technologies.map(tech => 
    <div className="tech" key={tech}>{tech}</div>
  )
  return (
    <div className="project">
      <div className="images-part">
        <div 
	  className="image"  
	  style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.image1})`}}
	  data-aos="fade-down"
	>
  	  <h1>{props.obj.id[0]}</h1>
        </div>
        <div 
	  className="image" 
	  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${props.image2})`}} 
	  data-aos="fade-up"
	>
   	  <h1>{props.obj.id[1]}</h1>
        </div>
      </div>
      <div className="project-desc">
	<h2 data-aos="fade-up">{props.obj.name}</h2>
	<h4 className="year" data-aos="fade-up">Year <span>{props.obj.year}</span></h4>
	<div className="technologies" data-aos="fade-up">
	  {technologies}
	</div>  
	<p data-aos="fade-up">{props.obj.desc}</p>
	<div className="buttons">
	  <a href={props.obj.githubLink} data-aos="flip-left">
	    <button>View Git</button>
	  </a>
	  <a href={props.obj.liveLink} data-aos="flip-right">
	    <button>View Live</button>
	  </a>
	</div>
      </div>	
    </div>
  )
}



function ProjectSection() {
  var allProjects = projectJson.map(project => 
    <Project 
      image1={images[project.imageSrc1]} 
      image2={images[project.imageSrc2]}
      key={project.name}
      obj={project}
    />
  )
  return (
    <>
      <div className="projects-area" data-aos="fade-up">
        <h1>Projects</h1>
        {allProjects}
      </div>
    </>
  )
}

export default ProjectSection
