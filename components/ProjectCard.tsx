import React from 'react';

type ProjectCardProps = {
  title: string;
  demo: string;
  github: string;
  cover: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, demo, github, cover }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={cover} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex space-x-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-500">Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard; 