import type { NextApiRequest, NextApiResponse } from 'next';

type Project = {
  title: string;
  demo: string;
  github: string;
  cover: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  try {
    const response = await fetch('https://api.github.com/users/Xuebawugui/repos', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });
    const repos = await response.json();
    if (!Array.isArray(repos)) {
      console.error('GitHub API 返回的不是数组:', repos);
      return res.status(500).json([]);
    }
    const projects = repos
      .filter((repo: any) => repo.homepage || repo.has_pages)
      .map((repo: any) => ({
        title: repo.name,
        demo: repo.homepage || `https://Xuebawugui.github.io/${repo.name}`,
        github: repo.html_url,
        cover: `https://image.thum.io/get/width/400/crop/300/${repo.homepage || `https://Xuebawugui.github.io/${repo.name}`}`
      }));
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json([]);
  }
} 