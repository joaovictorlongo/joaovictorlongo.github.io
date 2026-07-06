import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '..', 'src', 'data', 'pinned-repos.json');
const USER = 'joaovictorlongo';

async function fetchJSON(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'joaovictorlongo.github.io' },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

async function fetchReadme(repo) {
  try {
    const data = await fetchJSON(
      `https://api.github.com/repos/${USER}/${repo}/readme`
    );
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    const summary = content
      .split('\n')
      .filter((l) => l.trim())
      .filter((l) => !l.startsWith('#'))
      .slice(0, 5)
      .join(' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/#{1,6}\s?/g, '')
      .replace(/\*{1,2}/g, '')
      .replace(/`{1,3}/g, '')
      .trim();
    return { full: content, summary: summary || null };
  } catch {
    return { full: null, summary: null };
  }
}

async function main() {
  const pinned = ['elysia-auth', 'scrappingjob', 'open-radar', 'spoticli', 'tt-video-downloader'];

  const repos = await Promise.all(
    pinned.map(async (name) => {
      const repo = await fetchJSON(
        `https://api.github.com/repos/${USER}/${name}`
      );
      const languages = await fetchJSON(
        `https://api.github.com/repos/${USER}/${name}/languages`
      );
      const readme = await fetchReadme(name);
      return {
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description || readme.summary || '',
        url: repo.html_url,
        homepage: repo.homepage || '',
        language: repo.language,
        languages: Object.keys(languages),
        topics: repo.topics || [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        license: repo.license?.spdx_id || null,
        updated_at: repo.updated_at,
        readme_full: readme.full,
        readme_summary: readme.summary,
      };
    })
  );

  const dir = dirname(OUTPUT);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(repos, null, 2));
  console.log(`Fetched ${repos.length} pinned repos → ${OUTPUT}`);
}

main().catch(console.error);
