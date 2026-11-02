// scripts/sync.js
const GIST_ID = '2ecdcbead1f4079bd218560905181812';

async function fetchDailySeed() {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: { 'User-Agent': 'GTD-Sync-Bot' }
  });
  const data = await res.json();
  console.log('GitHub API payload loaded:', Object.keys(data.files));
}

fetchDailySeed();
