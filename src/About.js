import React from 'react';
import Footer from './Footer';

function About() {
  return (
    <>
      <div className="about">
	<img src="https://scessila.sirv.com/portfolio/quote.svg" alt="Hello"/>
	<h2>Hello World</h2>
	<section className="content">
	  <p data-aos="fade-up">I’m an enthusiastic web developer and UI/UX designer currently shaping the future of design in Nigeria. I am passionate about creating user centric, delightful and human experiences.</p>
	  <p data-aos="fade-up">With about a year of experience, I’ve enjoyed designing and developing web applications</p>
	  <p data-aos='fade-up'>If you'd like to talk about a project you want help with or need an advice web design, , just drop me a message at <a href="mailto:emmanuelstephen024@gmail.com">emmanuelstephen024@gmail.com</a> . I'm currently AVAILABLE to work on new (and cool) ideas and if you’ve got one of those, hit me up.</p>
	<h2 className="skillset" data-aos="fade-up">MY SKILLSETS</h2>
	<div className="skill">
	  <h1 data-aos="fade-up">Frontend Web</h1>
	  <ul>
	    <li data-aos="fade-down-left">
	      <i className="fa fa-html5"></i>
	      <p>HTML</p>
	    </li>
	    <li data-aos="fade-up-right">
	      <i className="fa fa-css3"></i>
	      <p>CSS</p>
	    </li>
	    <li data-aos="fade-down-left">
	      <i className="fab fa-bootstrap"></i>
	      <p>Bootstrap</p>
	    </li>
	    <li data-aos="fade-up-right">
	      <i className="fab fa-js"></i>
	      <p>Javascript</p>
	    </li>
	    <li data-aos="fade-down-left">
	      <i className="fab fa-react"></i>
	      <p>React.JS</p>
	    </li>
	    <li data-aos="fade-up-right">
	      <i className="fab fa-js"></i>
	      <p>jQuery</p>
	    </li>
          </ul>
        </div>
	<div className="skill">                             <h1>Backend Web</h1>      
	  <ul>                  
	    <li data-aos="fade-down-left">
	      <i className="fab fa-python"></i>
	      <p>Python (Django)</p>
	    </li>     
	    <li data-aos="fade-up-right">
	      <i className="fab fa-node-js"></i>
	      <p>NodeJS</p>
	    </li>   
	    <li data-aos="fade-down-left">
	      <i className="fab fa-js"></i>
	      <p>ExpressJS</p>
	    </li>    
          </ul>                                           </div>
	<div className="skill">       
	  <h1 data-aos="fade-up">Database</h1>        
	  <ul>  
	    <li data-aos="fade-down-left">
	      <i className="fa fa-database"></i>
	      <p>MongoDB</p>
	    </li>
          </ul>                                           </div>
	<div className="skill">                             <h1 data-aos="fade-up">Design</h1>    
	  <ul>   
	    <li data-aos="fade-down-left">
	      <i className="fab fa-figma"></i>
	      <p>Figma</p>
	    </li>  
	  </ul>     
	</div>

	</section>
      </div>
      <Footer />
    </>
  )
}

export default About
