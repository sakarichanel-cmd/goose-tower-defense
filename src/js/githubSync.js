// js/githubSync.js
class GTDGitHubSync {
  constructor(gistId, personalToken = null) {
    this.gistId = gistId;
    this.token = personalToken;
    this.apiBase = 'https://api.github.com';
  }

  async fetchDailySeed() {
    if (!this.gistId) {
      console.warn('[GitHubSync] No Gist ID configured; bypassing remote seed.');
      return null;
    }

    try {
      const response = await fetch(`${this.apiBase}/gists/${this.gistId}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'GooseTowerDefense-Engine'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }

      const gistData = await response.json();
      
      // Look for the JSON file inside the Gist
      const fileName = Object.keys(gistData.files).find(name => name.endsWith('.json'));
      if (!fileName) {
        throw new Error('No JSON payload found in specified Gist');
      }

      const content = JSON.parse(gistData.files[fileName].content);
      console.log(`[GitHubSync] Successfully loaded Daily Seed: ${content.map_name || 'Custom'}`);
      return content;
    } catch (err) {
      console.warn('[GitHubSync] Network/Gist error, falling back to default seed:', err.message);
      return null;
    }
  }

  async exportRunReplay(runData) {
    if (!this.token) {
      console.warn('[GitHubSync] Export skipped: No authentication token provided.');
      return null;
    }

    try {
      const payload = {
        description: `GTD Run Replay - Score: ${runData.score || 0}`,
        public: true,
        files: {
          [`gtd_run_${Date.now()}.json`]: {
            content: JSON.stringify(runData, null, 2)
          }
        }
      };

      const response = await fetch(`${this.apiBase}/gists`, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'GooseTowerDefense-Engine'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`Export failed: ${response.status}`);
      const result = await response.json();
      return result.html_url;
    } catch (err) {
      console.error('[GitHubSync] Export error:', err.message);
      return null;
    }
  }
}
