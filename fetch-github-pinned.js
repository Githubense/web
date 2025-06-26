// Usage: node fetch-github-pinned.js <github-username>
// This script fetches pinned repos from a GitHub profile and updates app/data.ts

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const username = process.argv[2];
if (!username) {
  console.error('Usage: node fetch-github-pinned.js <github-username>');
  process.exit(1);
}

const DATA_PATH = path.join(__dirname, 'app', 'data.ts');

async function fetchPinnedRepos(user) {
  const res = await fetch(`https://github.com/${user}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  const repos = [];
  $('.js-pinned-items-reorder-list .pinned-item-list-item').each((_, el) => {
    const name = $(el).find('span.repo').text().trim();
    const description = $(el).find('p.pinned-item-desc').text().trim();
    const link = `https://github.com/${user}/${name}`;
    const image = '/next.svg'; // Default image, customize as needed
    if (name) {
      repos.push({ name, description, link, image, id: `project_${name}` });
    }
  });
  return repos;
}

function formatProject(repo) {
  // Use a descriptive name and allow for a custom image if needed
  // You can customize this logic as needed for your repos
  let name = repo.name;
  let description = repo.description || '';
  let link = repo.link;
  let image = '/next.svg'; // Default image
  let id = repo.id;
  // Example: if the repo is HandDrop, use the custom image and description
  if (name === 'HandDrop') {
    name = 'HandDrop: Share anything in a pinch';
    description = 'Utilize your hand to share content accross devices with a simple pinch gesture.';
    image = '/ratingoImage.png';
    id = 'project1';
  }
  return { name, description, link, image, id };
}

function updateDataTs(projects) {
  let data = fs.readFileSync(DATA_PATH, 'utf8');
  const start = data.indexOf('export const PROJECTS: Project[] = [');
  if (start === -1) throw new Error('PROJECTS array not found');
  const before = data.slice(0, start);
  const after = data.slice(data.indexOf(']', start) + 1);
  const projectsString = projects.map(p => {
    const proj = formatProject(p);
    return `  {\n    name: ${JSON.stringify(proj.name)},\n    description: ${JSON.stringify(proj.description)},\n    link: ${JSON.stringify(proj.link)},\n    image: ${JSON.stringify(proj.image)},\n    id: ${JSON.stringify(proj.id)},\n  },`;
  }).join('\n');
  const newData = `${before}export const PROJECTS: Project[] = [\n${projectsString}\n]${after}`;
  fs.writeFileSync(DATA_PATH, newData, 'utf8');
  console.log('PROJECTS updated in data.ts');
}

(async () => {
  const projects = await fetchPinnedRepos(username);
  if (!projects.length) {
    console.error('No pinned repos found.');
    process.exit(1);
  }
  updateDataTs(projects);
})();
