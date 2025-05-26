import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

type Project = {
  title: string;
  demo: string;
  github: string;
  cover: string;
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <Head>
        <title>Tech Style Personal Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Orbitron:700,400&display=swap" rel="stylesheet" />
      </Head>
      <nav id="navbar">
        <ul>
          <li><a href="#welcome-section">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="welcome-section">
        <h1>Hey, I am Xuebawugui</h1>
        <p className="subtitle">A full-stack web developer</p>
      </section>
      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            projects.map((project, index) => (
              <a className="project-tile" key={index} href={project.github} target="_blank" rel="noopener noreferrer">
                <img src={project.cover} alt={project.title} />
                <span>{project.title}</span>
              </a>
            ))
          )}
        </div>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-links">
          <a id="profile-link" href="https://github.com/Xuebawugui" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://mail.google.com/mail/?view=cm&to=xuebawugui@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/忠归-彭-07a91b367" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </>
  );
} 