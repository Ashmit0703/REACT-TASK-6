import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="header bg-primary text-white py-5 text-center">
        <h1 className="name">Ashmit Sangtani</h1>
        <p className="job-title">Full Stack Developer</p>
      </header>

      <section className="about py-5">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a passionate Full Stack Developer with expertise in JavaScript,
            React, Node.js, Python, Java, C/C++, SQL, Django, and machine
            learning. My proficiency extends to HTML, CSS, and the development
            of server-side applications using ExpressJS. I specialize in
            building scalable and dynamic web applications, employing a diverse
            set of skills that encompasses both front-end and back-end
            technologies. Additionally, I am well-versed in unit testing to
            ensure the reliability and functionality of my code. With a strong
            foundation in a variety of programming languages and frameworks, I
            enjoy tackling complex problems and creating innovative solutions
            across the full software development stack.{" "}
          </p>
        </div>
      </section>

      <section className="contact py-5 bg-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">Contact Me</h2>
          <p>Email: ashmitsangtani3@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="www.linkedin.com/in/ashmit-sangtani-4a00bb250"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Ashmit0703"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
