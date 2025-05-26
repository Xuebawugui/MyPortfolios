import React from 'react';

type ProjectCardProps = {
  title: string;
  demo: string;
  github: string;
  cover: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, demo, github, cover }) => {
  return (
    <div className="project-tile bg-[#181c24] border-2 border-cyan-400 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-cyan-400/50">
      <a href={demo} target="_blank" rel="noopener noreferrer">
        <img
          src={cover}
          alt={title}
          className="w-full h-48 object-cover"
          style={{ maxHeight: 200, objectFit: 'cover' }}
        />
      </a>
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold text-cyan-400 mb-2">{title}</h2>
        <div className="mt-auto flex gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 