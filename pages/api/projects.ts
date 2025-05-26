import type { NextApiRequest, NextApiResponse } from 'next';

type Project = {
  title: string;
  demo: string;
  github: string;
  cover: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  try {
    const response = await fetch('https://api.github.com/users/Xuebawugui/repos');
    const repos = await response.json();
    const projects = repos
      .filter((repo: any) => repo.has_pages)
      .map((repo: any) => ({
        title: repo.name,
        demo: `https://Xuebawugui.github.io/${repo.name}`,
        github: repo.html_url,
        cover: `https://image.thum.io/get/width/400/crop/300/https://Xuebawugui.github.io/${repo.name}`
      }));
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json([]);
  }
} 