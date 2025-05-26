import React from 'react';

type ProjectCardProps = {
  title: string;
  demo: string;
  github: string;
  cover: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, demo, github, cover }) => {
  return (
    <a
      className="bg-[#0ff] text-[#181c24] rounded-xl shadow-[0_0_24px_#0ff4,0_2px_8px_#000a] overflow-hidden text-center transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_32px_#0ffb,0_4px_16px_#000c] no-underline flex flex-col"
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={cover}
        alt={title}
        className="w-full border-b border-[#0ff4]"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <span className="block py-6 px-2 text-2xl font-bold tracking-wide">{title}</span>
    </a>
  );
};

export default ProjectCard; 