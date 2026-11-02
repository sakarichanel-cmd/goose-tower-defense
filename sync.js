// scripts/sync.js
const GIST_ID = 'YOUR_GIST_ID';

async function fetchDailySeed() {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: { 'User-Agent': 'GTD-Sync-Bot' }
  });
  const data = await res.json();
  console.log('GitHub API payload loaded:', Object.keys(data.files));
}

fetchDailySeed();
